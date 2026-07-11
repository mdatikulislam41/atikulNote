import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Pdfeader() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: "#2563EB" }}
    >
      <View
        style={{
          height: 60,
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18,textAlign:"center" }}>
        CLASS Nine MATH
        </Text>
      </View>
    </SafeAreaView>
  );
}