import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";
import Styles from "../../styles/auth.styles";

export default function login() {
  return (
    <View style={Styles.loginContainer}>
      <Text style={Styles.loginTitle}>Login</Text>
      <TextInput
        style={Styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      ></TextInput>
      <TextInput style={Styles.input} placeholder="Password" secureTextEntry />
      <View style={Styles.loginButtonContainer}>
        <TouchableOpacity style={Styles.loginNextButton}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.logInContainer}>
        <Text style={Styles.logInText}>
          Don't have an account?{" "}
          <Text
            style={Styles.linkText}
            onPress={() => router.push("/(auth)/signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
