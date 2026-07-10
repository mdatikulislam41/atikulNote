import { File } from "expo-file-system";
import { getClassFolder, getFileNameFromUrl } from "./fileSystem";

export async function downloadPdf(
  pdfUrl: string,
  className: string
) {
  try {
    const file = new File(
      getClassFolder(className),
      getFileNameFromUrl(pdfUrl)
    );

    if (file.exists) {
      console.log("✅ Already downloaded:", file.uri);
      return file;
    }

    await File.downloadFileAsync(pdfUrl, file);

    console.log("✅ Download completed");
    console.log(file.uri);

    return file;
  } catch (error) {
    console.error("❌ Download failed:", error);
    throw error;
  }
}