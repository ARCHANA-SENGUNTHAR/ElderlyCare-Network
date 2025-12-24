
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   Image,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import api from "../../utils/api";
// import { CommonActions } from "@react-navigation/native";
// import { removeToken } from '../../utils/storage';

// const CaregiverSettingsScreen: React.FC = () => {
//   const navigation = useNavigation();
// const [user, setUser] = useState({ name: "", email: "" });

// useEffect(() => {
//   const loadUser = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       const res = await api.get("/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setUser({
//         name: res.data.name,
//         email: res.data.email,
//       });

//     } catch (error) {
//       console.log("User load error:", error);
//     }
//   };

//   loadUser();
// }, []);



//  const handleLogout = async () => {
//    await removeToken();
//    navigation.reset({
//      index: 0,
//      routes: [{ name: 'RoleSelection' as never }],
//    });
//  };


//   return (
//     <View style={styles.container}>
//       {/* ================= PROFILE HEADER ================= */}
//       <View style={styles.profileCard}>
//         <View style={styles.avatar}>
//           <Text style={styles.avatarText}>
//             {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//           </Text>
//         </View>
//         <View>
//         <Text style={styles.name}>{user.name || "User"}</Text>
//         <Text style={styles.email}>{user.email}</Text>
//         </View>

//       </View>

//       {/* ================= SETTINGS CARD ================= */}
//       <View style={styles.card}>
//         <TouchableOpacity
//           style={styles.item}
//           onPress={() => navigation.navigate("EditProfile" as never)}
//         >
//           <Text style={styles.icon}>👤</Text>
//           <Text style={styles.itemText}>Edit Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.item}
//           onPress={() => navigation.navigate("ChangePassword" as never)}
//         >
//           <Text style={styles.icon}>🔑</Text>
//           <Text style={styles.itemText}>Change Password</Text>
//         </TouchableOpacity>

       
//       </View>

//       {/* ================= LOGOUT ================= */}
//       <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
//         <Text style={styles.logoutText}>🚪 Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CaregiverSettingsScreen;

import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../utils/api";
import { removeToken } from "../../utils/storage";

const CaregiverSettingsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [user, setUser] = useState({ name: "", email: "" });

const loadUser = async () => {
  try {
    const token = await AsyncStorage.getItem("token");

    const res = await api.get("/caregiver/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUser({
      name: res.data.name,
      email: res.data.email,
    });
  } catch (error) {
    console.log("User load error:", error);
  }
};

useFocusEffect(
  useCallback(() => {
    loadUser();
  }, [])
);

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    await removeToken();
    navigation.reset({
      index: 0,
      routes: [{ name: "RoleSelection" }],
    });
  };

  return (
    <View style={styles.container}>
      {/* PROFILE HEADER */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name ? user.name.charAt(0).toUpperCase() : "C"}
          </Text>
        </View>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      {/* SETTINGS OPTIONS */}
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("EditCaregiverProfile")}
        >
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.itemText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("CaregiverChangePassword")}
        >
          <Text style={styles.icon}>🔑</Text>
          <Text style={styles.itemText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CaregiverSettingsScreen;


/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b1c9e1ff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  /* PROFILE */
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1981d1ff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 25,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#91b2dbff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  email: {
    fontSize: 14,
    color: "#D1FAE5",
    marginTop: 4,
  },

  /* CARD */
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 5,
    elevation: 4,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },

  icon: {
    fontSize: 22,
    width: 35,
  },

  itemText: {
    fontSize: 17,
    color: "#374151",
  },

  /* LOGOUT */
  logoutBtn: {
    marginTop: 30,
    backgroundColor: "#FEE2E2",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DC2626",
  },
});
