import MyHeader from "@/components/myheader";

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <MyHeader/>
      {children}
    </>
  );
}