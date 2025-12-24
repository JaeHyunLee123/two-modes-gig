import MainPoster from "@/components/MainPoster";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

function App() {
  const { mode } = useMode();

  return (
    <div
      className={cn(
        "h-screen flex items-center justify-center transition-all duration-300",
        mode === "band" ? "band-background" : "vocal-background"
      )}
    >
      <MainPoster />
    </div>
  );
}

export default App;
