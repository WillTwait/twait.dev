import type { Dispatch, SetStateAction } from "react";

interface RollSelectorProps {
  currentRoll: string;
  setCurrentRoll: Dispatch<SetStateAction<string>>;
}

const rolls = [
  {
    id: "forward",
    name: "Forward",
  },
  {
    id: "backward",
    name: "Backward",
  },
  {
    id: "reverse",
    name: "Reverse",
  },
  {
    id: "foggy",
    name: "Foggy Mountain",
  },
];

export default function RollSelector({
  currentRoll,
  setCurrentRoll,
}: RollSelectorProps) {
  return (
    <div className="space-y-2">
      {rolls.map((roll) => (
        <div key={roll.id}>
          <button
            onClick={() => setCurrentRoll(roll.id)}
            className="bg-transparent border-0 font-mono cursor-pointer text-left hover:font-bold"
            aria-pressed={currentRoll === roll.id}
            type="button"
          >
            {currentRoll === roll.id ? (
              <span className="font-bold">[{roll.name}]</span>
            ) : (
              <span className="border-b border-black">{roll.name}</span>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
