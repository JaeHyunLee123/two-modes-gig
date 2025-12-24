import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ToggleSwitch() {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleToggle}
      className={cn(
        "w-46 h-14 p-1 rounded-full relative cursor-pointer select-none",
        "flex items-center justify-around", // To space out the text
        "transition-colors duration-300 ease-in-out",
        isClicked ? "bg-white/30" : "bg-black/30"
      )}
    >
      {/* Sliding Thumb */}
      <div
        className={cn(
          "size-12 rounded-full absolute top-0.75 left-1 transition-transform duration-300 ease-in-out opacity-100 bg-white z-10",
          isClicked ? "translate-x-31.5" : "translate-x-0"
        )}
      />

      {/* Text Labels */}

      <span
        className={cn(
          "text-lg font-bold z-10 transition-all duration-300 uppercase",
          isClicked
            ? "text-white -translate-x-6.5"
            : "text-black translate-x-6.5"
        )}
      >
        {isClicked ? "Band Mode" : "Vocal Mode"}
      </span>
    </div>
  );
}
