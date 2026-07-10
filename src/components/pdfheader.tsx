
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function PdfHeader() {
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
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}