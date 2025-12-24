import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Audio } from "expo-av";
import api from "../../utils/api";

const VoiceChatScreen = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [status, setStatus] = useState("Tap mic to speak");

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
      setStatus("Listening...");
    } catch (err) {
      Alert.alert("Error", "Could not start recording");
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    setStatus("Processing...");
    await recording.stopAndUnloadAsync();

    const uri = recording.getURI();
    setRecording(null);

    if (uri) {
      await sendAudio(uri);
    }
  };

//   const sendAudio = async (uri: string) => {
//     const formData = new FormData();
//     formData.append("audio", {
//       uri,
//       name: "voice.wav",
//       type: "audio/wav",
//     } as any);

//     try {
//       const res = await api.post("/speech/speech-to-text", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setStatus(`You said: ${res.data.text}`);
//     } catch (err) {
//       Alert.alert("Error", "Voice processing failed");
//       setStatus("Try again");
//     }
//   };

// const sendAudio = async (uri: string) => {
//   const formData = new FormData();

//   formData.append("audio", {
//     uri: uri,
//     name: "voice.wav",
//     type: "audio/wav",
//   } as any);

//   try {
//     const res = await api.post(
//       "/speech/speech-to-text",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     console.log("Speech text:", res.data.text);
//   } catch (error) {
//     console.log("Speech error:", error);
//   }
// };

// const sendAudio = async (uri: string) => {
//   const formData = new FormData();

//   formData.append("audio", {
//     uri: uri,
//     name: "voice.m4a",
//     type: "audio/m4a",
//   } as any);

//   try {
//     const res = await api.post(
//       "/speech/speech-to-text",
//       formData
//       // ❌ DO NOT SET HEADERS MANUALLY
//     );

//     console.log("TRANSCRIPTION:", res.data);
//   } catch (error) {
//     console.log("Speech error:", error);
//   }
// };


const sendAudio = async (uri: string) => {
  try {
    // 🔥 Convert recorded audio to Blob (WEB FIX)
    const response = await fetch(uri);
    const blob = await response.blob();

    const formData = new FormData();
    formData.append("audio", blob, "voice.webm");

    const res = await api.post(
      "/speech/speech-to-text",
      formData
    );

    console.log("TRANSCRIPTION:", res.data.text);
  } catch (error) {
    console.log("Speech error:", error);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{status}</Text>

      <TouchableOpacity
        style={styles.mic}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text style={styles.micText}>{recording ? "STOP" : "🎤"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  mic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },
  micText: {
    color: "#fff",
    fontSize: 24,
  },
});
