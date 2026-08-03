import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";

export default function LudoScreen() {
  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#050505"
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>
          🎲 Ludo
        </Text>

        <Text style={styles.subtitle}>
          Play Skill Based Real Matches
        </Text>

        <View style={styles.banner}>

          <Text style={styles.bannerTitle}>
            Win Real Cash
          </Text>

          <Text style={styles.bannerText}>
            Join a room and compete with real players.
          </Text>

        </View>

        <Text style={styles.section}>
          Entry Rooms
        </Text>
        <TouchableOpacity style={styles.roomCard}>
          <Text style={styles.roomAmount}>₹10 Room</Text>
          <Text style={styles.roomPlayers}>2 Players</Text>
          <Text style={styles.roomPrize}>Prize ₹19</Text>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinText}>JOIN</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roomCard}>
          <Text style={styles.roomAmount}>₹20 Room</Text>
          <Text style={styles.roomPlayers}>2 Players</Text>
          <Text style={styles.roomPrize}>Prize ₹38</Text>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinText}>JOIN</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roomCard}>
          <Text style={styles.roomAmount}>₹50 Room</Text>
          <Text style={styles.roomPlayers}>2 Players</Text>
          <Text style={styles.roomPrize}>Prize ₹95</Text>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinText}>JOIN</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roomCard}>
          <Text style={styles.roomAmount}>₹100 Room</Text>
          <Text style={styles.roomPlayers}>2 Players</Text>
          <Text style={styles.roomPrize}>Prize ₹190</Text>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinText}>JOIN</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.section}>
          More Options
        </Text>

        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.bigButtonText}>
            🎯 Create Private Room
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.bigButtonText}>
            🔑 Join With Room Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.bigButtonText}>
            🏆 Tournament
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  title: {
    color: "#FFD700",
    fontSize: 34,
    fontWeight: "900",
    marginTop: 25,
    textAlign: "center",
  },

  subtitle: {
    color: "#DDDDDD",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },

  banner: {
    backgroundColor: "#111111",
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#FFD70033",
    marginBottom: 25,
  },

  bannerTitle: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "900",
  },

  bannerText: {
    color: "#CCCCCC",
    marginTop: 8,
    fontSize: 14,
  },

  section: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  roomCard: {
    backgroundColor: "#111111",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FFD70022",
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  roomAmount: {
    color: "#FFD700",
    fontSize: 24,
    fontWeight: "900",
  },

  roomPlayers: {
    color: "#CCCCCC",
    marginTop: 6,
    fontSize: 15,
  },

  roomPrize: {
    color: "#00FF88",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "800",
  },

  joinButton: {
    backgroundColor: "#FFD700",
    marginTop: 15,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  joinText: {
    color: "#000000",
    fontWeight: "900",
    fontSize: 16,
  },

  bigButton: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFD70022",
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 15,
    alignItems: "center",
  },

  bigButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },
  roomInfo: {
    color: "#AAAAAA",
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
});
