import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyHeader() {
  const pathname= usePathname();
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
      
      {pathname.startsWith("/pdfviewer") ? (
       <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        // <TouchableOpacity onPress={() => router.back()}>
        //     <Ionicons name="arrow-back" size={24} color="#fff" />
        // </TouchableOpacity>
        <Text></Text>
        
      )}
      </View>
    </SafeAreaView>
  );
}