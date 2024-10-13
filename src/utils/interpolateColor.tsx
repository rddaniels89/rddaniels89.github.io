/**
 * Interpolates between two hex color values.
 * @param {string} color1 - Hex code of the first color (e.g., '#ffffff').
 * @param {string} color2 - Hex code of the second color (e.g., '#000000').
 * @param {number} factor - A number between 0 and 1 representing the interpolation factor (0 = color1, 1 = color2).
 * @returns {string} Interpolated hex color.
 */

export const interpolateColor = (color1: string, color2: string, factor: number) => {
    const hex = (x: number) => x.toString(16).padStart(2, '0');
  
    // Parse the hex colors into RGB components
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);
  
    const r1 = (c1 >> 16) & 0xff;
    const g1 = (c1 >> 8) & 0xff;
    const b1 = c1 & 0xff;
  
    const r2 = (c2 >> 16) & 0xff;
    const g2 = (c2 >> 8) & 0xff;
    const b2 = c2 & 0xff;
  
    // Interpolate between the two colors' RGB components
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
  
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  };
  

  type TransitionType = 'timeOfDay' | 'season';  
/**
 * Interpolates between two CSS variable sets based on the type (timeOfDay or season).
 * @param {TransitionType} type - 'timeOfDay' or 'season'
 * @param {string} current - The current state (e.g., 'day', 'night', 'winter', etc.).
 * @param {string} next - The next state (e.g., 'night', 'spring', etc.).
 * @param {number} sliderValue - A number between 0 and 1 representing interpolation.
 */
export const interpolateCSSVariables = (type: TransitionType, current: string, next: string, sliderValue: number) => {
    const rootStyles = getComputedStyle(document.documentElement);
  
    // Define prefixes for current and next
    const currentPrefix = `--${current}`;
    const nextPrefix = `--${next}`;
  
    // List of properties to interpolate
    const properties = [
      'background-color',
      'primary-color',
      'accent-color',
      'border-color',
      'hover-color',
      'shadow-color',
      'highlight-color' 
    ];
  
    // Interpolate and apply each property

  };