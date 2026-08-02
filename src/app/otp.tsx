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
      <StatusBar barStyle="light-content" backgroundColor="#050505" />

      <Text style={styles.title}>OTP Verification</Text>

      <Text style={styles.subtitle}>
        Enter the 6-digit OTP sent to your mobile number
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#777"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (otp.length !== 6) {
            alert("Enter valid OTP");
            return;
          }

          router.replace("/home");
        }}
      >
        <Text style={styles.buttonText}>VERIFY OTP</Text>
      </TouchableOpacity>

      <Text style={styles.resend}>Resend OTP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  title: {
    color: "#FFD700",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 15,
  },

  subtitle: {
    color: "#CCCCCC",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#111",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 12,
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    letterSpacing: 8,
  },

  button: {
    backgroundColor: "#FFD700",
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "900",
  },

  resend: {
    color: "#FFD700",
    textAlign: "center",
    marginTop: 25,
    fontSize: 15,
  },
});
