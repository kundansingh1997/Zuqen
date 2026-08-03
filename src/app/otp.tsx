import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function OtpScreen() {
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#050505"
      />

      <Text style={styles.title}>
        OTP VERIFICATION
      </Text>

      <Text style={styles.brand}>
        ZUQEN
      </Text>

      <Text style={styles.subtitle}>
        Enter the 6-digit OTP sent to your mobile number
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#888"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
            <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/home")}
      >
        <Text style={styles.buttonText}>
          VERIFY OTP
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resend}>
          Resend OTP
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.back}>
          ← Back to Login
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "center",
    padding: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 22,
    textAlign: "center",
  },

  brand: {
    color: "#FFD700",
    fontSize: 40,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#BBBBBB",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#111111",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 14,
    padding: 16,
    textAlign: "center",
    fontSize: 22,
    letterSpacing: 8,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#FFD700",
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "900",
  },

  resend: {
    color: "#FFD700",
    textAlign: "center",
    marginTop: 25,
    fontSize: 16,
  },

  back: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
});
