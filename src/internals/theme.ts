import { get, Theme } from "theme-ui";

export const theme: Theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    // eslint-disable-next-line quotes
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  sizes: {
    container: "75%",
  },
  radii: {
    borderRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderEndEndRadius: 0,
    borderEndStartRadius: 0,
    borderStartEndRadius: 0,
    borderStartStartRadius: 0,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  alerts: {
    info: {
      color: "#fff",
      bg: "#fc6603",
    },
  },
  messages: {
    primary: {
      padding: 3,
      paddingLeft: (t) => get(t, "space.3") - get(t, "space.2"),
      borderLeftWidth: (t) => get(t, "space.2"),
      borderLeftStyle: "solid",
      borderLeftColor: "highlight",
      borderRadius: 4,
      bg: "cardBg",
      color: "text",
    },
  },
  colors: {
    text: "#000",
    background: "#fff",
    backgroundSecondary: "#171717",
    backgroundTertiary: "#737373",
    primary: "#ff3e3e",
    secondary: "#ffd300",
    accent: "#fff",
    highlight: "#ff4000",
    muted: "#808080",
    darkGray: "#242424",
    darkGrayAccent: "#353535",
    discord: "#5865F2",
    twitch: "#9146ff",
    cardBg: "#efefef",
    cardBgSecondary: "#c7c7c7",
    modes: {
      dark: {
        text: "#fff",
        background: "#383332",
        backgroundSecondary: "#212020",
        backgroundTertiary: "#332E30",
        darkGray: "#000",
        muted: "#8e8e8e",
        cardBg: "#4a403e",
        cardBgSecondary: "#332c2b",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    fullbox: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      fontSize: 7,
      fontFamily: "monospace",
    },
    displaysm: {
      // extends the text.heading styles
      variant: "text.heading",
      fontSize: [3, 6],
      fontWeight: "bold",
    },
    display: {
      // extends the text.heading styles
      variant: "text.heading",
      fontSize: [4, 8],
      fontWeight: "bold",
    },
    display2: {
      // extends the text.heading styles
      variant: "text.heading",
      fontSize: [4, 7],
      fontWeight: "bold",
    },
    monospace: {
      fontFamily: "monospace",
    },
    italic: {
      fontStyle: "italic",
    },
    bold: {
      fontWeight: "bolder",
    },
    muted: {
      color: "muted",
    },
  },
  images: {
    avatar: {
      width: 70,
      height: 70,
      borderRadius: "100%",
    },
  },
  buttons: {
    discord: {
      color: "white",
      bg: "discord",
    },
  },
  badges: {
    discord: {
      color: "white",
      bg: "discord",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};

// const makeTheme = <T extends Theme>(t: T) => t;
// const theme = makeTheme();

// export type CinnaTheme = typeof theme;
