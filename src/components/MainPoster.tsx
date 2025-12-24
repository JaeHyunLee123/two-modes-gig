import ToggleSwitch from "@/components/ToggleSwitch";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";

export default function MainPoster() {
  const { mode } = useMode();
  return (
    <div
      className={cn(
        "w-full h-full max-w-sm flex flex-col items-center py-5 justify-center  transition-all duration-300",
        mode === "band" ? "band-poster" : "vocal-poster"
      )}
    >
      <div className="h-[33%]">
        <span
          className={cn(
            "font-semibold text-xl p-2 ",
            mode === "band"
              ? "text-white bg-white/30"
              : "text-black bg-black/30"
          )}
        >
          Scroll for Setlist!
        </span>
      </div>

      <div className="h-[33%]"></div>

      <div className="flex flex-col justify-end items-center h-[33%]">
        <ToggleSwitch />
      </div>
    </div>
  );
}
