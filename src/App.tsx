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
        "h-screen overflow-y-scroll snap-y snap-mandatory",
        mode === "band" ? "band-background" : "vocal-background"
      )}
    >
      <div className="h-screen snap-start flex items-center justify-center">
        <MainPoster />
      </div>

      <div className="h-screen snap-start flex items-center justify-center">
        <SetList setList={halfBreakSetList} />
      </div>

      <div className="h-screen snap-start flex items-center justify-center">
        <SetList setList={halfBreakSetList} />
      </div>

      <div className="h-screen snap-start flex items-center justify-center">
        <SetList setList={halfBreakSetList} />
      </div>
    </div>
  );
}

export default App;
