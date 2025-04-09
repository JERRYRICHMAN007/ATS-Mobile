import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import { router } from "expo-router"; // Import router for navigation
import Styles from "@/styles/auth.styles";

export default function details() {
  const [selectedRole, setSelectedRole] = useState(""); // State for dropdown

  const handleSubmit = async () => {
    if (!selectedRole || selectedRole === "") {
      Alert.alert("Error", "Select a role!");
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
            role: selectedRole,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Details submitted successfully!");

        // Navigate based on the selected role
        if (selectedRole === "applicant") {
          router.push("/(auth)/login"); // Navigate to login page
        } else if (selectedRole === "recruiter") {
          router.push("/(auth)/hrdetails"); // Navigate to HR details page
        }
      } else {
        Alert.alert("Error", data.message || "Something went wrong!");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the server!");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={Styles.detailTitle}>Choose Your Role</Text>

      {/* Dropdown for Role Selection */}
      <View
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          marginBottom: 20,
          overflow: "hidden",
        }}
      >
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => setSelectedRole(itemValue)} // Update state correctly
          style={{ width: "100%", height: 50 }}
          itemStyle={{ fontSize: 10 }}
        >
          <Picker.Item label="Choose A Role" value="" />
          <Picker.Item label="Recruiter" value="recruiter" />
          <Picker.Item label="Applicant" value="applicant" />
        </Picker>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={Styles.loginNextButton}
          onPress={handleSubmit} // Call handleSubmit on button press
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
