import { useWebContext } from "@/context-api/WebContext";

const MobileNav = () => {
  const { isOpenNav } = useWebContext();
  return <div className="md:hidden flex flex-col gap-2">Enter</div>;
};

export default MobileNav;
