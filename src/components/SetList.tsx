import { useMode } from "@/context/ModeContext";
import { cn } from "@/lib/utils";
import type { SetList as SetListType } from "@/types";

interface SetListProps {
  setList: SetListType;
}

export default function SetList({ setList }: SetListProps) {
  const { mode } = useMode();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 h-screen",
        mode === "band" ? "text-white" : "text-black"
      )}
    >
      <span className="font-semibold text-xl">{setList.bandName}</span>
      {setList.songs.map((song, i) => (
        <span key={i}>{`${song.singer} - ${song.name}`}</span>
      ))}
    </div>
  );
}
