import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
