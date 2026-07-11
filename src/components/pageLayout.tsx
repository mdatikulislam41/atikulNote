import MyHeader from "@/components/myheader";

// import Pdfeader from "@/components/pdfheader";
import { usePathname } from "expo-router";

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps) {
  const pathname= usePathname();
  return (
    <>
      <MyHeader />
      {children}
    </>
  );
}