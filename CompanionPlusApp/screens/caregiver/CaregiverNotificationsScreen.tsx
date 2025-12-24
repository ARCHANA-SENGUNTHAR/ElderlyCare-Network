
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

interface Notification {
  _id: string;
  elderId: {
    name: string;
  };
  message: string;
  preferredTime: string;
  status: string;
  createdAt: string;
}

const CaregiverNotificationsScreen = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH NOTIFICATIONS ================= */
  const fetchNotifications = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const caregiverId = await AsyncStorage.getItem('caregiverId');

      if (!token || !caregiverId) {
        console.log('Missing token or caregiverId');
        return;
      }

      const res = await api.get<Notification[]>(
        `/requests/caregiver/${caregiverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setNotifications(res.data);
      setLoading(false);

    } catch (error: any) {
      console.log(
        'Notification Fetch Error:',
        error.response?.data || error.message
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  /* ================= ACCEPT REQUEST ================= */
  const handleAccept = async (requestId: string) => {
    try {
      const token = await AsyncStorage.getItem('token');

      await api.put(
        `/requests/${requestId}/accept`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Alert.alert('Accepted', 'Request accepted successfully');

      // 🔄 Refresh list
      fetchNotifications();

    } catch (error: any) {
      console.log('Accept Error:', error.response?.data || error.message);
      Alert.alert('Error', 'Failed to accept request');
    }
  };

  /* ================= UI ================= */
  const renderItem = ({ item }: { item: Notification }) => (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.elderName}>👵 {item.elderId.name}</Text>

        <Text
          style={[
            styles.status,
            item.status === 'pending'
              ? styles.pending
              : item.status === 'accepted'
              ? styles.accepted
              : styles.rejected,
          ]}
        >
          {item.status.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.message}>{item.message}</Text>

      <View style={styles.footerRow}>
        <Text style={styles.time}>🕒 {item.preferredTime}</Text>
        <Text style={styles.date}>
          {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>

      {/* ACTION BUTTONS */}
      {item.status === 'pending' && (
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.acceptBtn}
            onPress={() => handleAccept(item._id)}
          >
            <Text style={styles.actionText}>Accept</Text>
          </TouchableOpacity>
{/* 
          <TouchableOpacity style={styles.rejectBtn}>
            <Text style={styles.actionText}>Reject</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text>Loading notifications...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notifications yet</Text>
        }
      />
    </View>
  );
};

export default CaregiverNotificationsScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
    padding: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  elderName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },

  status: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  pending: { backgroundColor: '#F59E0B' },
  accepted: { backgroundColor: '#22C55E' },
  rejected: { backgroundColor: '#EF4444' },

  message: {
    fontSize: 15,
    color: '#334155',
    marginVertical: 6,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  time: {
    fontSize: 13,
    color: '#475569',
  },

  date: {
    fontSize: 12,
    color: '#94A3B8',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  acceptBtn: {
    backgroundColor: '#22C55E',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  rejectBtn: {
    backgroundColor: '#EF4444',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  actionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#94A3B8',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


