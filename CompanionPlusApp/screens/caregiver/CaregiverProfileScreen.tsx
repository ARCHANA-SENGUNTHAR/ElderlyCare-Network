import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const CaregiverProfileScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  
    const loadProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const res = await api.get('/caregiver/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(res.data);
      } catch (err) {
        console.log('CARE GIVER PROFILE ERROR:', err);
      } finally {
        setLoading(false);
      }
    };

    useFocusEffect(
    useCallback(() => {
      loadProfile();
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

  const firstLetter = profile.name?.charAt(0).toUpperCase();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* PROFILE HEADER */}
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>

        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>Caregiver</Text>

        {/* ✅ EDIT BUTTON */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditCaregiverProfile' as never)}
        >
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* PROFILE DETAILS */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Professional Information</Text>

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
            <Text style={styles.label}>Specialty</Text>
            <Text style={styles.value}>{profile.specialty || 'N/A'}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Experience</Text>
            <Text style={styles.value}>
              {profile.experience ? `${profile.experience} years` : 'N/A'}
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>{profile.gender || 'N/A'}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{profile.location || 'N/A'}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CaregiverProfileScreen;

/* ===================== STYLES ===================== */

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

  /* EDIT BUTTON */
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
