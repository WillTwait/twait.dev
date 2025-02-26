"use client";

import { useState } from "react";
import BanjoTablature from "./components/BanjoTablature";
import RollSelector from "./components/RollSelector";
import SpeedControl from "./components/SpeedControl";
import "./components/banjo.css";
import Frame from "app/components/frame";

export default function BanjoPage() {
  const [currentRoll, setCurrentRoll] = useState<string>("forward");
  const [bpm, setBpm] = useState<number>(55);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeNote, setActiveNote] = useState<boolean>(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNoteActive = (isActive: boolean) => {
    setActiveNote(isActive);
  };

  return (
    <div className="pt-6 flex flex-col items-center font-mono w-full max-w-full">
      <Frame title="Banjo Practice" className="w-full h-full">
        <div className="p-4 w-full">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Pattern Section - Column 1 */}
            <div>
              <h2 className="font-bold mb-2">Pattern</h2>
              <div>
                <RollSelector
                  currentRoll={currentRoll}
                  setCurrentRoll={setCurrentRoll}
                />
              </div>
            </div>

            {/* Tempo Section - Column 2 */}
            <div>
              <h2 className="font-bold mb-2">Tempo</h2>
              <div>
                <SpeedControl bpm={bpm} setBpm={setBpm} />
              </div>
            </div>

            {/* Controls Section - Column 3 */}
            <div>
              <div className="mb-4">
                <button
                  type="button"
                  onClick={togglePlayback}
                  onKeyDown={(e) => e.key === "Enter" && togglePlayback()}
                  className="bg-transparent border-0 font-mono cursor-pointer text-left hover:font-bold"
                >
                  {isPlaying ? (
                    <>
                      <span className="border-b border-black">Pause</span> /{" "}
                      <span className="font-bold">[Play]</span>
                    </>
                  ) : (
                    <>
                      <span className="font-bold">[Pause]</span> /{" "}
                      <span className="border-b border-black">Play</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mb-4">
                <span>
                  Roll:{" "}
                  {currentRoll.charAt(0).toUpperCase() + currentRoll.slice(1)}
                </span>
              </div>

              <div className="mb-2">
                <div className="mb-2">
                  <span>Speed: {bpm} BPM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tablature Section - Full Width */}
          <div className="p-2 w-full">
            <BanjoTablature
              roll={currentRoll}
              bpm={isPlaying ? bpm : 0}
              onNoteActive={handleNoteActive}
              fullWidth={true}
            />
          </div>
        </div>
      </Frame>
    </div>
  );
}
