




// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Platform,
//   Dimensions,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Alert } from 'react-native';

// const menuItems = [
//   { label: 'Profile', route: 'ElderProfile' },
//   { label: 'Request Caregiver', route: 'SearchCaregivers' },
//   { label: 'Health Dashboard', route: 'HealthDashboard' },
//   { label: 'Emergency SOS', route: 'SOSButton' },
//   { label: 'Add Event', route: 'AddEventScreen' },
//   { label: 'Calendar', route: 'CalendarScreen' },
//   { label: 'Chat List', route: 'ChatListScreen' },
//   { label: 'Help', route: 'HelpScreen' },
//   { label: 'Settings', route: 'SettingsScreen' },
//   { label: 'Book Consultation', route: 'BookConsultationScreen' },
//   { label: 'Doctor List', route: 'DoctorListScreen' },
//   { label: 'My Appointments', route: 'MyAppointmentsScreen' },
//   { label: 'Linked Elders', route: 'LinkedEldersScreen' },
//   { label: 'Relation Dashboard', route: 'RelationDashboardScreen' },
//   { label: 'Add Reminder', route: 'AddReminderScreen' },
//   { label: 'Reminders List', route: 'RemindersListScreen' },
//   { label: 'Booking History', route: 'BookingHistoryScreen' },
//   { label: 'Transport', route: 'TransportRequestScreen' },
//   { label: 'Resources', route: 'ResourceDetailsScreen' },
//   { label: 'Wellness', route: 'WellnessResourcesScreen' },
//   { label: 'Notifications', route: 'ElderNotifications' },

  
// ];

// const ElderHomeScreen = () => {
//   const navigation = useNavigation();
//   const [activeMenu, setActiveMenu] = useState('Profile');

//   const handleMenuPress = (item: any) => {
//     setActiveMenu(item.label);
//     navigation.navigate(item.route as never);
//   };

//    const handleLogout = async () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "Logout",
//         style: "destructive",
//         onPress: async () => {
//           await AsyncStorage.removeItem("token");
//           navigation.reset({
//             index: 0,
//             routes: [{ name: "LoginAsElder" as never }],
//           });
//         },
//       },
//     ]);
//   };

//   return (

    
    
//     <ScrollView
//       style={{ flex: 1 }}
//       contentContainerStyle={styles.rootScroll}
//     >
      
//       <View style={styles.mainContainer}>

//         {/* Sidebar */}
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

//         {/* Content */}
//         <ScrollView
//           style={styles.content}
//           contentContainerStyle={styles.contentContainer}
//         >
//           <Text style={styles.header}>Welcome to Companion+</Text>
//         </ScrollView>

//       </View>
//     </ScrollView>
//   );
// };

// export default ElderHomeScreen;

// const styles = StyleSheet.create({
//   rootScroll: {
//     minHeight: Dimensions.get('window').height + 100,
//   },

//   mainContainer: {
//     flexDirection: 'row',
//     height: '100vh',
//   },

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

//   content: {
//     width: '70%',
//     backgroundColor: '#F9FAFB',
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
//   { label: 'Emergency SOS', route: 'SOSButton' },
//   { label: 'Add Event', route: 'AddEventScreen' },
//   { label: 'Calendar', route: 'CalendarScreen' },
//   { label: 'Chat List', route: 'ChatListScreen' },
//   { label: 'Help', route: 'HelpScreen' },
//   { label: 'Settings', route: 'SettingsScreen' },
//   { label: 'Book Consultation', route: 'BookConsultationScreen' },
//   { label: 'Doctor List', route: 'DoctorListScreen' },
//   { label: 'My Appointments', route: 'MyAppointmentsScreen' },
//   { label: 'Linked Elders', route: 'LinkedEldersScreen' },
//   { label: 'Relation Dashboard', route: 'RelationDashboardScreen' },
//   { label: 'Add Reminder', route: 'AddReminderScreen' },
//   { label: 'Reminders List', route: 'RemindersListScreen' },
//   { label: 'Booking History', route: 'BookingHistoryScreen' },
//   { label: 'Transport', route: 'TransportRequestScreen' },
//   { label: 'Resources', route: 'ResourceDetailsScreen' },
//   { label: 'Wellness', route: 'WellnessResourcesScreen' },
//   { label: 'Notifications', route: 'ElderNotifications' },
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
//     await AsyncStorage.clear();

//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'LoginAsElder' as never }],
//     });
//   };

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

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const menuItems = [
  { label: 'Profile', route: 'ElderProfile' },
  { label: 'Request Caregiver', route: 'SearchCaregivers' },
  { label: 'Health Dashboard', route: 'HealthDashboard' },
  { label: 'Emergency SOS', route: 'SOSButton' },
  { label: 'Add Event', route: 'AddEventScreen' },
  { label: 'Calendar', route: 'CalendarScreen' },
  { label: 'Chat List', route: 'ChatListScreen' },
  { label: 'Help', route: 'HelpScreen' },
  { label: 'Settings', route: 'SettingsScreen' },
  { label: 'Notifications', route: 'ElderNotifications' },
  //{ label: 'Book Consultation', route: 'BookConsultationScreen' },
  //{ label: 'Doctor List', route: 'DoctorListScreen' },
  //{ label: 'My Appointments', route: 'MyAppointmentsScreen' },
  //{ label: 'Linked Elders', route: 'LinkedEldersScreen' },
  //{ label: 'Relation Dashboard', route: 'RelationDashboardScreen' },
  { label: 'Add Reminder', route: 'AddReminderScreen' },
  { label: 'Reminders List', route: 'RemindersListScreen' },
  //{ label: 'Booking History', route: 'BookingHistoryScreen' },
  //{ label: 'Transport', route: 'TransportRequestScreen' },
  { label: 'Resources', route: 'ResourceDetailsScreen' },
  { label: 'Wellness', route: 'WellnessResourcesScreen' },
  
];

const ElderHomeScreen = () => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState('Profile');

  const handleMenuPress = (item: any) => {
    setActiveMenu(item.label);
    navigation.navigate(item.route as never);
  };

  /* ---------------- LOGOUT ---------------- */
const handleLogout = async () => {
  await removeToken();
  navigation.reset({
    index: 0,
    routes: [{ name: 'RoleSelection' as never }],
  });
};


  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.rootScroll}>
      <View style={styles.mainContainer}>
        
        {/* ========== SIDEBAR ========== */}
        <ScrollView style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>COMPANION+</Text>

          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={[
                styles.menuItem,
                activeMenu === item.label && styles.activeMenu,
              ]}
              onPress={() => handleMenuPress(item)}
            >
              <Text
                style={[
                  styles.menuText,
                  activeMenu === item.label && styles.activeMenuText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ========== RIGHT CONTENT ========== */}
        <View style={styles.content}>

          {/* TOP HEADER */}
          <View style={styles.topHeader}>
            <Text style={styles.pageTitle}>Dashboard</Text>

            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

          {/* PAGE CONTENT */}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.header}>Welcome to Companion+</Text>
          </ScrollView>

        </View>
      </View>
    </ScrollView>
  );
};

export default ElderHomeScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  rootScroll: {
    minHeight: Dimensions.get('window').height + 100,
  },

  mainContainer: {
    flexDirection: 'row',
    height: '100vh',
  },

  /* SIDEBAR */
  sidebar: {
    width: '30%',
    backgroundColor: '#111827',
    paddingVertical: 25,
  },

  sidebarTitle: {
    color: '#F9FAFB',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  activeMenu: {
    backgroundColor: '#1F2937',
    borderLeftWidth: 4,
    borderLeftColor: '#22C55E',
  },

  menuText: {
    fontSize: 20,
    color: '#D1D5DB',
  },

  activeMenuText: {
    color: '#22C55E',
    fontWeight: 'bold',
  },

  /* CONTENT */
  content: {
    width: '70%',
    backgroundColor: '#F9FAFB',
  },

  /* TOP HEADER */
  topHeader: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },

  logoutBtn: {
    backgroundColor: '#DC2626',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  contentContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#111827',
  },
});
