export interface ThemeProperties {
    backgroundColor: string;
    primaryColor: string;
    accentColor: string;
    borderColor: string;
    hoverColor: string;
    shadowColor: string;
    highlightColor: string;
  }
  
  export interface SeasonalTheme {
    day: ThemeProperties;
    night: ThemeProperties;
  }
  
  export const themes: Record<string, SeasonalTheme> = {
    autumn: {
      day: {
        backgroundColor: "#fff3e0",
        primaryColor: "#d84315",
        accentColor: "#ffab91",
        borderColor: "#ff8a65",
        hoverColor: "#ff7043",
        shadowColor: "rgba(255, 112, 67, 0.5)",
        highlightColor: "#ff7043"
      },
      night: {
          backgroundColor: "#3e2723",
          primaryColor: "#ffccbc",
          accentColor: "#ff8a50",
          borderColor: "#bf360c",
          hoverColor: "#ff7043",
          shadowColor: "rgba(255, 112, 67, 0.5)",
          highlightColor: "#ff7043"
      }
    },
    winter: {
      day: {
          backgroundColor: "#e0f7fa",
          primaryColor: "#212121",
          accentColor: "#80deea",
          borderColor: "#b3e5fc",
          hoverColor: "#00acc1",
          shadowColor: "rgba(0, 188, 212, 0.5)",
          highlightColor: "#00acc1"
      },
      night: {
          backgroundColor: "#37474f",
          primaryColor: "#e0f2f1",
          accentColor: "#80deea",
          borderColor: "#607d8b",
          hoverColor: "#4fc3f7",
          shadowColor: "rgba(38, 166, 154, 0.5)",
          highlightColor: "#4fc3f7"
      }
    },
    spring: {
        day: {
            backgroundColor: "#dff0d8", /* Lighter pastel green */
            primaryColor: "#3e4b33", /* Darker forest green text */
            accentColor: "#a8e986", /* Bright pastel green/yellow for accents */
            borderColor: "#b6d3a1", /* Subtle border color */
            hoverColor: "#7cb342", /* Hover state for buttons and links */
            shadowColor: "rgba(124, 179, 66, 0.3)",
            highlightColor: "#7cb342"
        },
        night: {
            backgroundColor: "#455a4f",
            primaryColor: "#e0f7e8",
            accentColor: "#81c784",
            borderColor: "#607d8b",
            hoverColor: "#4caf50",
            shadowColor: "rgba(56, 142, 60, 0.5)",
            highlightColor: "#81c784"
        }
      },
      summer: {
        day: {
            backgroundColor: "#ffe4b5",
            primaryColor: "#5d4037",
            accentColor: "#fcbf49",
            borderColor: "#fbc49c",
            hoverColor: "#ff7043",
            shadowColor: "rgba(255, 112, 67, 0.3)",
            highlightColor: "#ff7043"
        },
        night: {
            backgroundColor: "#5d4037",
            primaryColor: "#ffe5d5",
            accentColor: "#f48fb1",
            borderColor: "#d7ccc8",
            hoverColor: "#ff8a65",
            shadowColor: "rgba(244, 143, 177, 0.5)",
            highlightColor: "#ff8a65"
        }
      },
    // Define other seasons like spring and summer
  };
  