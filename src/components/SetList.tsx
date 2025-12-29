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

      {setList.members.length > 0 ? (
        <ul className="flex flex-wrap items-center justify-center gap-2 px-4">
          {setList.members.map((member, i) => (
            <li key={i} className="uppercase font-bold text-lg">
              {member}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="flex flex-col items-center justify-center gap-2">
        {setList.songs.map((song, i) => (
          <li key={i}>{`${song.singer} - ${song.name}`}</li>
        ))}
      </ul>
    </div>
  );
}
