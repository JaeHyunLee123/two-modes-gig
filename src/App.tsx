import MainPoster from "@/components/MainPoster";
import SetList from "@/components/SetList";
import { useMode } from "@/context/ModeContext";
import { halfBreakSetList } from "@/data";
import { cn } from "@/lib/utils";

function App() {
  const { mode } = useMode();

  return (
    <div
      className={cn(
        "py-2 flex flex-col items-center justify-center transition-all duration-300",
        mode === "band" ? "band-background" : "vocal-background"
      )}
    >
      <MainPoster />

      <SetList setList={halfBreakSetList} />

      <SetList setList={halfBreakSetList} />

      <SetList setList={halfBreakSetList} />
    </div>
  );
}

export default App;
