
import { myColors } from "@/constants/mycolors";
import { supabase } from "@/lib/supabase";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Heading = {
  id: number;
  subject: string;
  class: string;
};
export default function MyHeader() {
  const [topHeader, settopHeader] = useState<Heading[]>([]);
  const pathname= usePathname();
useEffect(() => {
  loadHeading();
  console.log("topHeader:", topHeader);
}, []);
  const loadHeading = async () => {
    // setLoading(true);
  
    const { data, error } = await supabase
      .from("header")
      .select("*")
      .order("id");
  
    if (error) {
      console.log(error);
    } else {
      settopHeader(data);
    }
  
    // setLoading(false);
  };
  return (
 
    <SafeAreaView
      edges={["top",]}
      style={{ backgroundColor: myColors.primaryDark}}
    >
      <View
        style={{
          height: 60,
          justifyContent: "space-between",
          paddingHorizontal: 16,
          display:"flex",
          flexDirection:"column",
          paddingBlockStart:20,
        }}
      >
        {pathname.startsWith("/pdfviewer") ? (
       <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={{
          display:"flex",
          flexDirection:"row",
          justifyContent: "space-between",
          width:"100%"
        }}>
         <Text style={{ color: myColors.white, fontSize: 18,fontWeight:600 }}>
        {topHeader[0]?.subject}
        </Text>
        <View style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center",backgroundColor:"#132a6d",paddingInline:10,borderRadius:20}}>
          <Ionicons name="book" size={14} color="#fff" />
          <Text style={{ color: myColors.white, fontSize: 14,fontWeight:500 }}>
          {topHeader[0]?.class}
          </Text>
        </View>
       </View>
      )}
       
      </View>
    </SafeAreaView>
  );
}