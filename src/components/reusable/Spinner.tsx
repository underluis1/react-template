import React from 'react';

export interface SpinnerProps {
  /** colore dello spinner (qualsiasi formato CSS valido) */
  color?: string;
  /** dimensione in pixel (width e height) */
  size?: number;
  /** durata dell’animazione, in secondi */
  duration?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({
  color = '#3498db',
  size = 40,
  duration = 1,
}) => {
  // spessore del bordo pari a 1/8 della size
  const thickness = size / 8;
  // colore semitrasparente per il bordo “di sfondo”
  const backgroundColor = hexToRgba(color, 0.3);

  return (
    <div
      className="rounded-full animate-spin"
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderStyle: 'solid',
        borderColor: backgroundColor,
        borderTopColor: color,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

// Utility per trasformare esadecimale → rgba()
function hexToRgba(hex: string, alpha: number) {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

export default Spinner;
