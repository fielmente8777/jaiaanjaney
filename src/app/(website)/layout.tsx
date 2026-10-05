import WebSiteFooter from "@/components/footer/WebSiteFooter";
import WebsiteNav from "@/components/navbar/WebsiteNav";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebsiteNav />
      {children}
      <WebSiteFooter />
    </>
  );
};

export default WebLayout;
