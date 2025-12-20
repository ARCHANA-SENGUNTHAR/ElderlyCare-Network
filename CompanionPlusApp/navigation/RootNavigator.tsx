// // Path: CompanionPlusApp/navigation/RootNavigator.tsx

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Import screens
// import SplashScreen from '../screens/auth/SplashScreen';
// import LoginAsElderScreen from '../screens/auth/LoginAsElderScreen';
// //import LoginAsRelationScreen from '../screens/auth/LoginAsRelationScreen';
// import RegisterAsElderScreen from '../screens/auth/RegisterAsElderScreen';
// //import RegisterAsRelationScreen from '../screens/auth/RegisterAsRelationScreen';
// import HomeScreen from '../screens/common/HomeScreen';
// import ElderProfileScreen from '../screens/profile/ElderProfileScreen';
// import RelationProfileScreen from '../screens/profile/RelationProfileScreen';
// import EditProfileScreen from '../screens/profile/EditProfileScreen';
// import CaregiverDetailsScreen from '../screens/caregiver/CaregiverDetailsScreen'; // Add the new CaregiverDetailsScreen
// import RequestCaregiverScreen from '../screens/caregiver/RequestCaregiverScreen'; // Add any other relevant screens
// import HealthDashboardScreen from '../screens/health/HealthDashboardScreen'; // or the correct path
// import SearchCaregiversScreen from '../screens/caregiver/SearchCaregiversScreen'; // ✅ update the path as needed
// import AddHealthRecordScreen from '../screens/health/AddHealthRecordScreen'; // 🛠 Adjust the path as needed
// import ViewHealthHistoryScreen from '../screens/health/ViewHealthHistoryScreen'; // update path as needed
// import SOSButtonScreen from '../screens/emergency/SOSButtonScreen'; // update path as needed
// import CalendarScreen from '../screens/calendar/CalendarScreen';
// import AddEventScreen from '../screens/calendar/AddEventScreen'; 
// import ChatListScreen from '../screens/chat/ChatListScreen';
// import ChatRoomScreen from '../screens/chat/ChatRoomScreen';
// import HelpScreen from '../screens/common/HelpScreen';
// import SettingsScreen from '../screens/common/SettingsScreen';
// import BookConsultationScreen from '../screens/doctor/BookConsultationScreen';
// import DoctorListScreen from '../screens/doctor/DoctorListScreen';
// import MyAppointmentsScreen from '../screens/doctor/MyAppointmentsScreen';
// import LinkedEldersScreen from '../screens/family/LinkedEldersScreen';
// import RelationDashboardScreen from '../screens/family/RelationDashboardScreen';
// import AddReminderScreen from '../screens/reminders/AddReminderScreen';
// import RemindersListScreen from '../screens/reminders/RemindersListScreen';
// import BookingHistoryScreen from '../screens/transport/BookingHistoryScreen';
// import TransportRequestScreen from '../screens/transport/TransportRequestScreen';
// import ResourceDetailsScreen from '../screens/wellness/ResourceDetailsScreen';
// import WellnessResourcesScreen from '../screens/wellness/WellnessResourcesScreen';
// import ElderHomeScreen from '../screens/home/ElderHomeScreen';

// import EditRelationProfileScreen from '../screens/profile/EditRelationProfileScreen';

// import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen'; // Correct path based on your structure
// import CaregiverLoginScreen from '../screens/auth/CaregiverLoginScreen';
// import CaregiverRegisterScreen from '../screens/auth/CaregiverRegisterScreen';
// import CaregiverHomeScreen from '../screens/caregiver/CaregiverHomeScreen';


// import CaregiverNotificationsScreen from '../screens/caregiver/CaregiverNotificationsScreen';

// import ElderNotificationsScreen from '../screens/notifications/ElderNotificationsScreen';
// // Correct path based on your structure

// // Define the RootStackParamList for type safety
// export type RootStackParamList = {
//   ElderHome:undefined;
//   Splash: undefined;
//   LoginAsElder: undefined;
//   LoginAsRelation: undefined;
//   RegisterAsElder: undefined;
//   RegisterAsRelation: undefined;
//   ElderProfile: undefined;
//   RelationProfile: undefined;
//   HealthDashboard: undefined;
//   EditProfile: undefined;
//   Home: undefined;
//   CalendarScreen: undefined;
//   AddEventScreen: undefined;
//   SOSButton: undefined;
//   HelpScreen: undefined;
//   SettingsScreen: undefined;
//   ViewHealthHistoryScreen: undefined;
//   AddHealthRecordScreen: undefined;
//   SearchCaregivers: undefined;
//   CaregiverDetails: { caregiverId: string }; // Add params for CaregiverDetails screen
//   RequestCaregiver: { caregiverId: string, caregiverName: string; }; // Add params for RequestCaregiver screen
//   ChatListScreen: undefined;
//   ChatRoomScreen: { chatId: string; chatName: string }; 
//   BookConsultationScreen: { doctorId: string };
//   LinkedEldersScreen: undefined;
//   DoctorListScreen:undefined;
//   MyAppointmentsScreen:undefined;
//   RelationDashboardScreen:undefined;
//   AddReminderScreen:undefined;
//   RemindersListScreen:undefined;
//   BookingHistoryScreen:undefined;
//   TransportRequestScreen:undefined;
//   ResourceDetailsScreen:undefined;
// WellnessResourcesScreen:undefined;

// EditRelationProfileScreen:undefined;

//   RoleSelection: undefined;
//   CaregiverLogin: undefined;
//   CaregiverRegister: undefined;
//   CaregiverHome: undefined;

//   CaregiverNotifications: undefined;

//   ElderNotifications: undefined;
  
//   // Add other screens here if necessary
// };

// const Stack = createStackNavigator<RootStackParamList>();

// const RootNavigator: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash">
//         {/* Authentication Screens */}
      
        

        
// <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="LoginAsElder" component={LoginAsElderScreen} />
       
//         <Stack.Screen name="RegisterAsElder" component={RegisterAsElderScreen} />
//         <Stack.Screen
//           name="Splash"
//           component={SplashScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="ElderHome" component={ElderHomeScreen} />

// <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
// <Stack.Screen name="AddEventScreen" component={AddEventScreen} />
//         <Stack.Screen
//   name="SOSButton"
//   component={SOSButtonScreen}
//   options={{ title: 'SOS Button' }}
// />
//         <Stack.Screen
//   name="HealthDashboard"
//   component={HealthDashboardScreen}
//   options={{ title: 'Health Dashboard' }}
// />

// <Stack.Screen
//   name="ViewHealthHistoryScreen"
//   component={ViewHealthHistoryScreen}
//   options={{ title: 'Health History' }}
// />



//         {/* Profile Screens */}
//         <Stack.Screen
//           name="ElderProfile"
//           component={ElderProfileScreen}
//           options={{ title: 'Elder Profile' }}
//         />
//         <Stack.Screen
//           name="RelationProfile"
//           component={RelationProfileScreen}
//           options={{ title: 'Relation Profile' }}
//         />
//         <Stack.Screen
//           name="EditProfile"
//           component={EditProfileScreen}
//           options={{ title: 'Edit Profile' }}
//         />

//         {/* Other screens */}
       
//         {/* Caregiver Screens */}
//         <Stack.Screen
//           name="CaregiverDetails"
//           component={CaregiverDetailsScreen}
//           options={{ title: 'Caregiver Details' }}
//         />
//         <Stack.Screen
//           name="RequestCaregiver"
//           component={RequestCaregiverScreen}
//           options={{ title: 'Request Caregiver' }}
//         />
//        <Stack.Screen
//   name="SearchCaregivers"
//   component={SearchCaregiversScreen}
//   options={{ title: 'Search Caregivers' }}
// />
// <Stack.Screen
//   name="ChatListScreen"
//   component={ChatListScreen}
//   options={{  title: "Chat List" }}
// />

// <Stack.Screen
//   name="ChatRoomScreen"
//   component={ChatRoomScreen}
//   options={{ title: "Chat Room" }}
// />

// <Stack.Screen
//   name="AddHealthRecordScreen"
//   component={AddHealthRecordScreen}
//   options={{ title: 'Add Health Record' }}
// />



// <Stack.Screen name="HelpScreen" component={HelpScreen} />
// <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
// <Stack.Screen name="BookConsultationScreen" component={BookConsultationScreen} />
// <Stack.Screen name="DoctorListScreen" component={DoctorListScreen} />
// <Stack.Screen name="MyAppointmentsScreen" component={MyAppointmentsScreen} />
// <Stack.Screen name="LinkedEldersScreen" component={LinkedEldersScreen} />
// <Stack.Screen name="RelationDashboardScreen" component={RelationDashboardScreen} />



// <Stack.Screen name="AddReminderScreen" component={AddReminderScreen} />
// <Stack.Screen name="RemindersListScreen" component={RemindersListScreen} />
// <Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
// <Stack.Screen name="TransportRequestScreen" component={TransportRequestScreen} />

// <Stack.Screen name="ResourceDetailsScreen" component={ResourceDetailsScreen} />
// <Stack.Screen name="WellnessResourcesScreen" component={WellnessResourcesScreen} />

// <Stack.Screen name="EditRelationProfileScreen" component={EditRelationProfileScreen} />

// <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
// <Stack.Screen name="CaregiverLogin" component={CaregiverLoginScreen} />
// <Stack.Screen name="CaregiverRegister" component={CaregiverRegisterScreen} />
// <Stack.Screen name="CaregiverHome" component={CaregiverHomeScreen} options={{ title: 'Caregiver Home' }} />
// <Stack.Screen
//   name="CaregiverNotifications"
//   component={CaregiverNotificationsScreen}
// />

// <Stack.Screen
//   name="ElderNotifications"
//   component={ElderNotificationsScreen}
// />



//         {/* Add other screens for caregiving, health, chat, etc. */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;










// Path: CompanionPlusApp/navigation/RootNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import screens
import AuthLoadingScreen from '../screens/common/AuthLoadingScreen';
import LoginAsElderScreen from '../screens/auth/LoginAsElderScreen';
import ElderHomeScreen from '../screens/home/ElderHomeScreen';

import SplashScreen from '../screens/auth/SplashScreen';
//import LoginAsElderScreen from '../screens/auth/LoginAsElderScreen';
//import LoginAsRelationScreen from '../screens/auth/LoginAsRelationScreen';
import RegisterAsElderScreen from '../screens/auth/RegisterAsElderScreen';
//import RegisterAsRelationScreen from '../screens/auth/RegisterAsRelationScreen';
import HomeScreen from '../screens/common/HomeScreen';
import ElderProfileScreen from '../screens/profile/ElderProfileScreen';
import RelationProfileScreen from '../screens/profile/RelationProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import CaregiverDetailsScreen from '../screens/caregiver/CaregiverDetailsScreen'; // Add the new CaregiverDetailsScreen
import RequestCaregiverScreen from '../screens/caregiver/RequestCaregiverScreen'; // Add any other relevant screens
import HealthDashboardScreen from '../screens/health/HealthDashboardScreen'; // or the correct path
import SearchCaregiversScreen from '../screens/caregiver/SearchCaregiversScreen'; // ✅ update the path as needed
import AddHealthRecordScreen from '../screens/health/AddHealthRecordScreen'; // 🛠 Adjust the path as needed
import ViewHealthHistoryScreen from '../screens/health/ViewHealthHistoryScreen'; // update path as needed
import SOSButtonScreen from '../screens/emergency/SOSButtonScreen'; // update path as needed
import CalendarScreen from '../screens/calendar/CalendarScreen';
import AddEventScreen from '../screens/calendar/AddEventScreen'; 
import ChatListScreen from '../screens/chat/ChatListScreen';
import ChatRoomScreen from '../screens/chat/ChatRoomScreen';
import HelpScreen from '../screens/common/HelpScreen';
import SettingsScreen from '../screens/common/SettingsScreen';
import BookConsultationScreen from '../screens/doctor/BookConsultationScreen';
import DoctorListScreen from '../screens/doctor/DoctorListScreen';
import MyAppointmentsScreen from '../screens/doctor/MyAppointmentsScreen';
import LinkedEldersScreen from '../screens/family/LinkedEldersScreen';
import RelationDashboardScreen from '../screens/family/RelationDashboardScreen';
import AddReminderScreen from '../screens/reminders/AddReminderScreen';
import RemindersListScreen from '../screens/reminders/RemindersListScreen';
import BookingHistoryScreen from '../screens/transport/BookingHistoryScreen';
import TransportRequestScreen from '../screens/transport/TransportRequestScreen';
import ResourceDetailsScreen from '../screens/wellness/ResourceDetailsScreen';
import WellnessResourcesScreen from '../screens/wellness/WellnessResourcesScreen';
//import ElderHomeScreen from '../screens/home/ElderHomeScreen';

import EditRelationProfileScreen from '../screens/profile/EditRelationProfileScreen';

import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen'; // Correct path based on your structure
import CaregiverLoginScreen from '../screens/auth/CaregiverLoginScreen';
import CaregiverRegisterScreen from '../screens/auth/CaregiverRegisterScreen';
import CaregiverHomeScreen from '../screens/caregiver/CaregiverHomeScreen';


import CaregiverNotificationsScreen from '../screens/caregiver/CaregiverNotificationsScreen';

import ElderNotificationsScreen from '../screens/notifications/ElderNotificationsScreen';
import ChangePasswordScreen from '../screens/settings/ChangePasswordScreen';
// Correct path based on your structure

// Define the RootStackParamList for type safety
export type RootStackParamList = {
  ElderHome:undefined;
  Splash: undefined;
  LoginAsElder: undefined;
  LoginAsRelation: undefined;
  RegisterAsElder: undefined;
  RegisterAsRelation: undefined;
  ElderProfile: undefined;
  RelationProfile: undefined;
  HealthDashboard: undefined;
  EditProfile: undefined;
  Home: undefined;
  CalendarScreen: undefined;
  AddEventScreen: undefined;
  SOSButton: undefined;
  HelpScreen: undefined;
  SettingsScreen: undefined;
  ViewHealthHistoryScreen: undefined;
  AddHealthRecordScreen: undefined;
  SearchCaregivers: undefined;
  CaregiverDetails: { caregiverId: string }; // Add params for CaregiverDetails screen
  RequestCaregiver: { caregiverId: string, caregiverName: string; }; // Add params for RequestCaregiver screen
  ChatListScreen: undefined;
  ChatRoomScreen: { chatId: string; chatName: string }; 
  BookConsultationScreen: { doctorId: string };
  LinkedEldersScreen: undefined;
  DoctorListScreen:undefined;
  MyAppointmentsScreen:undefined;
  RelationDashboardScreen:undefined;
  AddReminderScreen:undefined;
  RemindersListScreen:undefined;
  BookingHistoryScreen:undefined;
  TransportRequestScreen:undefined;
  ResourceDetailsScreen:undefined;
WellnessResourcesScreen:undefined;

EditRelationProfileScreen:undefined;

  RoleSelection: undefined;
  CaregiverLogin: undefined;
  CaregiverRegister: undefined;
  CaregiverHome: undefined;

  CaregiverNotifications: undefined;

  ElderNotifications: undefined;
  AuthLoading : undefined;
  ChangePassword: undefined;
  
  
  // Add other screens here if necessary
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Authentication Screens */}
      
        
 <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        
<Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginAsElder" component={LoginAsElderScreen} />
       
        <Stack.Screen name="RegisterAsElder" component={RegisterAsElderScreen} />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ElderHome" component={ElderHomeScreen} />

<Stack.Screen name="CalendarScreen" component={CalendarScreen} />
<Stack.Screen name="AddEventScreen" component={AddEventScreen} />
        <Stack.Screen
  name="SOSButton"
  component={SOSButtonScreen}
  options={{ title: 'SOS Button' }}
/>
        <Stack.Screen
  name="HealthDashboard"
  component={HealthDashboardScreen}
  options={{ title: 'Health Dashboard' }}
/>

<Stack.Screen
  name="ViewHealthHistoryScreen"
  component={ViewHealthHistoryScreen}
  options={{ title: 'Health History' }}
/>



        {/* Profile Screens */}
        <Stack.Screen
          name="ElderProfile"
          component={ElderProfileScreen}
          options={{ title: 'Elder Profile' }}
        />
        <Stack.Screen
          name="RelationProfile"
          component={RelationProfileScreen}
          options={{ title: 'Relation Profile' }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{ title: 'Edit Profile' }}
        />

        {/* Other screens */}
       
        {/* Caregiver Screens */}
        <Stack.Screen
          name="CaregiverDetails"
          component={CaregiverDetailsScreen}
          options={{ title: 'Caregiver Details' }}
        />
        <Stack.Screen
          name="RequestCaregiver"
          component={RequestCaregiverScreen}
          options={{ title: 'Request Caregiver' }}
        />
       <Stack.Screen
  name="SearchCaregivers"
  component={SearchCaregiversScreen}
  options={{ title: 'Search Caregivers' }}
/>
<Stack.Screen
  name="ChatListScreen"
  component={ChatListScreen}
  options={{  title: "Chat List" }}
/>

<Stack.Screen
  name="ChatRoomScreen"
  component={ChatRoomScreen}
  options={{ title: "Chat Room" }}
/>

<Stack.Screen
  name="AddHealthRecordScreen"
  component={AddHealthRecordScreen}
  options={{ title: 'Add Health Record' }}
/>



<Stack.Screen name="HelpScreen" component={HelpScreen} />
<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
<Stack.Screen name="BookConsultationScreen" component={BookConsultationScreen} />
<Stack.Screen name="DoctorListScreen" component={DoctorListScreen} />
<Stack.Screen name="MyAppointmentsScreen" component={MyAppointmentsScreen} />
<Stack.Screen name="LinkedEldersScreen" component={LinkedEldersScreen} />
<Stack.Screen name="RelationDashboardScreen" component={RelationDashboardScreen} />



<Stack.Screen name="AddReminderScreen" component={AddReminderScreen} />
<Stack.Screen name="RemindersListScreen" component={RemindersListScreen} />
<Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
<Stack.Screen name="TransportRequestScreen" component={TransportRequestScreen} />

<Stack.Screen name="ResourceDetailsScreen" component={ResourceDetailsScreen} />
<Stack.Screen name="WellnessResourcesScreen" component={WellnessResourcesScreen} />

<Stack.Screen name="EditRelationProfileScreen" component={EditRelationProfileScreen} />

<Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
<Stack.Screen name="CaregiverLogin" component={CaregiverLoginScreen} />
<Stack.Screen name="CaregiverRegister" component={CaregiverRegisterScreen} />
<Stack.Screen name="CaregiverHome" component={CaregiverHomeScreen} options={{ title: 'Caregiver Home' }} />
<Stack.Screen
  name="CaregiverNotifications"
  component={CaregiverNotificationsScreen}
/>

<Stack.Screen
  name="ElderNotifications"
  component={ElderNotificationsScreen}
/>
<Stack.Screen
  name="ChangePassword"
  component={ChangePasswordScreen}
/>



        {/* Add other screens for caregiving, health, chat, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;





