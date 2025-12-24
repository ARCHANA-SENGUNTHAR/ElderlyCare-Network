import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

const ElderProfileScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Not logged in', 'Please login to view profile');
        return;
      }

      const response = await api.get('/elder/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfile(response.data);
    } catch (error: any) {
      Alert.alert('Profile Error', 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProfile();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.loaderContainer}>
        <Text>No profile available</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* PROFILE HEADER */}
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {profile.name?.charAt(0) ?? 'A'}
          </Text>
        </View>

        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>Elder</Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile' as never)}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* PROFILE DETAILS */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{profile.email}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{profile.phone || 'N/A'}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{profile.age}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>{profile.gender}</Text>
          </View>
        </View>

        <View style={styles.infoBlockFull}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{profile.address}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ElderProfileScreen;

/* ===================== MOBILE FRIENDLY STYLES ===================== */

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flexGrow: 1,
    backgroundColor: '#b1c9e1ff',
    padding: 20,
    alignItems: 'center',
  },

  /* HEADER CARD */
  headerCard: {
    width: '100%',
    backgroundColor: '#79acd8ff',
    borderRadius: 22,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 6,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#79acd8ff',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  role: {
    fontSize: 14,
    color: '#DCFCE7',
    marginBottom: 14,
  },

  editButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 20,
  },

  editText: {
    color: '#79acd8ff',
    fontWeight: '700',
  },

  /* INFO CARD */
  infoCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  infoBlock: {
    width: '48%',
  },

  infoBlockFull: {
    marginTop: 6,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});
