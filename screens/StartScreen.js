import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Start Screen</Text>
      <TextInput style={styles.textInput} placeholder="Placeholder text" />
      <View style={styles.buttonsContainer}>
        <PrimaryButton title="Reset" />
        <PrimaryButton title="Confirm" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "green",
  },
  textInput: {
    height: 40,
    width: "90%",
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "green",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
  },
});

export default StartScreen;
