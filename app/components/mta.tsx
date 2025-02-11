"use client";

import { useState } from "react";

function TrainAnimation() {
  return (
    <div className="absolute bottom-0 right-0 animate-[train_3s_linear_forwards] pointer-events-none">
      <span className="text-3xl">🚈</span>
    </div>
  );
}

export function SubwayStop({ name }: { name: string }) {
  const [showTrain, setShowTrain] = useState(false);

  const handleInteraction = () => {
    if (!showTrain) {
      setShowTrain(true);
      setTimeout(() => setShowTrain(false), 3000);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleInteraction}
        className="bg-[#1F1F1F] text-white p-1 inline-flex items-center rounded-sm gap-1 text-xs md:text-sm tracking-normal cursor-pointer"
      >
        <span className="inline-flex size-4 p-3 bg-[#8B8E97] text-white rounded-full font-extrabold items-center justify-center">
          L
        </span>
        <span className="font-bold border-t-2 decoration-white">{name}</span>
      </button>
      {showTrain && <TrainAnimation />}
    </>
  );
}
