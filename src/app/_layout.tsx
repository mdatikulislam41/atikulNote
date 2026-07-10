import { Directory, Paths } from "expo-file-system";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from "react-native";
export default function RootLayout() {
  const scheme = useColorScheme();
  // useEffect(() => {
  //   createAppFolders();
  // }, []);
  return (
     <ThemeProvider value={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={scheme === "dark" ? "light" : "light"} />
       {/* <MyHeader/> */}
      <Stack screenOptions={{ headerShown: false }}>
       
        <Stack.Screen name="(tabs)" /> 
        <Stack.Screen name="pdfviewer" />  
      </Stack>
    </ThemeProvider>
  );
}


async function createAppFolders() {
  try {
    // Main Folder
    const pdfFolder = new Directory(Paths.document, "atikul");

    await pdfFolder.create({
      idempotent: true,
    });
    const folders = [
      "classSix",
      "classSeven",
      "classEight",
    ];

    for (const name of folders) {
      const folder = new Directory(pdfFolder, name);
      await folder.create({ idempotent: true });
    }

    console.log("✅ PDF Folder Ready");
    console.log(pdfFolder.uri);

  } catch (error) {
    console.error("❌ Folder Create Error:", error);
  }
}
