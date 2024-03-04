import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("./assets/background.png")}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10, opacity: 0.1 }}
        >
          <StartScreen />
          <StatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    width: "100%",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
