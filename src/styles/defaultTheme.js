export default {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#ff3e3e",
    secondary: "#ffde00",
    muted: "#b9b9b9",
    darkGray: "#242424",
    darkGrayAccent: "#353535",
    discord: "#7289DA",
    twitch: "#9146ff",
    modes: {
      dark: {
        text: "#fff",
        background: "#0A0A0A",
        darkGray: "#000",
        muted: "#717171",
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
