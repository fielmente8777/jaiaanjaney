import WebSiteFooter from "@/components/footer/WebSiteFooter";
import MobileNav from "@/components/navbar/MobileNav";
import WebsiteNav from "@/components/navbar/WebsiteNav";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebsiteNav />
      <MobileNav />

      {children}
      <WebSiteFooter />
    </>
  );
};

export default WebLayout;
