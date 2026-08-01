import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>ZUQEN</Text>

        <Text style={styles.subtitle}>
          PLAY & WIN REAL MONEY
        </Text>

        <Text style={styles.description}>
          India's Premium Skill Gaming Platform
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          ENTER APP
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        100% Secure • Fast Withdrawals • Fair Play
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 50,
    paddingHorizontal: 25,
  },

  logoContainer: {
    alignItems: "center",
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    color: "#FFD700",
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 3,
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
  },

  description: {
    color: "#BBBBBB",
    fontSize: 15,
    marginTop: 12,
    textAlign: "center",
  },

  button: {
    width: "100%",
    backgroundColor: "#FFD700",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
  },

  footer: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
  },
});
