# ASCII Banjo Practice Tool

A simple tool to help practice banjo roll patterns using ASCII tablature.

## Features

- Visual tablature with scrolling notes
- Multiple roll patterns: Forward, Backward, Reverse, and Foggy Mountain
- Adjustable tempo from 30-160 BPM
- Visual indicators for when to play notes
- Pause/play functionality

## How to Use

1. Select a roll pattern using the buttons at the top
2. Adjust the tempo to your comfort level
3. Watch the tablature scroll from right to left
4. Play the notes when they reach the red vertical line
5. Use the play/pause button to stop or continue practice

## Banjo Roll Patterns

The tool includes the following standard banjo roll patterns:

- **Forward Roll**: Thumb-index-middle (3-2-1) pattern, essential for Scruggs-style playing
- **Backward Roll**: Middle-index-thumb (1-2-3) pattern, used for descending melody lines
- **Reverse Roll**: Middle-thumb-index (1-3-2) pattern, creates a distinctive rhythmic feel
- **Foggy Mountain Roll**: A classic bluegrass pattern used in "Foggy Mountain Breakdown"

## Tablature Guide

Banjo tablature is read like this:

```
|1|----0----0--0-----  (1st string - highest pitch)
|2|0----0--0----0---0-  (2nd string)
|3|0---0-----0-----0--  (3rd string)
|4|----0-----0-----0--  (4th string)
|5|---0-------0-------  (5th string - lowest pitch)
```

- Each line represents a string on the banjo (5 strings total)
- The numbers (0, 1, 2, etc.) indicate which fret to play on that string
- "0" means play the open string
- "-" means do not play that string

## Development Notes

This tool was created using:
- React with Next.js
- CSS for styling
- JavaScript animations
- ASCII characters for visual representation

The tool is designed to be simple, lightweight, and focused on practice rather than complex features. 