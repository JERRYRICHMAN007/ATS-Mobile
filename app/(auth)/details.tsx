import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import Styles from "@/styles/auth.styles";

export default function details() {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // State for dropdown

  const handleSubmit = async () => {
    console.log({ companyName, companyEmail, selectedRole }); // Debugging

    if (!companyName || !companyEmail || !selectedRole) {
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
            companyName,
            companyEmail,
            role: selectedRole,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Details submitted successfully!");
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
      <Text style={Styles.detailTitle}>FILL IN YOUR DETAILS</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextInput
          style={Styles.detailInput}
          placeholder="Company Name"
          autoCapitalize="words"
          value={companyName}
          onChangeText={setCompanyName}
        />
        <TextInput
          style={Styles.detailInput}
          placeholder="Company Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={companyEmail}
          onChangeText={setCompanyEmail}
        />

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
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
            style={{ width: "100%", height: 50 }}
            itemStyle={{ fontSize: 10 }}
          >
            <Picker.Item label="Choose A Role" value="" />
            <Picker.Item label="Recruiter" value="recruiter" />
            <Picker.Item label="Candidate" value="candidate" />
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
    </View>
  );
}
