import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(screens)/onboarding1");
    }, 2000);
  }, []);

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
