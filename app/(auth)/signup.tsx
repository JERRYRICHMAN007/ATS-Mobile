import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

import Styles from "../../styles/auth.styles";

export default function signup() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      const response = await fetch(
        "https://applicant-tracking-system-backend-aqpr.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Your account has been created successfully!");
        router.push("/(auth)/login"); // Navigate to the login page
      } else {
        Alert.alert("Error", data.message || "Something went wrong!");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the server!");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 50,
          margin: 10,
          textAlign: "center",
          color: "black",
        }}
      >
        Sign Up
      </Text>

      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 20,
        }}
        placeholder="Enter Your Name"
        value={fullName}
        onChangeText={setName}
      />
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 20,
        }}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 20,
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={Styles.loginButtonContainer}>
        <TouchableOpacity style={Styles.loginNextButton} onPress={handleSignup}>
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
          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={Styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
