// utils/interpolateTheme.tsx

import { ThemeProperties, themes } from "../data/styles.data";

// Helper function to interpolate between two colors (in HEX format)
const interpolateColor = (color1: string, color2: string, factor: number): string => {
    // Function logic to blend colors based on the factor, e.g., using chroma-js or custom code
    // Convert the colors to RGB, interpolate, and convert back to hex.
    // Simplified example:
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);
    
    const r1 = (c1 >> 16) & 0xff;
    const g1 = (c1 >> 8) & 0xff;
    const b1 = c1 & 0xff;
  
    const r2 = (c2 >> 16) & 0xff;
    const g2 = (c2 >> 8) & 0xff;
    const b2 = c2 & 0xff;
  
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
  
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  
  // Main interpolation function

  export const interpolateTimeOfDay = (
    season: string,
    factor: number
  ): ThemeProperties => {


    const { day, night } = themes[season];
  
    return {
      backgroundColor: interpolateColor(day.backgroundColor, night.backgroundColor, factor),
      primaryColor: interpolateColor(day.primaryColor, night.primaryColor, factor),
      accentColor: interpolateColor(day.accentColor, night.accentColor, factor),
      borderColor: interpolateColor(day.borderColor, night.borderColor, factor),
      hoverColor: interpolateColor(day.hoverColor, night.hoverColor, factor),
      shadowColor: interpolateColor(day.shadowColor, night.shadowColor, factor),
      highlightColor: interpolateColor(day.highlightColor, night.highlightColor, factor)
    };
  };
  