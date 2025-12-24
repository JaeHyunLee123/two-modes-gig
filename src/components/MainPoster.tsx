import ToggleSwitch from "@/components/ToggleSwitch";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export default function MainPoster() {
  const { mode } = useMode();
  return (
    <div
      className={cn(
        "w-full h-full max-w-sm flex items-end pb-10 justify-center transition-all duration-300",
        mode === "band" ? "band-poster" : "vocal-poster"
      )}
    >
      <ToggleSwitch />
    </div>
  );
}
