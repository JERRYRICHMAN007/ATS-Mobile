import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import Styles from "../../styles/screens.styles";

export default function Onboarding2() {
  return (
    <View style={Styles.container}>
      {/* Image */}
      <Image
        style={Styles.image2}
        resizeMode="contain"
        source={require("../../assets/images/images/split2.png")}
      />

      {/* Buttons */}
      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.nextButton}>
          <Text style={Styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.skipButton}>
          <Text style={[Styles.buttonText, { color: "black" }]}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Already have an account */}
      <View style={Styles.signInContainer}>
        <Text style={Styles.signInText}>
          Already have an account? <Text style={Styles.linkText}>Sign in</Text>
        </Text>
      </View>
    </View>
  );
}
