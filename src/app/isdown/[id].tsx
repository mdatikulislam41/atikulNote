import { Directory, Paths } from "expo-file-system";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
export default function isDown() {
  const { id, class: className,chapter, type,pdfUrl } = useLocalSearchParams();
//  console.log(id);
//   console.log(className);
//   console.log(type);
  console.log(pdfUrl);
//   console.log(chapter);

  const classSixFolder = new Directory(
  Paths.document,
  "atikul/classSix"
);
console.log(classSixFolder.exists);
  return (
    <View><Text>isdownloaded</Text></View>
  )
}
