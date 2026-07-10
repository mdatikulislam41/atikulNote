import PageLayout from "@/components/pageLayout";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Pdf from 'react-native-pdf';

export default function PdfViewer() {
  const { localFile } = useLocalSearchParams<{
  localFile: string;
}>();
const source = {
  uri: localFile,
  cache: true,
};

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);
const [showPage, setShowPage] = useState(false);
const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (
    <PageLayout>
        <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    // onPageChanged={(page,numberOfPages) => {
                    //     console.log(`Current page: ${page}`);
                    // }}
                      onPageChanged={(currentPage) => {
    setPage(currentPage);

    setShowPage(true);

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setShowPage(false);
    }, 1000);
  }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>


                    {showPage && (
  <View style={styles.pageBubble}>
    <Text style={styles.pageText}>
      {page}
    </Text>
  </View>
)}
    </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    pageBubble: {
  position: "absolute",
  right: 15,
  top: "50%",

  width: 70,
  height: 70,

  borderRadius: 14,

  backgroundColor: "#E5E5E5",

  justifyContent: "center",
  alignItems: "center",

  elevation: 6,
},

pageText: {
  fontSize: 28,
  fontWeight: "bold",
  color: "#222",
},
});