export interface RhombusTile {
  id: string;
  left: number;
  top: number;
  size: number;
  colorToken: "primary" | "accent" | "accentWarm";
  delay: number;
  drift: boolean;
  driftDuration: number;
}

const sizePattern = [58, 72, 64, 80, 66, 74];
const colorPattern: RhombusTile["colorToken"][] = [
  "primary",
  "accent",
  "primary",
  "accentWarm",
  "primary",
  "accent",
];

function buildField() {
  const tiles: RhombusTile[] = [];
  const rows = 7;
  const columns = 10;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const id = `tile-${row}-${column}`;
      const left = -10 + column * 12.2 + row * 4.8;
      const top = -8 + row * 14.4;
      const size = sizePattern[(row + column) % sizePattern.length];
      const colorToken = colorPattern[(row * 2 + column) % colorPattern.length];
      const delay = (row + column) * 0.055;
      const drift = (row === 1 && column === 7) || (row === 4 && column === 2);
      const driftDuration = 9 + ((row + column) % 4) * 1.8;

      tiles.push({
        id,
        left,
        top,
        size,
        colorToken,
        delay,
        drift,
        driftDuration,
      });
    }
  }

  return tiles;
}

export const rhombusField = buildField();

export const rhombusColors = {
  primary: "var(--color-primary)",
  accent: "var(--color-accent)",
  accentWarm: "var(--color-accent-warm)",
};
