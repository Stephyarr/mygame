import { useState } from "react";
import { View } from "react-native";
import { Header } from "./components";
import { StartGame, Game } from "./screems";
import { styles } from "./styles";

const App = () => {
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

  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <Content />
    </View>
  );
};

export default App;
