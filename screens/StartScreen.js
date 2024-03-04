import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartScreen = () => {
  const [inputNumber, setInputNumber] = useState("");

  const inputNumberhandler = (enteredText) => {
    setInputNumber(enteredText);
  };

  const onReset = () => {
    setInputNumber("");
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(inputNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      console.log("Invalid number");
      Alert.alert("Invalid Number!", "Number has to be  0 > num < 100", [
        { text: "Okay", style: "destructive", onPress: onReset },
      ]);
    } else {
      console.log("Valid number: " + chosenNumber);
      // setInputNumber(toString(chosenNumber));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text>Start Screen</Text>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={inputNumber}
        onChangeText={inputNumberhandler}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Reset" color={"#AED581"} onPress={onReset} />
        <PrimaryButton title="Confirm" color={"#FF8A65"} onPress={onConfirm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    width: "90%",
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "green",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    margin: 10,
  },
});

export default StartScreen;
