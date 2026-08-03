import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" backgroundColor="#050505" />

      <Text style={styles.title}>CREATE ACCOUNT</Text>
      <Text style={styles.brand}>ZUQEN</Text>

      <Text style={styles.subtitle}>
        Create your secure account
      </Text>
            <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      <TextInput
        style={styles.input}
        placeholder="Email (Optional)"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
  By creating an account you agree to our Terms & Privacy Policy
</Text>

</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  content: {
    padding: 25,
    justifyContent: "center",
    flexGrow: 1,
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

  input: {
    backgroundColor: "#111111",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 18,
  },

  button: {
    backgroundColor: "#FFD700",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 18,
  },

  loginText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 25,
    fontSize: 15,
  },

  loginLink: {
    color: "#FFD700",
    fontWeight: "700",
  },

  footer: {
    color: "#777777",
    textAlign: "center",
    marginTop: 40,
    fontSize: 13,
    lineHeight: 20,
  },
});
