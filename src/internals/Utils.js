/*
world                            7b1803e0-1cfa-443d-9948-ebaebd2b73e7
world_nether                     84eecff0-14f8-420f-bb5b-b1c65bf966af
world_the_end                    5ed9a5e9-1093-46a3-9727-8159c353c128
world_zydims_aether              e500537f-d92d-4ace-9021-6fc5a39cb977
world_zydims_the_deep_dark       aa56d4ca-102f-4da0-9211-336f6e795edf
aether                           80550102-945a-4a9f-8e71-10c4a259a591
the_deep_dark                    66981552-9dc5-430b-a46b-ed748d9384d1
*/

const CommunityIdMap = {
  1: "the lounge",
  2: "3 AM",
  3: "MK7 Rock Rock Mountain",
  4: "blaster's circle",
  5: "The ultimate Yakuza fan club",
  6: "vold group",
  99: "???",
};

const CommunityColorMap = {
  1: "#ff3e3e",
  2: "#00a3a3",
  3: "#0094ff",
  4: "#7c00ff",
  5: "#bfc125",
  6: "#d8b01a",
  99: "#919191",
};

const DimensionNameMap = {
  "7b1803e0-1cfa-443d-9948-ebaebd2b73e7": "The Overworld",
  "80550102-945a-4a9f-8e71-10c4a259a591": "The Aether",
  "84eecff0-14f8-420f-bb5b-b1c65bf966af": "The Nether",
  "5ed9a5e9-1093-46a3-9727-8159c353c128": "The End",
};

const DimensionInternalNameMap = {
  "7b1803e0-1cfa-443d-9948-ebaebd2b73e7": "world",
  "80550102-945a-4a9f-8e71-10c4a259a591": "aether",
  "84eecff0-14f8-420f-bb5b-b1c65bf966af": "nether",
  "5ed9a5e9-1093-46a3-9727-8159c353c128": "end",
};

const DimensionColorMap = {
  "7b1803e0-1cfa-443d-9948-ebaebd2b73e7": "#41BC49",
  "80550102-945a-4a9f-8e71-10c4a259a591": "#6CBAE8",
  "84eecff0-14f8-420f-bb5b-b1c65bf966af": "#B81E1E",
  "5ed9a5e9-1093-46a3-9727-8159c353c128": "#C9B979",
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
