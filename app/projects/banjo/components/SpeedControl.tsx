import type { Dispatch, SetStateAction } from "react";

interface SpeedButtonProps {
  amount: number;
  adjustSpeed: (amount: number) => void;
}

function SpeedButton({ amount, adjustSpeed }: SpeedButtonProps) {
  const label = amount > 0 ? `+${amount}` : `${amount}`;

  return (
    <button
      type="button"
      className="bg-transparent cursor-pointer hover:font-bold border-b border-black"
      onClick={() => adjustSpeed(amount)}
      onKeyDown={(e) => e.key === "Enter" && adjustSpeed(amount)}
    >
      {label}
    </button>
  );
}

interface SpeedControlProps {
  bpm: number;
  setBpm: Dispatch<SetStateAction<number>>;
}

export default function SpeedControl({ bpm, setBpm }: SpeedControlProps) {
  const adjustSpeed = (amount: number) => {
    setBpm((prevBpm) => {
      const newBpm = prevBpm + amount;
      return Math.min(Math.max(newBpm, 1), 600); // Clamp between 1-600 BPM
    });
  };

  return (
    <div className="font-mono">
      <div className="space-y-2">
        <div>
          {"["}
          <SpeedButton amount={-1} adjustSpeed={adjustSpeed} />
          <span>&nbsp;&nbsp;</span>
          <SpeedButton amount={1} adjustSpeed={adjustSpeed} />
          {"]"}
        </div>

        <div>
          {"["}
          <SpeedButton amount={-5} adjustSpeed={adjustSpeed} />
          <span>&nbsp;&nbsp;</span>
          <SpeedButton amount={5} adjustSpeed={adjustSpeed} />
          {"]"}
        </div>

        <div>
          {"["}
          <SpeedButton amount={-10} adjustSpeed={adjustSpeed} />
          <span>&nbsp;&nbsp;</span>
          <SpeedButton amount={10} adjustSpeed={adjustSpeed} />
          {"]"}
        </div>
      </div>
    </div>
  );
}
