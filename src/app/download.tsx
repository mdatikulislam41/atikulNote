import { downloadPdf } from "@/services/download";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export default function Download() {
  const { pdfUrl, class: className } = useLocalSearchParams<{
    pdfUrl: string;
    class: string;
  }>();

  useEffect(() => {
    async function startDownload() {
      try {
        const file = await downloadPdf(pdfUrl, "classSix");

        console.log(file.uri);
        console.log(file.name);
        router.replace({
              pathname: "/pdfviewer",
              params: {
                  localFile: file.uri,
              },
          });
      } catch (error) {
        console.error(error);
      }
    }

    startDownload();
  }, [pdfUrl, className]);

  return null;
}