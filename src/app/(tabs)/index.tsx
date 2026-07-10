import { supabase } from "@/lib/supabase";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Chapter = {
  id: number;
  class: number;
  chapter: number;
  title: string;
  pdf_url: string;
  type: string;
};

export default function Index() {
const [chapters, setChapters] = useState<Chapter[]>([]);
const [loading, setLoading] = useState(true);
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

  return (
    
    <SafeAreaView style={styles.container}>
      
        <View>
        <Text style={{color:"#fff"}}>Chaper List</Text>
      </View>
      <View>
        <FlatList
      data={chapters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        // <Text style={{color:"#fff"}}>{item.title}</Text>
        <Link style={{color:"#fff"}}
  href={{
    // pathname: "/isdown/[id]",
    pathname: "/download",
    params: { id: item.id,class:item.class,chapter:item.chapter,type:item.type,pdfUrl:item.pdf_url },
  }}
>
  {item.title +"and Chapter: " + item.chapter}
</Link>
      )}
    />
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
});
