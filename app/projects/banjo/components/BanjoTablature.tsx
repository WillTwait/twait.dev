"use client";

import { useEffect, useRef, useState } from "react";

interface BanjoTablatureProps {
  roll: string;
  bpm: number;
  onNoteActive?: (isActive: boolean) => void;
  fullWidth?: boolean;
}

type TabNote = string;
type StringLine = TabNote[];

interface RollPattern {
  name: string;
  pattern: number[];
}

// Define the roll patterns
const rollPatterns: Record<string, RollPattern> = {
  forward: {
    name: "Forward Roll",
    pattern: [4, 5, 1, 4, 5, 1, 4, 5], // Thumb, index, middle pattern
  },
  reverse: {
    name: "Backward Roll",
    pattern: [5, 4, 1, 5, 4, 1, 5, 4], // Middle, index, thumb pattern
  },
  fwdReverse: {
    name: "Forward Reverse Roll",
    pattern: [3, 4, 5, 1, 5, 4, 3, 5], // Classic bluegrass pattern
  },
  alternating: {
    name: "Alternating",
    pattern: [3, 4, 1, 5, 2, 4, 1, 5], // Classic bluegrass pattern
  },
};

// Convert a roll pattern to actual tablature
const createTabFromRoll = (roll: string): string[][] => {
  const pattern = rollPatterns[roll]?.pattern || rollPatterns.forward.pattern;
  const tab: string[][] = [[], [], [], [], []]; // 5 strings
  const notesPerMeasure = pattern.length;
  const spacesPerNote = 4; // 4 spaces between each note for quarter note representation
  const totalPositions = notesPerMeasure * (spacesPerNote + 1); // +1 for the note itself

  // Fill the tablature with 2 measures worth of notes and spaces
  // No initial empty beat - continuous pattern only
  for (let measure = 0; measure < 2; measure++) {
    for (let notePosition = 0; notePosition < notesPerMeasure; notePosition++) {
      // Convert pattern value to array index (1-based to 0-based)
      // BUT REVERSE it so string 5 is at index 0 and string 1 is at index 4
      const stringIndex = 5 - pattern[notePosition];

      const position =
        measure * totalPositions + notePosition * (spacesPerNote + 1);

      // Place the note
      for (let j = 0; j < 5; j++) {
        tab[j][position] = j === stringIndex ? "0" : "-";
      }

      // Add spaces after the note
      for (let space = 1; space <= spacesPerNote; space++) {
        for (let j = 0; j < 5; j++) {
          tab[j][position + space] = "-";
        }
      }
    }
  }

  return tab;
};

export default function BanjoTablature({
  roll,
  bpm,
  onNoteActive,
  fullWidth = false,
}: BanjoTablatureProps) {
  const [tabPosition, setTabPosition] = useState(0);
  const [hasActiveNote, setHasActiveNote] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const lastNoteRef = useRef<number>(-1);

  // Constants for spacing
  const spacesPerNote = 4; // 4 spaces between each note

  // Generate tab data
  const tabData = createTabFromRoll(roll);
  const currentPattern =
    rollPatterns[roll]?.pattern || rollPatterns.forward.pattern;

  // Position of active column (bold highlight)
  const playIndicatorPosition = 2;

  // Extend tab data to have more notes for scrolling - create a continuous loop
  const extendedTabData = tabData.map((stringLine) => [
    ...stringLine,
    ...stringLine,
    ...stringLine,
    ...stringLine,
  ]);

  // Calculate visible portion of tab
  const notesPerMeasure = currentPattern.length;
  const totalPositionsPerMeasure = notesPerMeasure * (spacesPerNote + 1);
  const visibleWidth = fullWidth ? 200 : 100;

  // Check if there's a note at the play position and notify parent
  useEffect(() => {
    // Only proceed if onNoteActive callback is provided
    if (!onNoteActive) return;

    // Calculate if we're at a note position (every spacesPerNote+1 positions)
    const isAtNotePosition = tabPosition % (spacesPerNote + 1) === 0;

    if (isAtNotePosition) {
      // Notify parent of active note
      onNoteActive(true);

      // Reset after a short time
      const timer = setTimeout(() => {
        onNoteActive(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [tabPosition, onNoteActive]);

  // Effect for animation and tracking position
  useEffect(() => {
    // Reset position when bpm changes
    setTabPosition(0);
    lastTimeRef.current = 0;
    lastNoteRef.current = -1;

    if (bpm <= 0) {
      // Paused state
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;

      const elapsed = timestamp - lastTimeRef.current;
      const currentMsPerBeat = 60000 / bpm;

      // Instead of moving one position at a time, move by a full beat
      // which is spacesPerNote + 1 positions (4 dashes + 1 note)
      if (elapsed > currentMsPerBeat) {
        // Move forward by exactly one beat (spacesPerNote + 1 positions)
        setTabPosition((prev) => (prev + spacesPerNote + 1) % 1024);
        lastTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [bpm]); // roll is not needed here, we reset position in a separate effect when roll changes

  // Reset position when roll changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTabPosition(0);
    lastTimeRef.current = 0;
    lastNoteRef.current = -1;
  }, [roll]);

  // Find a proper tab position to ensure a note appears at position 2
  const cycleLength = totalPositionsPerMeasure * 2; // Length of the complete pattern (2 measures)
  const scrollPosition = tabPosition % cycleLength; // Position within the cycle
  const noteOffset = playIndicatorPosition % (spacesPerNote + 1); // Offset to align notes with position 2
  const adjustedTabPosition = scrollPosition - noteOffset;

  return (
    <div className="overflow-hidden w-full">
      <div className="font-mono whitespace-pre text-sm leading-tight w-full">
        <div className="relative w-full">
          {/* Render each string of the tablature */}
          {extendedTabData.map((stringLine, stringIndex) => (
            <div
              key={`string-${stringIndex.toString()}`}
              className="flex w-full"
            >
              <div className="w-6 pr-1 flex-shrink-0">|{5 - stringIndex}|</div>
              <div
                className="flex-grow overflow-hidden"
                style={{ width: "calc(100% - 1.5rem)" }}
              >
                {Array.from({ length: visibleWidth }).map((_, index) => {
                  // Use positive modulo to ensure we don't get negative indices
                  const noteIndex =
                    (((adjustedTabPosition + index) % stringLine.length) +
                      stringLine.length) %
                    stringLine.length;
                  const char = stringLine[noteIndex];
                  const uniqueId = `tab-${stringIndex}-pos-${noteIndex}-idx-${adjustedTabPosition}-${char}`;

                  // Highlight column at position 2
                  const isActiveColumn = index === playIndicatorPosition;

                  return (
                    <span
                      key={uniqueId}
                      className={isActiveColumn ? "font-bold text-lg" : ""}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
