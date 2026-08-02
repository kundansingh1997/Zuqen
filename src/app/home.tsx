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
      <StatusBar barStyle="light-content" backgroundColor="#050505" />

      <View style={styles.topGlow} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>ZUQEN</Text>

        <Text style={styles.subtitle}>
  PLAY & WIN{" "}
  <Text style={{ color: "#FFD700", fontWeight: "900" }}>
    REAL MONEY
  </Text>
</Text>

        <Text style={styles.description}>
          India's Premium Skill Gaming Platform
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTER APP</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
  <Text style={styles.footerItem}>🛡️ 100% Secure</Text>
  <Text style={styles.footerDot}>•</Text>
  <Text style={styles.footerItem}>⚡ Fast Withdrawals</Text>
  <Text style={styles.footerDot}>•</Text>
  <Text style={styles.footerItem}>🏆 Fair Play</Text>
</View>
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
    paddingBottom: 45,
    paddingHorizontal: 25,
  },

  topGlow: {
    position: "absolute",
    top: -120,
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: "#FFD70022",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  logo: {
    width: 145,
    height: 145,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    color: "#FFD700",
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 18,
    textAlign: "center",
  },

  description: {
  color: "#C8C8C8",
  fontSize: 17,
  fontWeight: "500",
  letterSpacing: 0.5,
  marginTop: 12,
  textAlign: "center",
},

  button: {
  width: "100%",
  backgroundColor: "#FFD700",
  paddingVertical: 15,
  borderRadius: 18,
  alignItems: "center",
  elevation: 16,
shadowColor: "#FFD700",
shadowOpacity: 0.45,
shadowRadius: 12,
shadowOffset: {
  width: 0,
  height: 5,
},
},

  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },

  footer: {
    color: "#777777",
    fontSize: 14,
    textAlign: "center",
  },
footerContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
marginBottom: 55,
paddingBottom: 10,
},

footerItem: {
  color: "#D8D8D8",
  fontSize: 13,
  fontWeight: "700",
  letterSpacing: 0.4,
},
},

footerDot: {
  color: "#FFD700",
  marginHorizontal: 8,
},
});
