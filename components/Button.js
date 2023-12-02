import { View, Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Button({ theme, label }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.BtnWrap,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.pressableBtn, { backgroundColor: "#fff" }]}
          onPress={() => {
            console.log(`YOU"VE CLICKED BUTTON`);
          }}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.BtnWrap}>
      <Pressable
        style={styles.pressableBtn}
        onPress={() => {
          console.log(`YOU"VE CLICKED BUTTON`);
        }}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
// styles
const styles = StyleSheet.create({
  BtnWrap: {
    marginHorizontal: 20,
    width: 320,
    height: 68,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  pressableBtn: {
    backgroundColor: "#efa2f2",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 18,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 15,
  },
});
