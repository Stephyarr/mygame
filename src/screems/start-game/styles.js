import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.text,
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  label: {
    fontSize: 18,
    paddingVertical: 5,
    textAlign: "center",
  },
  input: {
    width: "100%",
    maxWidth: 40,
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  confirmedContainer: {
    width: "75%",
    height: 180,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  textConfirmed: {
    fontSize: 18,
  },
});
