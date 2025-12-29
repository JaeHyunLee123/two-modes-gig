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
        "flex flex-col items-center justify-center gap-5",
        mode === "band" ? "text-white" : "text-black"
      )}
    >
      <span className="text-4xl impact">{setList.bandName}</span>

      <ul className="flex flex-wrap items-center justify-center gap-2">
        {setList.members.map((member, i) => (
          <li key={i} className="uppercase font-bold">
            {member}
          </li>
        ))}
      </ul>

      <ul className="flex flex-col items-center justify-center gap-2">
        {setList.songs.map((song, i) => (
          <li key={i}>{`${song.singer} - ${song.name}`}</li>
        ))}
      </ul>
    </div>
  );
}
