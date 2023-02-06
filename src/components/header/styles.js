import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/themes/colors";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: 50,
    height: height * 0.15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Rubik-Medium"
  },
});
