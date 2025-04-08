import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import Styles from "../../styles/auth.styles";

export default function signup() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          margin: 10,
          textAlign: "center",
          color: "black",
        }}
      >
        It’s our great pleasure to have you on board!
      </Text>
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Enter Your Name"
      />
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 10,
        }}
        placeholder="Password"
        secureTextEntry
      />
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
          Already have an account?{" "}
          <Text
            style={Styles.linkText}
            onPress={() => router.push("/(auth)/signup")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}
