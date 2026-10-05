import { createContext, useContext, useState } from "react";

interface WebContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedVilla: string | null;
  setSelectedVilla: React.Dispatch<React.SetStateAction<string | null>>;
}
export const WebContext = createContext<WebContextType>({
  isOpen: false,
  setIsOpen: () => {},
  selectedVilla: null,
  setSelectedVilla: () => {},
});

export const WebContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState<string | null>(null);

  return (
    <WebContext.Provider
      value={{ isOpen, setIsOpen, selectedVilla, setSelectedVilla }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) {
    throw new Error("useWebContext must be used within a WebContextProvider");
  }
  return context;
};
