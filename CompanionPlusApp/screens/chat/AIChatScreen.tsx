import { Audio } from "expo-av";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import api from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AIChatScreen = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
const [isRecording, setIsRecording] = useState(false);

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const token = await AsyncStorage.getItem("token");

    try {
      const res = await api.post(
        "/ai/chat",
        { message: input },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong 🤖" },
      ]);
    }

    setInput("");
  };

  const renderItem = ({ item }: any) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "user" ? styles.userBubble : styles.botBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

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
    setIsRecording(true);
  } catch (err) {
    console.log("Start recording error", err);
  }
};

const stopRecording = async () => {
  if (!recording) return;

  setIsRecording(false);
  await recording.stopAndUnloadAsync();

  const uri = recording.getURI();
  setRecording(null);

  if (uri) {
    await sendAudio(uri);
  }
};

const sendAudio = async (uri: string) => {
  try {
    // Convert audio file to Blob (important for web)
    const response = await fetch(uri);
    const blob = await response.blob();

    const formData = new FormData();
    formData.append("audio", blob, "voice.webm");

    const res = await api.post(
      "/speech/speech-to-text",
      formData
    );

    // 🔥 THIS IS THE KEY PART
    // Put transcribed text into input box
    setInput(res.data.text);
  } catch (error) {
    console.log("Speech error:", error);
  }
};


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Assistant</Text>
        <Text style={styles.headerSub}>Ask anything, anytime 🤖</Text>
      </View>

      {/* CHAT */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* INPUT */}
      {/* <View style={styles.inputBar}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View> */}


<View style={styles.inputBar}>
  <TextInput
    value={input}
    onChangeText={setInput}
    placeholder="Type or speak your message..."
    placeholderTextColor="#9CA3AF"
    style={styles.input}
  />

  {/* 🎤 MIC BUTTON */}
  <TouchableOpacity
    style={[styles.micBtn, isRecording && styles.micActive]}
    onPress={isRecording ? stopRecording : startRecording}
  >
    <Text style={styles.micText}>
      {isRecording ? "⏹" : "🎤"}
    </Text>
  </TouchableOpacity>

  {/* ➤ SEND BUTTON */}
  <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
    <Text style={styles.sendText}>➤</Text>
  </TouchableOpacity>
</View>



    </KeyboardAvoidingView>
  );
};

export default AIChatScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5EEF7",
  },

  /* HEADER */
  header: {
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#2563EB",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  micBtn: {
  marginLeft: 8,
  backgroundColor: "#10B981",
  width: 42,
  height: 42,
  borderRadius: 21,
  justifyContent: "center",
  alignItems: "center",
},

micActive: {
  backgroundColor: "#EF4444",
},

micText: {
  fontSize: 18,
  color: "#FFFFFF",
},


  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  headerSub: {
    fontSize: 14,
    color: "#E0E7FF",
    marginTop: 4,
  },

  /* CHAT */
  chatContainer: {
    padding: 16,
    paddingBottom: 90,
  },

  messageBubble: {
    maxWidth: "78%",
    padding: 14,
    borderRadius: 16,
    marginVertical: 6,
  },

  userBubble: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },

  botBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },

  messageText: {
    fontSize: 16,
    color: "#111827",
  },

  /* INPUT BAR */
  inputBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: "#111827",
  },

  sendBtn: {
    marginLeft: 10,
    backgroundColor: "#2563EB",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  sendText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
