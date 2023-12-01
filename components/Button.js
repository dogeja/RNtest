import { View, Pressable, StyleSheet, Text } from "react-native";
export default function Button({ label }) {
  return (
    <View>
      <Pressable
        style={styles.pressableBtn}
        onPress={() => {
          console.log("you've benn pressed.");
        }}
      >
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  pressableBtn: {
    backgroundColor: "f2f2f2",
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
