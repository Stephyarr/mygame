import { View } from "react-native";

import { Header } from "./components";
import { StartGame } from "./screems";
import { styles } from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      <StartGame />
    </View>
  );
};

export default App;
