// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';
// import { useNavigation } from '@react-navigation/native';

// const EditCaregiverProfileScreen = () => {
//   const navigation = useNavigation();

//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     specialty: '',
//     experience: '',
//     gender: '',
//     location: '',
//   });

//   /* ================= FETCH PROFILE ================= */
//   useEffect(() => {
//     const loadProfile = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');

//         const res = await api.get('/caregiver/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setForm({
//           name: res.data.name || '',
//           phone: res.data.phone || '',
//           specialty: res.data.specialty || '',
//           experience: res.data.experience?.toString() || '',
//           gender: res.data.gender || '',
//           location: res.data.location || '',
//         });
//       } catch (err) {
//         Alert.alert('Error', 'Failed to load profile');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProfile();
//   }, []);

//   /* ================= SAVE ================= */
//   const handleSave = async () => {
//     try {
//       const token = await AsyncStorage.getItem('token');

//       await api.put(
//         '/caregiver/me',
//         {
//           ...form,
//           experience: Number(form.experience),
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       Alert.alert('Success', 'Profile updated successfully');
//       navigation.goBack();
//     } catch (err) {
//       Alert.alert('Error', 'Failed to update profile');
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#2563EB" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Edit Profile</Text>

//       {Object.entries(form).map(([key, value]) => (
//         <View key={key} style={styles.inputGroup}>
//           <Text style={styles.label}>{key.toUpperCase()}</Text>
//           <TextInput
//             style={styles.input}
//             value={value}
//             onChangeText={(text) =>
//               setForm((prev) => ({ ...prev, [key]: text }))
//             }
//           />
//         </View>
//       ))}

//       <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
//         <Text style={styles.saveText}>Save Changes</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default EditCaregiverProfileScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//   },

//   container: {
//     padding: 20,
//     backgroundColor: '#F9FAFB',
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#111827',
//   },

//   inputGroup: {
//     marginBottom: 14,
//   },

//   label: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginBottom: 4,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 10,
//     padding: 12,
//     backgroundColor: '#FFFFFF',
//   },

//   saveBtn: {
//     marginTop: 30,
//     backgroundColor: '#2563EB',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//   },

//   saveText: {
//     color: '#FFFFFF',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// });




import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { useNavigation } from '@react-navigation/native';

const EditCaregiverProfileScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    specialty: '',
    experience: '',
    gender: '',
    location: '',
  });

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const res = await api.get('/caregiver/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setForm({
          name: res.data.name || '',
          phone: res.data.phone || '',
          specialty: res.data.specialty || '',
          experience: res.data.experience?.toString() || '',
          gender: res.data.gender || '',
          location: res.data.location || '',
        });
      } catch (err) {
        Alert.alert('Error', 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  /* ================= SAVE ================= */
  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      await api.put(
        '/caregiver/me',
        {
          ...form,
          experience: Number(form.experience),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      Alert.alert('Success', 'Profile updated successfully');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Edit Your Profile</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* FORM */}
        <ScrollView contentContainerStyle={styles.form}>
          {Object.entries(form).map(([key, value]) => (
            <View key={key} style={styles.inputGroup}>
              <Text style={styles.label}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(text) =>
                  setForm((prev) => ({ ...prev, [key]: text }))
                }
              />
            </View>
          ))}
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditCaregiverProfileScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '92%',
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
  },

  header: {
    backgroundColor: '#7FB3DC',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  close: {
    fontSize: 20,
    color: '#FFFFFF',
  },

  form: {
    padding: 16,
  },

  inputGroup: {
    marginBottom: 14,
  },

  label: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#FFFFFF',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  cancelBtn: {
    backgroundColor: '#B0C4DE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginRight: 10,
  },

  cancelText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  saveBtn: {
    backgroundColor: '#5B9BD5',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
  },

  saveText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBD5E1',
  },
});
