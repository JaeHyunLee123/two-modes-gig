import { createContext, useState, useContext, type ReactNode } from "react";

// Type definitions based on the original snippet
type ModeType = "band" | "vocal";

interface ModeContextType {
  mode: ModeType;
  setMode: (newMode: ModeType) => void;
  toggleMode: () => void; // A convenience function for switching
}

// Create the context. It will be given a value by the Provider.
const ModeContext = createContext<ModeContextType | undefined>(undefined);

// Define the props for the Provider component
interface ModeProviderProps {
  children: ReactNode;
}

// Create and export the Provider component
export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<ModeType>("band"); // Default mode

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "band" ? "vocal" : "band"));
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

// Create and export a custom hook for easy consumption of the context
// eslint-disable-next-line react-refresh/only-export-components
export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}

export default ModeContext;
