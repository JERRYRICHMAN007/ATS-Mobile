import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Styles from "../../styles/screens.styles";

export default function Onboarding1() {
  const router = useRouter();

  return (
    <View style={Styles.container}>
      {/* Image */}
      <Image
        style={Styles.image}
        resizeMode="contain"
        source={require("../../assets/images/images/split.png")}
      />

      {/* Buttons */}
      <View style={Styles.buttonContainer}>
        <TouchableOpacity
          style={Styles.nextButton}
          onPress={() => router.push("/(screens)/onboarding2")}
        >
          <Text style={Styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.skipButton}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={[Styles.buttonText, { color: "#555" }]}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Already have an account */}
      <View style={Styles.signInContainer}>
        <Text style={Styles.signInText}>
          Already have an account?{" "}
          <Text
            style={Styles.linkText}
            onPress={() => router.push("/(auth)/login")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
}
