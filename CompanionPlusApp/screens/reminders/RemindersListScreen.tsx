type Remainder = {
  _id: string;   // 🔥 MongoDB ID
  time: string;
  message: string;
  completed?: boolean;
};


import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  RefreshControl,
  Platform,
  LayoutAnimation,
  UIManager,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { useNavigation } from '@react-navigation/native';



// enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/* ================= TYPES ================= */
type Reminder = {
  _id: string;
  title: string;
  description: string;
  datetime: string;
  completed: boolean;
};

const RemindersListScreen = () => {
  const navigation = useNavigation();
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);

  // form fields
  const [formTime, setFormTime] = useState('');
  const [formMessage, setFormMessage] = useState('');

  /* ================= FETCH REMINDERS ================= */
  const fetchReminders = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const res = await api.get('/reminders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReminders(res.data);
    } catch (err) {
      console.log('FETCH REMINDERS ERROR:', err);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  /* ================= REFRESH ================= */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchReminders().finally(() => setRefreshing(false));
  }, []);

  /* ================= EDIT ================= */
  const openEditModal = (item: Reminder) => {
    setEditingReminder(item);
    setFormTime(new Date(item.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setFormMessage(item.description);
    setModalVisible(true);
  };

  /* ================= SAVE EDIT ================= */
  const saveReminder = async () => {
    if (!formTime.trim() || !formMessage.trim()) {
      Alert.alert('Validation', 'Please enter time and message');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('token');

      await api.put(
        `/reminders/${editingReminder?._id}`,
        {
          description: formMessage,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setModalVisible(false);
      fetchReminders();
    } catch (err) {
      Alert.alert('Error', 'Failed to update reminder');
    }
  };

  /* ================= DELETE ================= */
const confirmDelete = (id: string) => {
  Alert.alert("Delete reminder?", "Are you sure?", [
    { text: "Cancel", style: "cancel" },
    {
      text: "Delete",
      style: "destructive",
      onPress: async () => {
        try {
          const token = await AsyncStorage.getItem("token");

          await api.delete(`/reminders/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

          // ✅ ALWAYS re-fetch from DB
          fetchReminders();

        } catch (error) {
          Alert.alert("Error", "Failed to delete reminder");
        }
      },
    },
  ]);
};

useEffect(() => {
  const unsubscribe = navigation.addListener("focus", fetchReminders);
  return unsubscribe;
}, [navigation]);

  /* ================= TOGGLE COMPLETE ================= */
  const toggleComplete = async (item: Reminder) => {
    try {
      const token = await AsyncStorage.getItem('token');

      await api.put(
        `/reminders/${item._id}`,
        { completed: !item.completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      fetchReminders();
    } catch {
      Alert.alert('Error', 'Update failed');
    }
  };

  /* ================= RENDER ================= */
  const renderReminder = ({ item }: { item: Reminder }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => toggleComplete(item)}
      style={[
        styles.reminderCard,
        item.completed && styles.reminderCardCompleted,
      ]}
    >
      <View style={styles.reminderLeft}>
        <Text style={[styles.reminderTime, item.completed && styles.completedText]}>
          {new Date(item.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
        <Text style={[styles.reminderMessage, item.completed && styles.completedText]}>
          {item.description}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => openEditModal(item)}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => confirmDelete(item._id)}
        >
          <Text style={[styles.actionText, styles.deleteText]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  /* ================= UI ================= */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Your Reminders</Text>
      </View>

      <FlatList
        data={reminders}
        keyExtractor={(item) => item._id}
        renderItem={renderReminder}
        contentContainerStyle={[styles.listContent, reminders.length === 0 && styles.listEmpty]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 40 }}>
            No reminders yet
          </Text>
        }
      />

      {/* ================= EDIT MODAL ================= */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Edit Reminder</Text>

            <TextInput
              style={styles.input}
              value={formMessage}
              onChangeText={setFormMessage}
              placeholder="Reminder text"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalSave} onPress={saveReminder}>
                <Text style={styles.modalSaveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RemindersListScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F8' },
  headerRow: { padding: 20 },
  heading: { fontSize: 24, fontWeight: '700' },

  listContent: { paddingHorizontal: 20, paddingBottom: 120 },
  listEmpty: { flexGrow: 1, justifyContent: 'center' },

  reminderCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminderCardCompleted: { backgroundColor: '#F3F7F3' },

  reminderLeft: { flex: 1 },
  reminderTime: { fontSize: 18, fontWeight: '700', color: '#0F766E' },
  reminderMessage: { fontSize: 15, marginTop: 6 },

  completedText: { textDecorationLine: 'line-through', color: '#9CA3AF' },

  actions: { flexDirection: 'row' },
  actionButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: '#E6F4EA',
  },
  actionText: { fontSize: 13, fontWeight: '600' },

  deleteButton: { backgroundColor: '#FFF1F2' },
  deleteText: { color: '#B91C1C' },

  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000066',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    borderRadius: 8,
  },
  modalButtons: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 14 },
  modalCancel: { padding: 10 },
  modalCancelText: { color: '#374151' },
  modalSave: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginLeft: 10,
  },
  modalSaveText: { color: '#fff', fontWeight: '700' },
});
