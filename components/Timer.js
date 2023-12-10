import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

//countdown logic
//00시 정각 - 지금 시간 = 남은 시간 보여주기.
//const timer
const EndTimerHours = 23;
const EndTimerMinutes = 59;
const EndTimerSeconds = 59;
//timerlogic
export default function Timer({ leftTime }) {
  const [leftHour, setLeftHour] = useState(0);
  const [leftMinute, setLeftMinute] = useState(0);
  const [leftSecond, setLeftSecond] = useState(0);
  function getTime() {
    const timerNow = new Date();
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

    setLeftHour(leftTimeHour);
    setLeftMinute(leftTimeMinutes);
    setLeftSecond(leftTimeSeconds);
  }
  setInterval(() => {
    getTime();
  }, 1000);
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>남은 시간</Text>
      <Text style={[styles.timerText, { fontSize: 48 }]}>
        {leftHour}:{leftMinute}:{leftSecond}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  timerText: {
    fontSize: 36,
    color: "#f2f2f2",
    flexDirection: "row",
  },
  timerContainer: {
    padding: 3,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
