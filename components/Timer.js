import { StyleSheet, View, Text } from "react-native";
export default function Timer({}) {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>남은 시간</Text>
      <Text style={[styles.timerText, { fontSize: 48 }]}>03:24</Text>
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
