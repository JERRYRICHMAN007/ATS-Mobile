import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "70%",
    marginRight: 35,
  },
  buttonContainer: {
    alignItems: "center",
    gap: 15,
    width: "100%",
  },
  nextButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  skipButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  signInContainer: {
    paddingTop: 10,
  },
  signInText: {
    fontSize: 14,
    color: "#333",
  },
  linkText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default styles;
