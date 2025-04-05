import { View, Text, Image } from "react-native";
import React from "react";

export default function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/images/images/photo_2025-04-05_03-31-58.jpg")}
        style={{ width: 300, height: 280 }}
      />
    </View>
  );
}
