

// Path: CompanionPlusApp/screens/reminders/AddReminderScreen.tsx
import React, { useState, useMemo } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../utils/api";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';

/* ✅ Conditional DateTimePicker (NO WEB CRASH) */
let DateTimePicker: any = null;
if (Platform.OS !== 'web') {
  DateTimePicker = require('@react-native-community/datetimepicker').default;
}

type RepeatOption = 'None' | 'Daily' | 'Weekly' | 'Monthly';

const AddReminderScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [repeat, setRepeat] = useState<RepeatOption>('None');

  const isValid = useMemo(() => {
    return title.trim() && description.trim() && dateTime;
  }, [title, description, dateTime]);

  const formatDate = (d: Date | null) =>
    d ? d.toLocaleDateString() : 'Select date';

  const formatTime = (d: Date | null) =>
    d ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Select time';

  /* ===================== DATE / TIME HANDLERS ===================== */

  const onChangeDate = (_: any, selected?: Date) => {
    setShowDatePicker(false);
    if (!selected) return;

    const current = dateTime ?? new Date();
    current.setFullYear(selected.getFullYear(), selected.getMonth(), selected.getDate());
    setDateTime(new Date(current));
  };

  const onChangeTime = (_: any, selected?: Date) => {
    setShowTimePicker(false);
    if (!selected) return;

    const current = dateTime ?? new Date();
    current.setHours(selected.getHours(), selected.getMinutes(), 0, 0);
    setDateTime(new Date(current));
  };

  /* ===================== WEB INPUT HANDLERS ===================== */

  const onWebDateChange = (e: any) => {
    const [year, month, day] = e.target.value.split('-').map(Number);
    const current = dateTime ?? new Date();
    current.setFullYear(year, month - 1, day);
    setDateTime(new Date(current));
    setShowDatePicker(false);
  };

  const onWebTimeChange = (e: any) => {
    const [hh, mm] = e.target.value.split(':').map(Number);
    const current = dateTime ?? new Date();
    current.setHours(hh, mm, 0, 0);
    setDateTime(new Date(current));
    setShowTimePicker(false);
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setDateTime(null);
    setRepeat('None');
  };

 const handleAddReminder = async () => {
  if (!isValid) {
    Alert.alert("Incomplete", "Please fill all fields");
    return;
  }

  try {
    const token = await AsyncStorage.getItem("token");

    await api.post(
      "/reminders",
      {
        title,
        description,
        datetime: dateTime,
        repeat,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    Alert.alert("Success", "Reminder added!");
    navigation.goBack();
  } catch (err) {
    Alert.alert("Error", "Failed to save reminder");
  }
};


  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.wrapper}>

        {/* HEADER */}
        <View style={styles.headerBox}>
          <Text style={styles.header}>Add New Reminder</Text>
          <Text style={styles.subHeader}>
            Create reminders to stay organized and never miss a task
          </Text>
        </View>

        {/* FORM */}
        <View style={styles.card}>

          <Text style={styles.label}>Title</Text>
          <TextInput
            placeholder="Enter reminder title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />

          <Text style={[styles.label, { marginTop: 10 }]}>Description</Text>
          <TextInput
            placeholder="Describe the reminder"
            style={[styles.input, styles.textArea]}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          {/* DATE & TIME */}
          <View style={styles.row}>

            {/* DATE */}
            <View style={styles.half}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity
                style={styles.pickerBtn}
                onPress={() => setShowDatePicker(!showDatePicker)}
              >
                <Text style={styles.pickerBtnText}>{formatDate(dateTime)}</Text>
              </TouchableOpacity>

              {Platform.OS === 'web' && showDatePicker && (
                <input type="date" style={styles.webPicker} onChange={onWebDateChange} />
              )}

              {Platform.OS !== 'web' && showDatePicker && DateTimePicker && (
                <DateTimePicker
                  value={dateTime ?? new Date()}
                  mode="date"
                  onChange={onChangeDate}
                />
              )}
            </View>

            {/* TIME */}
            <View style={styles.half}>
              <Text style={styles.label}>Time</Text>
              <TouchableOpacity
                style={styles.pickerBtn}
                onPress={() => setShowTimePicker(!showTimePicker)}
              >
                <Text style={styles.pickerBtnText}>{formatTime(dateTime)}</Text>
              </TouchableOpacity>

              {Platform.OS === 'web' && showTimePicker && (
                <input type="time" style={styles.webPicker} onChange={onWebTimeChange} />
              )}

              {Platform.OS !== 'web' && showTimePicker && DateTimePicker && (
                <DateTimePicker
                  value={dateTime ?? new Date()}
                  mode="time"
                  onChange={onChangeTime}
                />
              )}
            </View>

          </View>

          {/* REPEAT */}
          <Text style={[styles.label, { marginTop: 14 }]}>Repeat</Text>
          <View style={styles.selectorRow}>
            {(['None', 'Daily', 'Weekly', 'Monthly'] as RepeatOption[]).map((r) => (
              <TouchableOpacity
                key={r}
                style={[styles.selector, repeat === r && styles.selectorActive]}
                onPress={() => setRepeat(r)}
              >
                <Text style={[styles.selectorText, repeat === r && styles.selectorTextActive]}>
                  {r}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>

        {/* BUTTONS */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.clearBtn} onPress={clearForm}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addButton, !isValid && styles.addButtonDisabled]}
            onPress={handleAddReminder}
            disabled={!isValid}
          >
            <Text style={styles.addButtonText}>Add Reminder</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default AddReminderScreen;

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: '#a9c1d9ff',
    alignItems: 'center',
    paddingVertical: 40,
  },
  wrapper: {
    width: '100%',
    maxWidth: 620,
    paddingHorizontal: 20,
  },
  headerBox: { marginBottom: 24 },
  header: { fontSize: 24, fontWeight: '700', color: '#0F172A' },
  subHeader: { fontSize: 14, color: '#64748B', marginTop: 6 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  label: { fontSize: 13, color: '#475569', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#E6E9EE',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  textArea: { minHeight: 90, textAlignVertical: 'top' },

  row: { flexDirection: 'row', gap: 12, marginTop: 10 },
  half: { flex: 1 },

  pickerBtn: {
    borderWidth: 1,
    borderColor: '#E6E9EE',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
  },
  pickerBtnText: { fontSize: 15 },

  webPicker: {
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
    border: '1px solid #E6E9EE',
    fontSize: 14,
    width: '100%',
  },

  selectorRow: { flexDirection: 'row', gap: 8, marginTop: 6 },
  selector: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E9EE',
  },
  selectorActive: { backgroundColor: '#111827', borderColor: '#111827' },
  selectorText: { fontSize: 13 },
  selectorTextActive: { color: '#fff' },

  buttonsRow: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 18, gap: 10 },
  clearBtn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E6E9EE',
  },
  clearText: { fontWeight: '600' },
  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#10B981',
    borderRadius: 10,
  },
  addButtonDisabled: { backgroundColor: '#6EE7B7' },
  addButtonText: { color: '#fff', fontWeight: '700' },
});
