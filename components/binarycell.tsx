import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function BinaryCell({ number }: { number: string }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Subtle scaling animation for state change
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [number]);

  return (
    <Animated.View
      style={[
        styles.binaryCell,
        number === "1" ? styles.cellOn : styles.cellOff,
        { transform: [{ scale: scaleAnim }] },
      ]}
    >
      <Text style={styles.binaryCellText}>{number}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  binaryCell: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 3,
    marginVertical: 2,
    borderWidth: 1.5,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow
  },
  cellOn: {
    backgroundColor: "#4CAF50", // Modern green
  },
  cellOff: {
    backgroundColor: "#37474F", // Darker gray-blue
  },
  binaryCellText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
