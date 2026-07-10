import MyHeader from "@/components/myheader";
import PdfHeader from "@/components/pdfheader";
import { usePathname } from "expo-router";

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps) {
  const pathname= usePathname();
  return (
    <>
      {pathname.startsWith("/pdfviewer") ? (
        <PdfHeader />
      ) : (
        <MyHeader />
      )}

      {children}
    </>
  );
}