import MainPoster from "@/components/MainPoster";
import SetList from "@/components/SetList";
import { useMode } from "@/context/ModeContext";
import { halfBreakSetList, travlerSetList, wecandersSetList } from "@/data";
import { cn } from "@/lib/utils";

function App() {
  const { mode } = useMode();

  return (
    <div
      className={cn(
        "h-dvh overflow-y-scroll snap-y snap-mandatory",
        mode === "band" ? "band-background" : "vocal-background"
      )}
    >
      <div className="h-dvh snap-start flex items-center justify-center">
        <MainPoster />
      </div>

      <div className="h-dvh snap-start flex items-center justify-center">
        <SetList setList={travlerSetList} />
      </div>

      <div className="h-dvh snap-start flex items-center justify-center">
        <SetList setList={halfBreakSetList} />
      </div>

      <div className="h-dvh snap-start flex items-center justify-center">
        <SetList setList={wecandersSetList} />
      </div>
    </div>
  );
}

export default App;