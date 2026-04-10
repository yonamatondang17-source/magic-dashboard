import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

export default function App() {
  const [page, setPage] = useState("home");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 10 tema pastel
  const themes = [
    { name: "Pink Soft", bg: "#ffd6e8", accent: "#ff4da6" },
    { name: "Lavender", bg: "#e6ccff", accent: "#7a5cff" },
    { name: "Sky Blue", bg: "#cce0ff", accent: "#1a75ff" },
    { name: "Cream", bg: "#fff2cc", accent: "#cc9900" },
    { name: "Mint", bg: "#ccfff5", accent: "#00b3a4" },
    { name: "Peach", bg: "#ffe6cc", accent: "#ff8533" },
    { name: "Soft Green", bg: "#d6f5d6", accent: "#33cc66" },
    { name: "Purple Candy", bg: "#f2ccff", accent: "#b300ff" },
    { name: "Light Lilac", bg: "#d9ccff", accent: "#6a5acd" },
    { name: "Rose Pastel", bg: "#ffccf2", accent: "#cc0066" },
  ];

  const [theme, setTheme] = useState(themes[0]);

  // Random tema
  const changeTheme = () => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    setTheme(themes[randomIndex]);
  };

  // Counter
  const increase = () => setCount(count + 1);

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  // Greeting sesuai waktu
  const getGreetingTime = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 10) return "Selamat Pagi 🌤️";
    if (hour >= 10 && hour < 15) return "Selamat Siang ☀️";
    if (hour >= 15 && hour < 18) return "Selamat Sore 🌥️";
    return "Selamat Malam 🌙";
  };

  // ====================== HOME PAGE ======================
  if (page === "home") {
    return (
      <ScrollView
        style={{ backgroundColor: theme.bg }}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle="dark-content" backgroundColor={theme.bg} />

        <Text style={[styles.title, { color: theme.accent }]}>
          ✨ Magic Dashboard
        </Text>

        <Text style={styles.subtitle}>
          Praktikum Minggu 4 - State dan Events
        </Text>

        {/* BUTTON GANTI WARNA */}
        <TouchableOpacity
          style={[styles.randomButton, { backgroundColor: theme.accent }]}
          onPress={changeTheme}
        >
          <Text style={styles.randomButtonText}>🎨 Ganti Warna</Text>
        </TouchableOpacity>

        {/* CARD COUNTER */}
        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: theme.accent }]}>
            🔢 Counter System
          </Text>

          <Text style={[styles.counterText, { color: theme.accent }]}>
            {count}
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.accent }]}
              onPress={decrease}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.accent }]}
              onPress={increase}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          {count === 0 && (
            <Text style={[styles.warningText, { color: theme.accent }]}>
              ⚠ Counter tidak boleh kurang dari 0 yaa
            </Text>
          )}
        </View>

        {/* CARD GREETING BUTTON */}
        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: theme.accent }]}>
            👋 Greeting Form
          </Text>

          <Text style={styles.descText}>
            Klik tombol ini dulu yuk!
          </Text>

          <TouchableOpacity
            style={[styles.goButton, { backgroundColor: theme.accent }]}
            onPress={() => setPage("greeting")}
          >
            <Text style={styles.goButtonText}>➡ Masuk Greeting Page</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>🌸 React Native - Praktikum Minggu 4 🌸</Text>
      </ScrollView>
    );
  }

  // ====================== GREETING PAGE ======================
  return (
    <View style={[styles.greetingContainer, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.bg} />

      <Text style={[styles.title, { color: theme.accent }]}>
        👋 Greeting Page
      </Text>

      <Text style={styles.subtitle}>Masukkan nama kamu di bawah ini</Text>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: theme.accent }]}>
          ✍ Input Nama
        </Text>

        <TextInput
          style={[styles.input, { borderColor: theme.accent }]}
          placeholder="Masukkan nama kamu..."
          placeholderTextColor="#777"
          value={name}
          onChangeText={setName}
        />

        {/* Greeting muncul hanya jika nama sudah dimasukkan */}
        {name.trim() !== "" && (
          <>
            <Text style={[styles.greetingText, { color: theme.accent }]}>
              Halo, {name}! {getGreetingTime()}
            </Text>

            <Text style={styles.goodWishText}>
              Semoga harimu menyenangkan 🌸
            </Text>
          </>
        )}

        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: theme.accent }]}
          onPress={() => setPage("home")}
        >
          <Text style={styles.backButtonText}>⬅ Kembali ke Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 60,
  },

  greetingContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginBottom: 18,
    fontWeight: "600",
  },

  randomButton: {
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  randomButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  counterText: {
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  warningText: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
  },

  descText: {
    color: "#444",
    marginBottom: 12,
    fontWeight: "600",
  },

  goButton: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  goButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  input: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: "#fff0f7",
    color: "#333",
  },

  greetingText: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  goodWishText: {
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
    color: "#444",
    fontWeight: "600",
  },

  backButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  backButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 10,
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
  },
});