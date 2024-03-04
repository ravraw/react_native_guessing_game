import { setStatusBarHidden } from "expo-status-bar";
import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ title, color, onPress }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner
        }
        onPress={onPress}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuter: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonInner: {
    backgroundColor: "#FF8A65",
    padding: 5,
    borderRadius: 10,
    width: 100,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
