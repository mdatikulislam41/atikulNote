import { supabase } from "@/lib/supabase";
import { downloadPdf } from "@/services/download";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Chapter = {
  id: number;
  class: number;
  chapter: number;
  title: string;
  pdf_url: string;
  type: string;
  boxbg:string;
};

export default function Index() {
const [chapters, setChapters] = useState<Chapter[]>([]);
const [loading, setLoading] = useState(true);
const [pdfloading, pdfsetLoading] = useState(false);
useEffect(() => {
  loadData();
}, []);


const loadData = async () => {
  setLoading(true);

  const { data, error } = await supabase
    .from("chapters")
    .select("*")
    .order("chapter");

  if (error) {
    console.log(error);
  } else {
    setChapters(data);
  }

  setLoading(false);
};

  async function openPdf(pdfUrl: string) {
    try {
      pdfsetLoading(true);

      const file = await downloadPdf(pdfUrl, "classSix");

      router.push({
        pathname: "/pdfviewer",
        params: {
          localFile: file.uri,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      pdfsetLoading(false);
    }
  }

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b0148b" }} edges={["left", "right"]}>
      
            {/* Chapters Cards List */}
      <View>
                <FlatList
              data={chapters}
              style={{width:"100%",paddingBlock:40,paddingInline:20}}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
               <View>
                <TouchableOpacity
                style={styles.card}
                key={item.id}
              activeOpacity={0.8}
              
                 onPress={()=>{
                  openPdf(item.pdf_url);
                }}>
                  
                  <View style={[styles.chapterBox,{
                    backgroundColor:item.boxbg
                  }]}>
                    
                      <Text style={styles.chapterNumber}>{item.chapter}</Text>
                  </View>
                  <Text style={styles.chapterTitle}>{item.title}</Text>
                  <View style={styles.chevronContainer}>
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color="#cbd5e1"
                  />
                </View>
                {/* File Icon Status */}
              <FileStatusIcon color={item.boxbg} downloaded={false} />
                </TouchableOpacity>
               </View>
                
              )}
            />
      </View>
      <View>
        {/* <Link href={"/testing"} style={{padding:5,backgroundColor:"#817979",marginBlock:4}}> Go to Testing
        </Link> */}
        {/* <TouchableOpacity onPress={()=>{
          openPdf("https://yoofymmuweehqxingnlg.supabase.co/storage/v1/object/public/atiklpdf/classSix/Chapter-4.pdf");
        }} style={{padding:5,backgroundColor:"#817979",marginBlock:4}}>
          <Text>TouchAble Opacity</Text>
        </TouchableOpacity> */}
      </View>
      
      {pdfloading && (
        <View
          style={{
            position: "absolute",
            inset: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000066",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    flex:1,
    backgroundColor: "#a04d11",
    paddingInline:40,
  },
  pdfContainer:{
    paddingInline:64,
    paddingBlock:64,
  },
    card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f1f5f9",

    shadowColor: "#0f172a",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  chapterBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  chapterTitle: {
    flex: 1,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
    lineHeight: 22,
  },
   chapterNumber: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
  chevronContainer: {
    marginRight: 12,
  },
});


// File Status Icon Component (matching the document outline + badge style)
const FileStatusIcon = ({ color, downloaded }: { color: string; downloaded: boolean }) => {
  const iconColor = downloaded ? "#0d9488" : color;
  const badgeColor = downloaded ? "#10b981" : color;
  const badgeIcon = downloaded ? "checkmark-sharp" : "arrow-down-sharp";

  return (
    <View style={{
    position: "relative",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  }}>
      <Ionicons name="document-text-outline" size={26} color={iconColor} />
      <View style={{
  position: "absolute",
  bottom: 4,             // bottom-1
  right: 4,              // right-1
  backgroundColor: "#fff",
  borderRadius: 9999,    // rounded-full
  padding: 1,            // p-[1px]

  // iOS shadow
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 2,

  // Android shadow
  elevation: 2,
}}>
        <View
          
          style={{
            backgroundColor: badgeColor,
  width: 16,               // w-4
  height: 16,              // h-4
  borderRadius: 9999,      // rounded-full
  alignItems: "center",    // items-center
  justifyContent: "center" // justify-center
}}
        >
          <Ionicons name={badgeIcon as any} size={10} color="#ffffff" />
        </View>
      </View>
    </View>
  );
};