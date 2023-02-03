import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants/themes/colors";

export const StartGame = ({onHandleStarGame}) => {
  const [enterValue, setEnterValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectNumber, setSelectNumber] = useState(null);

  const onHandlerChange = (text) => {
    setEnterValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandlerReset = () => {
    setEnterValue("");
    setConfirmed(false);
  };

  const onHandlerConfirm = () => {
    const choseNumber = parseInt(enterValue, 10);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Numero invalido", "El numero tiene que estar entre el 1 y 99", [
        { text: "Entendido", style: "destructive", onPress: onHandlerReset },
      ]);
    } else {
      setConfirmed(true);
      setSelectNumber(choseNumber);
      setEnterValue("");
    }
  };

  const onHandleStartGame = () => {
    onHandleStarGame(selectNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.textConfirmed}>Numero seleccionado</Text>
        <NumberContainer number={selectNumber} />
        <Button title="Start Game" onPress={onHandleStartGame} color={colors.primary} />
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Star Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Write a Number</Text>
          <TextInput
            value={enterValue}
            keyboardType="numeric"
            style={styles.input}
            placeholder="0"
            onChangeText={onHandlerChange}
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reiniciar" onPress={onHandlerReset} color="#A79694" />
            <Button title="Confirmar" onPress={onHandlerConfirm} color="#A79694" />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
