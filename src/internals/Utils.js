const CommunityIdMap = {
  1: "the lounge",
  2: "3 AM",
  3: "MK7 Rock Rock Mountain",
  4: "blaster's circle",
  5: "The ultimate Minecraft fan club",
  6: "vold group",
};

const CommunityColorMap = {
  1: "#ff3e3e",
  2: "#00a3a3",
  3: "#0094ff",
  4: "#7c00ff",
  5: "#bfc125",
  6: "#d8b01a",
};

const DimensionNameMap = {
  "7b1803e0-1cfa-443d-9948-ebaebd2b73e7": "The Overworld",
  "80550102-945a-4a9f-8e71-10c4a259a591": "The Aether",
  XXXXXXXXXXXXXXXXXXNETHER: "The Nether",
  XXXXXXXXXXXXXXXXXXEND: "The End",
};

const DimensionInternalNameMap = {
  "7b1803e0-1cfa-443d-9948-ebaebd2b73e7": "world",
  "80550102-945a-4a9f-8e71-10c4a259a591": "aether",
  XXXXXXXXXXXXXXXXXXNETHER: "nether",
  XXXXXXXXXXXXXXXXXXEND: "end",
};

const DimensionColorMap = {
  "7b1803e0-1cfa-443d-9948-ebaebd2b73e7": "#41BC49",
  "80550102-945a-4a9f-8e71-10c4a259a591": "#6CBAE8",
  XXXXXXXXXXXXXXXXXXNETHER: "#B81E1E",
  XXXXXXXXXXXXXXXXXXEND: "#C9B979",
};

// const mapUrlBase =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:8100"
//     : "https://mc.lounge.haus";
const mapUrlBase = "https://mc.lounge.haus";

const findChunkCenter = (cx, cz) => {
  const x = cx * 16 + 8;
  const z = cz * 16 + 8;
  return { x, y: 90, z };
};

const prettyPrintDateAndTime = (date) => {
  return date.toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  });
};
const prettyPrintDate = (date) => {
  return date.toLocaleDateString("en-US");
};

module.exports = {
  CommunityIdMap,
  CommunityColorMap,
  DimensionNameMap,
  DimensionColorMap,
  DimensionInternalNameMap,
  mapUrlBase,
  findChunkCenter,
  prettyPrintDateAndTime,
  prettyPrintDate,
};
