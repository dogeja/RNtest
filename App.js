import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";

const placeHolderImg = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHolderImgSource={placeHolderImg} />
      </View>
      <View style={styles.footerContanier}>
        <Button theme="primary" label={"CHOOSE A PHOTO"} />
        <Button label={"USE THIS PHOTO"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContanier: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
