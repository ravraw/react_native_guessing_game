import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: "#000000" }}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 10,
    width: 100,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PrimaryButton;
