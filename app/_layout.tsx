import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#0f2027", "#203a43", "#2c5364"]}
        style={styles.background}
      >
        <View style={styles.patternOverlay} />
        <Slot />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.05,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
});
