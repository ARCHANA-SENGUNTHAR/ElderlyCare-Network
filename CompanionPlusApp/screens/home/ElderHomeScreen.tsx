// import { removeToken } from '../../utils/storage';

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const menuItems = [
//   { label: 'Profile', route: 'ElderProfile' },
//   { label: 'Request Caregiver', route: 'SearchCaregivers' },
//   { label: 'Health Dashboard', route: 'HealthDashboard' },
//   { label: 'Add Event', route: 'AddEventScreen' },
//   { label: 'Calendar', route: 'CalendarScreen' },
//   { label: 'Chat List', route: 'ChatListScreen' },
//   { label: 'Help', route: 'HelpScreen' },
//   { label: 'Settings', route: 'SettingsScreen' },
//   { label: 'Notifications', route: 'ElderNotifications' },
//   { label: 'Add Reminder', route: 'AddReminderScreen' },
//   { label: 'Reminders List', route: 'RemindersListScreen' },
// ];

// const ElderHomeScreen = () => {
//   const navigation = useNavigation();
//   const [activeMenu, setActiveMenu] = useState('Profile');

//   const handleMenuPress = (item: any) => {
//     setActiveMenu(item.label);
//     navigation.navigate(item.route as never);
//   };

//   /* ---------------- LOGOUT ---------------- */
// const handleLogout = async () => {
//   await removeToken();
//   navigation.reset({
//     index: 0,
//     routes: [{ name: 'RoleSelection' as never }],
//   });
// };


//   return (
//     <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.rootScroll}>
//       <View style={styles.mainContainer}>
        
//         {/* ========== SIDEBAR ========== */}
//         <ScrollView style={styles.sidebar}>
//           <Text style={styles.sidebarTitle}>COMPANION+</Text>

//           {menuItems.map((item) => (
//             <TouchableOpacity
//               key={item.label}
//               style={[
//                 styles.menuItem,
//                 activeMenu === item.label && styles.activeMenu,
//               ]}
//               onPress={() => handleMenuPress(item)}
//             >
//               <Text
//                 style={[
//                   styles.menuText,
//                   activeMenu === item.label && styles.activeMenuText,
//                 ]}
//               >
//                 {item.label}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* ========== RIGHT CONTENT ========== */}
//         <View style={styles.content}>

//           {/* TOP HEADER */}
//           <View style={styles.topHeader}>
//             <Text style={styles.pageTitle}>Dashboard</Text>

//             <TouchableOpacity
//               style={styles.logoutBtn}
//               onPress={handleLogout}
//             >
//               <Text style={styles.logoutText}>Logout</Text>
//             </TouchableOpacity>
//           </View>

//           {/* PAGE CONTENT */}
//           <ScrollView contentContainerStyle={styles.contentContainer}>
//             <Text style={styles.header}>Welcome to Companion+</Text>
//           </ScrollView>

//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default ElderHomeScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   rootScroll: {
//     minHeight: Dimensions.get('window').height + 100,
//   },

//   mainContainer: {
//     flexDirection: 'row',
//     height: '100vh',
//   },

//   /* SIDEBAR */
//   sidebar: {
//     width: '30%',
//     backgroundColor: '#111827',
//     paddingVertical: 25,
//   },

//   sidebarTitle: {
//     color: '#F9FAFB',
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//   },

//   menuItem: {
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//   },

//   activeMenu: {
//     backgroundColor: '#1F2937',
//     borderLeftWidth: 4,
//     borderLeftColor: '#22C55E',
//   },

//   menuText: {
//     fontSize: 20,
//     color: '#D1D5DB',
//   },

//   activeMenuText: {
//     color: '#22C55E',
//     fontWeight: 'bold',
//   },

//   /* CONTENT */
//   content: {
//     width: '70%',
//     backgroundColor: '#F9FAFB',
//   },

//   /* TOP HEADER */
//   topHeader: {
//     height: 70,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 1,
//     borderColor: '#E5E7EB',
//     paddingHorizontal: 30,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },

//   pageTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#111827',
//   },

//   logoutBtn: {
//     backgroundColor: '#DC2626',
//     paddingVertical: 8,
//     paddingHorizontal: 18,
//     borderRadius: 6,
//   },

//   logoutText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   contentContainer: {
//     padding: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   header: {
//     fontSize: 34,
//     fontWeight: 'bold',
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

const menuItems = [
  { label: 'Profile', route: 'ElderProfile', icon: '👤' },
  { label: 'Request Caregiver', route: 'SearchCaregivers', icon: '🧑‍⚕️' },
  { label: 'Health Dashboard', route: 'HealthDashboard', icon: '❤️' },
  { label: 'Calendar', route: 'CalendarScreen', icon: '📅' },
  { label: 'Add Event', route: 'AddEventScreen', icon: '➕' },
  { label: 'Chat', route: 'ChatListScreen', icon: '💬' },
  { label: 'Notifications', route: 'ElderNotifications', icon: '🔔' },
  { label: 'Add Reminder', route: 'AddReminderScreen', icon: '⏰' },
  { label: 'Reminders', route: 'RemindersListScreen', icon: '📝' },
  { label: 'Settings', route: 'SettingsScreen', icon: '⚙️' },
   { label: 'AIChat', route: 'AIChat', icon: '🤖' },
   //{ label: 'VoiceChat', route: 'VoiceChat', icon: '🎤' },
  
  
];

const ElderHomeScreen = () => {
  const navigation = useNavigation();

 const handleLogout = async () => {
  await removeToken();
  navigation.reset({
    index: 0,
    routes: [{ name: 'RoleSelection' as never }],
  });
};

  return (
    <View style={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Companion+</Text>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* ===== WELCOME ===== */}
      <Text style={styles.welcome}>Welcome 👋</Text>
      <Text style={styles.subWelcome}>
        Manage your care and health easily
      </Text>

      {/* ===== DASHBOARD GRID ===== */}
      <ScrollView contentContainerStyle={styles.grid}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => navigation.navigate(item.route as never)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ElderHomeScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
    paddingHorizontal: 20,
  },

  /* HEADER */
  header: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E3A8A',
  },

  logoutBtn: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },

  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

  /* WELCOME */
  welcome: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
  },

  subWelcome: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 20,
  },

  /* GRID */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },

  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 10,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 4,
  },

  icon: {
    fontSize: 34,
    marginBottom: 10,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
  },
});
