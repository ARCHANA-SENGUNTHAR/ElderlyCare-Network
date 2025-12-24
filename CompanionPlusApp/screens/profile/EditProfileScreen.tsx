


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const EditProfileScreen = () => {
//   const navigation = useNavigation();

//   // ✅ SAME CONTENT (UNCHANGED)
//   const [name, setName] = useState('Anisa');
//   const [age, setAge] = useState('25');
//   const [relationship, setRelationship] = useState('Daughter');
//   const [address, setAddress] = useState('Chennai');
//   const [contact, setContact] = useState('1234567890');

//   const saveProfile = () => {
//     console.log('Profile Updated:', {
//       name,
//       age,
//       relationship,
//       address,
//       contact,
//     });
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.overlay}>
//       <View style={styles.modal}>

//         {/* HEADER */}
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Edit your Profile</Text>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Text style={styles.close}>✕</Text>
//           </TouchableOpacity>
//         </View>

//         {/* BODY */}
//         <ScrollView contentContainerStyle={styles.body}>

//           {/* LEFT PANEL (PHOTO) */}
//           <View style={styles.leftPanel}>
//             <Text style={styles.photoLabel}>Photo:</Text>
//             <View style={styles.avatar}>
//               <Text style={styles.avatarText}>A</Text>
//             </View>
//             <TouchableOpacity style={styles.photoButton}>
//               <Text style={styles.photoButtonText}>CHANGE PHOTO</Text>
//             </TouchableOpacity>
//           </View>

//           {/* RIGHT PANEL (FORM) */}
//           <View style={styles.rightPanel}>

//             <View style={styles.field}>
//               <Text style={styles.label}>Name</Text>
//               <TextInput style={styles.input} value={name} onChangeText={setName} />
//             </View>

//             <View style={styles.field}>
//               <Text style={styles.label}>Age</Text>
//               <TextInput
//                 style={styles.input}
//                 value={age}
//                 keyboardType="numeric"
//                 onChangeText={setAge}
//               />
//             </View>

//             <View style={styles.field}>
//               <Text style={styles.label}>Relationship</Text>
//               <TextInput
//                 style={styles.input}
//                 value={relationship}
//                 onChangeText={setRelationship}
//               />
//             </View>

//             <View style={styles.field}>
//               <Text style={styles.label}>Address</Text>
//               <TextInput
//                 style={[styles.input, styles.textArea]}
//                 value={address}
//                 multiline
//                 onChangeText={setAddress}
//               />
//             </View>

//             <View style={styles.field}>
//               <Text style={styles.label}>Contact</Text>
//               <TextInput
//                 style={styles.input}
//                 value={contact}
//                 keyboardType="phone-pad"
//                 onChangeText={setContact}
//               />
//             </View>

//           </View>
//         </ScrollView>

//         {/* FOOTER */}
//         <View style={styles.footer}>
//           <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
//             <Text style={styles.footerText}>Cancel</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
//             <Text style={styles.footerText}>Save</Text>
//           </TouchableOpacity>
//         </View>

//       </View>
//     </View>
//   );
// };

// export default EditProfileScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: '#00000055',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   modal: {
//     width: '90%',
//     maxWidth: 900,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 6,
//     overflow: 'hidden',
//   },

//   /* HEADER */
//   header: {
//     backgroundColor: '#4CAF50',
//     padding: 14,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   close: {
//     color: '#FFFFFF',
//     fontSize: 22,
//   },

//   /* BODY */
//   body: {
//     flexDirection: 'row',
//     padding: 20,
//   },

//   leftPanel: {
//     width: '30%',
//     alignItems: 'center',
//   },
//   photoLabel: {
//     marginBottom: 10,
//     fontWeight: '600',
//   },
//   avatar: {
//     width: 110,
//     height: 110,
//     borderRadius: 55,
//     backgroundColor: '#CBD5E1',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   avatarText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#475569',
//   },
//   photoButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 8,
//     paddingHorizontal: 14,
//     borderRadius: 4,
//   },
//   photoButtonText: {
//     color: '#FFFFFF',
//     fontSize: 13,
//   },

//   rightPanel: {
//     width: '70%',
//     paddingLeft: 30,
//   },

//   field: {
//     marginBottom: 14,
//   },
//   label: {
//     fontSize: 14,
//     color: '#374151',
//     marginBottom: 4,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 4,
//     padding: 10,
//     fontSize: 15,
//   },
//   textArea: {
//     height: 70,
//     textAlignVertical: 'top',
//   },

//   /* FOOTER */
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     padding: 14,
//     borderTopWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   cancelBtn: {
//     backgroundColor: '#97ec91ff',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 4,
//     marginRight: 10,
//   },
//   saveBtn: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 8,
//     paddingHorizontal: 22,
//     borderRadius: 4,
//   },
//   footerText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });




import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
  });

  // Fetch profile on load
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const res = await api.get("/elder/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setForm({
          name: res.data.name || "",
          age: res.data.age?.toString() || "",
          gender: res.data.gender || "",
          phone: res.data.phone || "",
          address: res.data.address || "",
        });

      } catch (error) {
        console.log("Profile Load Error:", error);
      }
    };

    loadProfile();
  }, []);

  // SAVE PROFILE FUNCTION (Corrected With api.put("/elder/update", form))
  const saveProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      // ✅ Your requested line
      const response = await api.put("/elder/update", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Alert.alert("Success", "Profile updated!");
      navigation.goBack();

    } catch (error: any) {
      console.log("Update Error:", error.response?.data || error);
      Alert.alert("Update Failed", error.response?.data?.message || "Try again.");
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit Your Profile</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* BODY */}
        <ScrollView contentContainerStyle={styles.body}>

          {/* LEFT SIDE PHOTO */}
          {/* <View style={styles.leftPanel}>
            <Text style={styles.photoLabel}>Photo:</Text>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {form.name ? form.name.charAt(0).toUpperCase() : "A"}
              </Text>
            </View>

            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonText}>CHANGE PHOTO</Text>
            </TouchableOpacity>
          </View> */}

          {/* RIGHT PANEL */}
          <View style={styles.rightPanel}>

            {/* Name */}
            <View style={styles.field}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={form.name}
                onChangeText={(t) => setForm({ ...form, name: t })}
              />
            </View>

            {/* Age */}
            <View style={styles.field}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value={form.age}
                onChangeText={(t) =>
                  setForm({ ...form, age: t.replace(/[^0-9]/g, "") })
                }
                keyboardType="numeric"
              />
            </View>

            {/* Gender */}
            <View style={styles.field}>
              <Text style={styles.label}>Gender</Text>
              <TextInput
                style={styles.input}
                value={form.gender}
                onChangeText={(t) => setForm({ ...form, gender: t })}
              />
            </View>

            {/* Address */}
            <View style={styles.field}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={form.address}
                onChangeText={(t) => setForm({ ...form, address: t })}
                multiline
              />
            </View>

            {/* Phone */}
            <View style={styles.field}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                value={form.phone}
                onChangeText={(t) =>
                  setForm({ ...form, phone: t.replace(/[^0-9]/g, "") })
                }
                keyboardType="phone-pad"
              />
            </View>

          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.footerText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveBtn}
            onPress={saveProfile}
          >
            <Text style={styles.footerText}>Save</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default EditProfileScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '90%',
    maxWidth: 900,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    overflow: 'hidden',
  },

  header: {
    backgroundColor: '#79acd8ff',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  close: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  body: {
    flexDirection: 'row',
    padding: 20,
  },

  leftPanel: {
    width: '30%',
    alignItems: 'center',
  },

  photoLabel: {
    marginBottom: 10,
    fontWeight: '600',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#475569',
  },

  photoButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 4,
  },

  photoButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },

  rightPanel: {
    width: '70%',
    paddingLeft: 30,
  },

  field: {
    marginBottom: 14,
  },

  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 10,
    fontSize: 15,
  },

  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 14,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },

  cancelBtn: {
    backgroundColor: '#acc5deff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginRight: 10,
  },

  saveBtn: {
    backgroundColor: '#699eccff',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 4,
  },

  footerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
