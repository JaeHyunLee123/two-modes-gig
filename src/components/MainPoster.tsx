import ToggleSwitch from "@/components/ToggleSwitch";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export default function MainPoster() {
  const { mode } = useMode();
  return (
    <div
      className={cn(
        "w-full max-w-sm flex h-screen items-end justify-center p-20 transition-all duration-300",
        mode === "band" ? "band-poster" : "vocal-poster"
      )}
    >
      <ToggleSwitch />
    </div>
  );
}
