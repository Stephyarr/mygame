import { useFonts } from "expo-font";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { Header } from "./components";
import { colors } from "./constants/themes/colors";
import { StartGame, Game } from "./screems";
import { styles } from "./styles";

const App = () => {
  const [loader] = useFonts({
    "Rubik-Black": require("../assets/fonts/Rubik-Black.ttf"),
    "Rubik-BlackItalic": require("../assets/fonts/Rubik-BlackItalic.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium":require("../assets/fonts/Rubik-Medium.ttf")
  }) 

  const [userNumer, setUserNumer] = useState(null);

  const onHandleStarGame = (selectedNumber) => {
    setUserNumer(selectedNumber);
  };

  const Content = () =>
    userNumer ? (
      <Game selectedNumber={userNumer} />
    ) : (
      <StartGame onHandleStarGame={onHandleStarGame} />
    );

    if (!loader) {
      return (
        <View style={styles.containerLoader}>
          <ActivityIndicator size='large' color={colors.secundary}/>
        </View>
      )
    }

  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <Content />
    </View>
  );
};

export default App;
