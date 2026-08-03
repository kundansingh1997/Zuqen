import React from "react";
import {
  View,
 Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#050505"
        barStyle="light-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.welcome}>
          Welcome Back 👋
        </Text>

        <Text style={styles.brand}>
          ZUQEN
        </Text>

        <View style={styles.walletCard}>

          <Text style={styles.walletTitle}>
            Wallet Balance
          </Text>

          <Text style={styles.balance}>
            ₹0.00
          </Text>

          <View style={styles.walletButtons}>

            <TouchableOpacity style={styles.addMoney}>
              <Text style={styles.buttonText}>
                Add Money
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.withdraw}>
              <Text style={styles.buttonText}>
                Withdraw
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        <Text style={styles.sectionTitle}>
          Main Games
        </Text>
        <TouchableOpacity style={styles.gameCard}>
          <Text style={styles.gameEmoji}>🎲</Text>

          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>
              Ludo
            </Text>

            <Text style={styles.gameSubtitle}>
              Multiplayer • Entry ₹10
            </Text>
          </View>

          <Text style={styles.playNow}>
            PLAY
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameCard}>
          <Text style={styles.gameEmoji}>🐍</Text>

          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>
              Snake
            </Text>

            <Text style={styles.gameSubtitle}>
              High Score • Entry ₹5
            </Text>
          </View>

          <Text style={styles.playNow}>
            PLAY
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>
          Coming Soon
        </Text>

        <View style={styles.comingCard}>
          <Text style={styles.comingText}>
            🚗 Car Racing
          </Text>
        </View>

        <View style={styles.comingCard}>
          <Text style={styles.comingText}>
            🏍️ Bike Racing
          </Text>
        </View>
<View style={styles.gamesSection}>

  <Text style={styles.sectionTitle}>🎮 Main Games</Text>

  <TouchableOpacity style={styles.gameCard}>
    <Text style={styles.gameTitle}>🎲 Ludo</Text>
    <Text style={styles.gameSub}>Play with Real Money</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.gameCard}>
    <Text style={styles.gameTitle}>🐍 Snake</Text>
    <Text style={styles.gameSub}>Play with Real Money</Text>
  </TouchableOpacity>

  <Text style={styles.sectionTitle}>🚀 Coming Soon</Text>

  <View style={styles.comingCard}>
    <Text style={styles.comingText}>
      🚗 Car Racing
    </Text>
  </View>

  <View style={styles.comingCard}>
    <Text style={styles.comingText}>
      🏍 Bike Racing
    </Text>
  </View>

</View>
        <View style={styles.bottomNav}>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>💰</Text>
            <Text style={styles.navText}>Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>📜</Text>
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  gamesSection: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
  },

  gameCard: {
    backgroundColor: "#111111",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFD70022",
    padding: 18,
    marginBottom: 15,
  },

  gameTitle: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "900",
  },

  gameSub: {
    color: "#CCCCCC",
    fontSize: 14,
    marginTop: 5,
  },

  comingCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },

  comingText: {
    color: "#AAAAAA",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#111111",
    margin: 20,
    paddingVertical: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFD70022",
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 22,
    marginBottom: 4,
  },

  navText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
});
