import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";

import { styles } from "./styles";
import { Card } from "../../components/card/index";

const StartGame = () => {
  const [enterValue, setenterValue] = useState("");

  const onHandlerChange = (text) => {
    setenterValue(text.replace(/[^0-9]/g, ""));
  };

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
          />
          <View style={styles.buttonContainer}>
            <Button title="Reiniciar" onPress={() => null} color="#A79694" />
            <Button title="Confirmar" onPress={() => null} color="#A79694" />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
