import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BinaryCloumn from "@/components/binarycloumn";

export default function Home() {
  const [time, setTime] = useState<string[] | null>(
    new Date().toLocaleTimeString("en-GB").match(/\d/g)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB").match(/\d/g));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {time?.map((digit, index) => (
        <BinaryCloumn key={index} digit={digit} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
