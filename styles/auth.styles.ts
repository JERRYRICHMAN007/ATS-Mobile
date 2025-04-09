import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 50,
    margin: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },

  detailInput: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
    paddingTop: 20,
  },
  loginNextButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  logInContainer: {
    paddingTop: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  logInText: {
    fontSize: 14,
    color: "#333",
  },
  linkText: {
    color: "#4CAF50",
    fontWeight: "bold",
    marginLeft: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
export default Styles;
