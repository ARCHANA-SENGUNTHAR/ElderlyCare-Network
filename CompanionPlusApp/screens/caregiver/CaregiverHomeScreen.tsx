// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const CaregiverHomeScreen = () => {
//   const navigation = useNavigation();

//   const Card = ({
//     title,
//     icon,
//     onPress,
//   }: {
//     title: string;
//     icon: string;
//     onPress: () => void;
//   }) => (
//     <TouchableOpacity style={styles.card} onPress={onPress}>
//       <Text style={styles.icon}>{icon}</Text>
//       <Text style={styles.cardText}>{title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* HEADER */}
//  <View style={styles.infoCard}>
//        <Text style={styles.infoTitle}>Your Care Journey</Text>
//          <Text style={styles.infoText}>
//           Manage your profile, bookings and elder requests.
//         </Text>
//        </View>

//       <Text style={styles.heading}>Caregiver Dashboard</Text>
//       <Text style={styles.subheading}>
//         Manage your caregiving activities with ease
//       </Text>

//       {/* GRID */}
//       <View style={styles.grid}>
//         <Card
//           title="My Profile"
//           icon="👤"
//           onPress={() => navigation.navigate('CaregiverProfile' as never)}
//         />
          
//         <Card
//           title="Settings"
//           icon="⚙️"
//           onPress={() => navigation.navigate('Settings' as never)}
//         />

//         <Card
//           title="Notifications"
//           icon="🔔"
//           onPress={() => navigation.navigate('CaregiverNotifications' as never)}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// export default CaregiverHomeScreen;
// /* ===================== STYLES ===================== */


// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F4F6F8',
//     alignItems: 'center',
//     paddingVertical: 30,
//   },

//   heading: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 6,
//   },

//   subheading: {
//     fontSize: 15,
//     color: '#6B7280',
//     marginBottom: 28,
//   },

//   /* INFO CARD */
//   infoCard: {
//     width: '92%',
//     backgroundColor: '#2563EB',
//     borderRadius: 16,
//     padding: 18,
//     marginBottom: 25,
//   },

//   infoTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//   },

//   infoText: {
//     fontSize: 14,
//     color: '#E0E7FF',
//   },
//   grid: {
//     width: '90%',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },

//   card: {
//     width: '47%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingVertical: 30,
//     alignItems: 'center',
//     marginBottom: 18,

//     shadowColor: '#000',
//     shadowOpacity: 0.08,
//     shadowOffset: { width: 0, height: 8 },
//     shadowRadius: 12,
//     elevation: 5,
//   },

//   icon: {
//     fontSize: 34,
//     marginBottom: 12,
//   },

//   cardText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },
// });


import { removeToken } from '../../utils/storage';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CaregiverHomeScreen = () => {
  const navigation = useNavigation();

  /* ================= LOGOUT ================= */
const handleLogout = async () => {
  await removeToken();
  navigation.reset({
    index: 0,
    routes: [{ name: 'RoleSelection' as never }],
  });
};


  const Card = ({
    title,
    icon,
    onPress,
  }: {
    title: string;
    icon: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ===== TOP BAR ===== */}
      <View style={styles.topBar}>
        <Text style={styles.pageTitle}>Caregiver Dashboard</Text>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* INFO CARD */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Your Care Journey</Text>
        <Text style={styles.infoText}>
          Manage your profile, bookings and elder requests.
        </Text>
      </View>

      <Text style={styles.subheading}>
        Manage your caregiving activities with ease
      </Text>

      {/* GRID */}
      <View style={styles.grid}>
        <Card
          title="My Profile"
          icon="👤"
          onPress={() => navigation.navigate('CaregiverProfile' as never)}
        />

        <Card
          title="Settings"
          icon="⚙️"
          onPress={() => navigation.navigate('CaregiverSettings' as never)}
        />

        <Card
          title="Notifications"
          icon="🔔"
          onPress={() => navigation.navigate('CaregiverNotifications' as never)}
        />
      </View>
    </ScrollView>
  );
};

export default CaregiverHomeScreen;

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#b1c9e1ff',
    alignItems: 'center',
    paddingVertical: 30,
  },

  /* TOP BAR */
  topBar: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },

  logoutBtn: {
    backgroundColor: '#DC2626',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  logoutText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  subheading: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 28,
  },

  /* INFO CARD */
  infoCard: {
    width: '92%',
    backgroundColor: '#2563EB',
    borderRadius: 16,
    padding: 18,
    marginBottom: 25,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 14,
    color: '#E0E7FF',
  },

  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 5,
  },

  icon: {
    fontSize: 34,
    marginBottom: 12,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});
