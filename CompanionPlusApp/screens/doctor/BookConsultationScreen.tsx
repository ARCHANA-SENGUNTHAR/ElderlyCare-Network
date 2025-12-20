// Path: CompanionPlusApp/screens/doctor/BookConsultationScreen.tsx
/*
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import axios from '../../utils/api';

type RootStackParamList = {
  BookConsultationScreen: { doctorId: string };
};

type BookConsultationScreenRouteProp = RouteProp<
  RootStackParamList,
  'BookConsultationScreen'
>;

const BookConsultationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<BookConsultationScreenRouteProp>();
  const { doctorId } = route.params;

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axios.post('/consultations', {
        doctorId,
        date,
        notes,
      });
      Alert.alert('Success', 'Consultation booked successfully!');
      navigation.goBack();
    } catch (error) {
      console.error('Booking error:', error);
      Alert.alert('Error', 'Failed to book consultation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Consultation</Text>

      <Text style={styles.label}>Select Date & Time:</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.datePickerButton}>
        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Notes (Optional):</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe symptoms or preferences..."
        multiline
        numberOfLines={4}
        value={notes}
        onChangeText={setNotes}
      />

      <Button
        title={loading ? 'Booking...' : 'Confirm Consultation'}
        onPress={handleSubmit}
        disabled={loading}
        color="#007BFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  datePickerButton: {
    padding: 12,
    backgroundColor: '#EEE',
    borderRadius: 8,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 100,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    backgroundColor: '#FFF',
  },
});

export default BookConsultationScreen;
*/














// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const BookConsultationScreen = () => {
//   const [patientName, setPatientName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [relation, setRelation] = useState('');
//   const [consultationType, setConsultationType] = useState('Online');
//   const [symptoms, setSymptoms] = useState('');
//   const [notes, setNotes] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');

//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const [time, setTime] = useState(new Date());
//   const [showTimePicker, setShowTimePicker] = useState(false);

//   const handleBook = () => {
//     // handle booking logic here
//     console.log('Booking Submitted!');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Book Consultation</Text>

//       {/* Doctor Info (Static Example) */}
//       <View style={styles.card}>
//         <Text style={styles.label}>Doctor: Dr. Priya Sharma</Text>
//         <Text style={styles.label}>Speciality: Cardiologist</Text>
//         <Text style={styles.label}>Clinic: ABC Hospital</Text>
//       </View>

//       <Text style={styles.section}>Patient Information</Text>

//       <TextInput style={styles.input} placeholder="Patient Name" value={patientName} onChangeText={setPatientName} />
//       <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} />
//       <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
//       <TextInput style={styles.input} placeholder="Relation to Elder" value={relation} onChangeText={setRelation} />

//       <Text style={styles.section}>Consultation Details</Text>

//       <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//         <Text style={styles.dateButton}>Select Date: {date.toDateString()}</Text>
//       </TouchableOpacity>
//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           onChange={(event, selectedDate) => {
//             setShowDatePicker(false);
//             if (selectedDate) setDate(selectedDate);
//           }}
//         />
//       )}

//       <TouchableOpacity onPress={() => setShowTimePicker(true)}>
//         <Text style={styles.dateButton}>Select Time: {time.toLocaleTimeString()}</Text>
//       </TouchableOpacity>
//       {showTimePicker && (
//         <DateTimePicker
//           value={time}
//           mode="time"
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           onChange={(event, selectedTime) => {
//             setShowTimePicker(false);
//             if (selectedTime) setTime(selectedTime);
//           }}
//         />
//       )}

//       <TextInput
//         style={styles.input}
//         placeholder="Type of Consultation (Online / In-person)"
//         value={consultationType}
//         onChangeText={setConsultationType}
//       />

//       <TextInput
//         style={[styles.input, { height: 100 }]}
//         placeholder="Symptoms / Health Concern"
//         multiline
//         value={symptoms}
//         onChangeText={setSymptoms}
//       />

//       <TextInput
//         style={[styles.input, { height: 80 }]}
//         placeholder="Message to Doctor (Optional)"
//         multiline
//         value={notes}
//         onChangeText={setNotes}
//       />

//       <Text style={styles.section}>Contact Info</Text>

//       <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" value={mobile} onChangeText={setMobile} />
//       <TextInput style={styles.input} placeholder="Email (optional)" keyboardType="email-address" value={email} onChangeText={setEmail} />

//       <Button title="Book Consultation" onPress={handleBook} color="#007AFF" />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//     backgroundColor: '#f9f9f9',
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   section: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 20,
//     marginBottom: 5,
//   },
//   card: {
//     backgroundColor: '#e0f7fa',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 3,
//   },
//   input: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 12,
//   },
//   dateButton: {
//     color: '#007AFF',
//     marginBottom: 10,
//   },
// });

// export default BookConsultationScreen;





// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Platform,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const BookConsultationScreen = () => {
//   const [patientName, setPatientName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [relation, setRelation] = useState('');

//   const [consultationType, setConsultationType] = useState('Online');
//   const [symptoms, setSymptoms] = useState('');
//   const [notes, setNotes] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');

//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());

//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);

//   const handleBook = () => {
//     console.log("Booking Submitted!");
//   };

//   return (
//     <ScrollView 
//       contentContainerStyle={styles.container}
//       style={{ flex: 1 }}
//       showsVerticalScrollIndicator={true}  // <-- scroll bar enabled
//     >

//       {/* Header */}
//       <Text style={styles.heading}>🩺 Book a Consultation</Text>
//       <Text style={styles.subHeading}>
//         Fill out the details below to schedule a consultation.
//       </Text>

//       {/* Doctor Info */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Doctor Details</Text>
//         <Text style={styles.cardText}>👩‍⚕️ Dr. Priya Sharma</Text>
//         <Text style={styles.cardText}>💼 Cardiologist</Text>
//         <Text style={styles.cardText}>🏥 ABC Hospital</Text>
//       </View>

//       {/* Patient Info */}
//       <Text style={styles.section}>Patient Information</Text>
//       <View style={styles.card}>
//         {renderInput("Patient Name", patientName, setPatientName)}
//         {renderInput("Age", age, setAge, "numeric")}
//         {renderInput("Gender", gender, setGender)}
//         {renderInput("Relation to Elder", relation, setRelation)}
//       </View>

//       {/* Consultation Details */}
//       <Text style={styles.section}>Consultation Details</Text>
//       <View style={styles.card}>

//         {/* Date Picker */}
//         <TouchableOpacity style={styles.selector} onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.selectorLabel}>📅 Select Date</Text>
//           <Text style={styles.selectorValue}>{date.toDateString()}</Text>
//         </TouchableOpacity>

//         {showDatePicker && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             display={Platform.OS === "ios" ? "spinner" : "default"}
//             onChange={(event, selected) => {
//               setShowDatePicker(false);
//               if (selected) setDate(selected);
//             }}
//           />
//         )}

//         {/* Time Picker */}
//         <TouchableOpacity style={styles.selector} onPress={() => setShowTimePicker(true)}>
//           <Text style={styles.selectorLabel}>⏰ Select Time</Text>
//           <Text style={styles.selectorValue}>{time.toLocaleTimeString()}</Text>
//         </TouchableOpacity>

//         {showTimePicker && (
//           <DateTimePicker
//             value={time}
//             mode="time"
//             display={Platform.OS === "ios" ? "spinner" : "default"}
//             onChange={(event, selected) => {
//               setShowTimePicker(false);
//               if (selected) setTime(selected);
//             }}
//           />
//         )}

//         {/* Consultation type */}
//         {renderInput("Type of Consultation (Online / In-person)", consultationType, setConsultationType)}

//         {/* Symptoms */}
//         {renderInput("Symptoms / Concern", symptoms, setSymptoms, "default", 100)}

//         {/* Notes */}
//         {renderInput("Message to Doctor (Optional)", notes, setNotes, "default", 80)}
//       </View>

//       {/* Contact Info */}
//       <Text style={styles.section}>Contact Details</Text>
//       <View style={styles.card}>
//         {renderInput("Mobile Number", mobile, setMobile, "phone-pad")}
//         {renderInput("Email (Optional)", email, setEmail, "email-address")}
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
//         <Text style={styles.bookButtonText}>Confirm Booking</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// /* ---- Reusable Input Component ---- */
// const renderInput = (
//   label: string,
//   value: string,
//   setValue: (text: string) => void,
//   keyboard: "default" | "numeric" | "email-address" | "phone-pad" = "default",
//   height: number = 50
// ) => (
//   <View style={styles.inputContainer}>
//     <Text style={styles.inputLabel}>{label}</Text>
//     <TextInput
//       style={[styles.input, { height }]}
//       value={value}
//       onChangeText={setValue}
//       placeholder={label}
//       keyboardType={keyboard}
//       multiline={height > 60}
//     />
//   </View>
// );


// /* ------------ STYLES ------------ */
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#F3F4F6",
//   },

//   heading: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#1F2937",
//   },

//   subHeading: {
//     fontSize: 15,
//     color: "#4B5563",
//     marginBottom: 20,
//   },

//   section: {
//     fontSize: 20,
//     marginTop: 20,
//     fontWeight: "bold",
//     color: "#1F2937",
//   },

//   card: {
//     backgroundColor: "#FFFFFF",
//     padding: 18,
//     borderRadius: 12,
//     marginTop: 12,
//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 3,
//   },

//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     marginBottom: 10,
//   },

//   cardText: {
//     fontSize: 15,
//     marginBottom: 4,
//   },

//   inputContainer: {
//     marginBottom: 14,
//   },

//   inputLabel: {
//     fontSize: 14,
//     color: "#374151",
//     marginBottom: 4,
//   },

//   input: {
//     backgroundColor: "#F9FAFB",
//     borderWidth: 1,
//     borderColor: "#D1D5DB",
//     padding: 12,
//     borderRadius: 8,
//     fontSize: 15,
//   },

//   selector: {
//     paddingVertical: 10,
//     marginBottom: 12,
//   },

//   selectorLabel: {
//     fontSize: 14,
//     color: "#374151",
//   },

//   selectorValue: {
//     fontSize: 16,
//     color: "#2563EB",
//     fontWeight: "600",
//   },

//   bookButton: {
//     backgroundColor: "#2563EB",
//     paddingVertical: 14,
//     marginTop: 25,
//     borderRadius: 10,
//     alignItems: "center",
//   },

//   bookButtonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });

// export default BookConsultationScreen;






import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookConsultationScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [relation, setRelation] = useState('');
  const [consultationType, setConsultationType] = useState('Online');
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleBook = () => {
    console.log('Booking Submitted!');
  };

  return (
    <View style={styles.pageContainer}>
      {/* Scrollable Form */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.formCard}>

          <Text style={styles.heading}>Book Consultation</Text>

          {/* Doctor Info */}
          <View style={styles.doctorCard}>
            <Text style={styles.doctorText}>👨‍⚕️ Doctor: <Text style={styles.bold}>Dr. Priya Sharma</Text></Text>
            <Text style={styles.doctorText}>📌 Speciality: Cardiologist</Text>
            <Text style={styles.doctorText}>🏥 Clinic: ABC Hospital</Text>
          </View>

          {/* Section Title */}
          <Text style={styles.section}>Patient Information</Text>

          {/* Inputs */}
          <TextInput
            style={styles.input}
            placeholder="Patient Name"
            value={patientName}
            onChangeText={setPatientName}
          />

          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />

          <TextInput
            style={styles.input}
            placeholder="Gender"
            value={gender}
            onChangeText={setGender}
          />

          <TextInput
            style={styles.input}
            placeholder="Relation to Elder"
            value={relation}
            onChangeText={setRelation}
          />

          {/* Consultation Section */}
          <Text style={styles.section}>Consultation Details</Text>

          {/* Date Picker */}
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.selectorText}>📅 Select Date: {date.toDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          {/* Time Picker */}
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setShowTimePicker(true)}
          >
            <Text style={styles.selectorText}>
              ⏰ Select Time: {time.toLocaleTimeString()}
            </Text>
          </TouchableOpacity>

          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedTime) => {
                setShowTimePicker(false);
                if (selectedTime) setTime(selectedTime);
              }}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Consultation Type (Online / In-person)"
            value={consultationType}
            onChangeText={setConsultationType}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Symptoms / Health Concern"
            multiline
            value={symptoms}
            onChangeText={setSymptoms}
          />

          <TextInput
            style={[styles.input, styles.textAreaSmall]}
            placeholder="Message to Doctor (Optional)"
            multiline
            value={notes}
            onChangeText={setNotes}
          />

          {/* Contact Section */}
          <Text style={styles.section}>Contact Info</Text>

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />

          <TextInput
            style={styles.input}
            placeholder="Email (Optional)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.bookBtn} onPress={handleBook}>
            <Text style={styles.bookText}>Confirm Booking</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

export default BookConsultationScreen;

/* ----------------------- STYLES ----------------------- */

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },

  formCard: {
    width: "100%",
    maxWidth: 650,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },

  doctorCard: {
    backgroundColor: "#E0F7FA",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  doctorText: {
    fontSize: 16,
    color: "#333",
  },

  bold: {
    fontWeight: "700",
  },

  section: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#FAFAFA",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 16,
    marginBottom: 12,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  textAreaSmall: {
    height: 80,
    textAlignVertical: "top",
  },

  selector: {
    backgroundColor: "#E8F0FE",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  selectorText: {
    fontSize: 16,
    color: "#1A73E8",
  },

  bookBtn: {
    marginTop: 20,
    backgroundColor: "#1A73E8",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  bookText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
