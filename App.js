import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import Timer from "./components/Timer";

const placeHolderImg = require("./assets/images/background-image.png");

export default function App() {
  if (dailyMissionPassed) {
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
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHolderImgSource={placeHolderImg} />
      </View>
      <Timer leftTime={leftTimer}></Timer>
      <StatusBar style="auto" />
    </View>
  );
}
const dailyMissionPassed = false;
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

//countdown logic
let timerNow = new Date();
//00시 정각 - 지금 시간 = 남은 시간 보여주기.
//const timer
const EndTimerHours = 24;
const EndTimerMinutes = 59;
const EndTimerSeconds = 59;
//timerlogic
let timerNowHour = timerNow.getHours();
let timerNowMinutes = timerNow.getMinutes();
let timerNowSeconds = timerNow.getSeconds();
let leftTimeHour = EndTimerHours - timerNowHour;
let leftTimeMinutes = EndTimerMinutes - timerNowMinutes;
let leftTimeSeconds = EndTimerSeconds - timerNowSeconds;
//add 0 before timer
leftTimeHour = leftTimeHour < 10 ? `0${leftTimeHour}` : leftTimeHour;
leftTimeMinutes =
  leftTimeMinutes < 10 ? `0${leftTimeMinutes}` : leftTimeMinutes;
leftTimeSeconds =
  leftTimeSeconds < 10 ? `0${leftTimeSeconds}` : leftTimeSeconds;
let leftTimer = `${leftTimeHour}:${leftTimeMinutes}:${leftTimeSeconds}`;
