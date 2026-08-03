import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {
  const logoScale = useRef(new Animated.Value(1)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

useEffect(() => {
Animated.timing(logoOpacity, {
  toValue: 1,
  duration: 1200,
  useNativeDriver: true,
}).start();
  Animated.loop(
    Animated.sequence([
      Animated.timing(logoScale, {
        toValue: 1.08,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ])
  ).start();
}, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.topGlow} />
<Animated.View
  style={[
    styles.logoGlow,
    { transform: [{ scale: logoScale }] },
  ]}
/>

      <Animated.Image
  source={require("../../assets/images/icon.png")}
  style={[
    styles.logo,
    {
opacity: logoOpacity,
      transform: [{ scale: logoScale }],
    },
  ]}
  resizeMode="contain"
/>

      <Text style={styles.title}>
        ZUQEN
      </Text>

      <Text style={styles.moneyText}>
        PLAY & WIN{" "}
        <Text style={styles.realMoney}>
          REAL MONEY
        </Text>
      </Text>

      <View style={styles.line} />

      <Text style={styles.subTitle}>
        India's Premium Skill Gaming Platform
      </Text>

      <View style={{ height: 70 }} />

      <Text style={styles.loading}>
        Loading...
      </Text>
<ActivityIndicator
  size="small"
  color="#FFD700"
  style={{ marginTop: 12 }}
/>

      <ActivityIndicator
        size="large"
        color="#FFC400"
        style={styles.loader}
      />

      <View style={styles.bottomArea}>

        <Text style={styles.secure}>
          🛡️ 100% Secure
        </Text>

        <Text style={styles.dot}>
          •
        </Text>

        <Text style={styles.secure}>
          ⚡ Fast Withdrawals
        </Text>

        <Text style={styles.dot}>
          •
        </Text>

        <Text style={styles.secure}>
          🏆 Fair Play
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
topGlow: {
  position: "absolute",
  top: -180,
  width: 420,
  height: 420,
  borderRadius: 210,
  backgroundColor: "#FFD700",
  opacity: 0.12,
},

  logo: {
    width: 110,
    height: 110,
    marginBottom: 18,
  },
logoGlow: {
  position: "absolute",
  width: 170,
  height: 170,
  borderRadius: 85,
  backgroundColor: "#FFD700",
  opacity: 0.15,
},

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#FFD700",
    letterSpacing: 8,
  },

  subtitle: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  money: {
    color: "#FFD700",
  },

  line: {
    width: 120,
    height: 2,
    backgroundColor: "#FFD700",
    marginTop: 16,
    marginBottom: 18,
    borderRadius: 2,
  },

  tagline: {
    color: "#A8A8A8",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 70,
  },

  loading: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 70,
  },

  footer: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  footerText: {
    color: "#CFCFCF",
    fontSize: 12,
  },

  dot: {
    color: "#FFD700",
    marginHorizontal: 8,
    fontSize: 12,
  },
secure: {
  color: "#CFCFCF",
  fontSize: 12,
  fontWeight: "600",
},

loader: {
  marginBottom: 18,
},
});
