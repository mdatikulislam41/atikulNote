import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function chapter_card() {
  return (
    <>
    {/* Chapters Cards List */}
        <View className="px-4 pt-4">
          {chapters.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => openOrDownloadPdf(item.id, item.title)}
              className="flex-row items-center bg-white mb-3 p-3.5 rounded-2xl border border-slate-100/80"
              style={{
                shadowColor: "#0f172a",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.04,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              {/* Colored Chapter Index Box */}
              <View
                style={{ backgroundColor: item.color }}
                className="w-12 h-12 rounded-xl items-center justify-center shadow-sm"
              >
                <Text className="text-white text-xl font-extrabold">{item.id}</Text>
              </View>

              {/* Chapter Title */}
              <Text className="flex-1 ml-4 text-[15px] font-semibold text-slate-800 leading-snug">
                {item.title}
              </Text>

              {/* Chevron Right */}
              <View className="mr-3">
                <Ionicons name="chevron-forward" size={16} color="#cbd5e1" />
              </View>

              {/* File Icon Status */}
              {/* <FileStatusIco color={item.color} downloaded={item.downloaded} /> */}
            </TouchableOpacity>
          ))}
        </View>
    </>
  )
}
