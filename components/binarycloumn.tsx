import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BinaryCell from "./binarycell";

export default function BinaryCloumn({ digit }: { digit: string }) {
  const numbers = String(parseInt(digit).toString(2)).split("");

  while (numbers.length < 4) {
    numbers.unshift("0");
  }

  return (
    <View style={styles.binaryColumn}>
      {numbers.map((number, index) => (
        <BinaryCell key={index} number={number} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  binaryColumn: {
    flexDirection: "column",
    gap: 10,
  },
});
