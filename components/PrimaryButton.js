import { View, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ title }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    color: "white",
    // fontWeight: "bold",
    // textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PrimaryButton;
