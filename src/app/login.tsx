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

export default function LoginScreen() {
const [mobile, setMobile] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050505" />

      <Text style={styles.title}>WELCOME</Text>
      <Text style={styles.brand}>ZUQEN</Text>

      <Text style={styles.subtitle}>
        Login with your mobile number
      </Text>

      <View style={styles.inputContainer}>
  <Text style={styles.countryCode}>+91</Text>

  <TextInput
    style={styles.input}
    placeholder="Enter Mobile Number"
    placeholderTextColor="#888"
    keyboardType="phone-pad"
    maxLength={10}
value={mobile}
onChangeText={setMobile}
  />
</View>

      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    router.push("/otp");
  }}>
        <Text style={styles.buttonText}>GET OTP</Text>
      </TouchableOpacity>

      <Text style={styles.register}>
        New User? Register Now
      </Text>

      <Text style={styles.footer}>
        By continuing you agree to our Terms & Privacy Policy
      </Text>
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
    color: "#FFFFFF",
    fontSize: 22,
    textAlign: "center",
  },

  brand: {
    color: "#FFD700",
    fontSize: 42,
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
inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#111111",
  borderWidth: 1,
  borderColor: "#FFD700",
  borderRadius: 14,
  paddingHorizontal: 16,
  marginBottom: 20,
},

countryCode: {
  color: "#FFD700",
  fontSize: 18,
  fontWeight: "700",
  marginRight: 12,
},

  input: {
  flex: 1,
  color: "#FFFFFF",
  fontSize: 18,
  paddingVertical: 16,
paddingLeft: 10,
backgroundColor: "transparent",
},

  button: {
    backgroundColor: "#FFD700",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 18,
  },

  register: {
    color: "#FFD700",
    textAlign: "center",
    marginTop: 25,
    fontWeight: "700",
  },

  footer: {
    color: "#777",
    textAlign: "center",
    marginTop: 40,
    fontSize: 13,
    lineHeight: 20,
  },
});
