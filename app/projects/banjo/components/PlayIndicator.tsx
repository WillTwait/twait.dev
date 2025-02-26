import { useEffect, useState } from "react";

interface PlayIndicatorProps {
  bpm: number;
  isActive: boolean;
}

export default function PlayIndicator({ bpm, isActive }: PlayIndicatorProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsHighlighted(false);
      return;
    }

    // Flash the indicator briefly
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 100); // Flash duration in ms

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <span
      className="inline-block size-3 mx-1"
      style={{
        backgroundColor: isHighlighted ? "#000" : "#fff",
        border: "1px solid #000",
        borderRadius: "50%",
      }}
    />
  );
}
