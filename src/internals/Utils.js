/*
world | 3f7dbb2b-9d3b-4373-a571-50928068bd32
world_nether | 95040cf6-c591-4791-9e12-0818933654ed
world_the_end | 3fa11ea0-196d-4539-9121-cf92e61ebc1a
world_zydims_aether | eb9185e0-1485-4e21-b4c2-63085408f81f
*/

const CommunityIdMap = {
  1: "the lounge",
  2: "3 AM",
  3: "3DS Rock Rock Mountain",
  4: "blaster's circle",
  5: "The ultimate Yakuza fan club",
  6: "vold group",
  99: "Friend of Friend",
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
  "3f7dbb2b-9d3b-4373-a571-50928068bd32": "The Overworld",
  "eb9185e0-1485-4e21-b4c2-63085408f81f": "The Aether",
  "95040cf6-c591-4791-9e12-0818933654ed": "The Nether",
  "3fa11ea0-196d-4539-9121-cf92e61ebc1a": "The End",
};

const DimensionInternalNameMap = {
  "3f7dbb2b-9d3b-4373-a571-50928068bd32": "world",
  "eb9185e0-1485-4e21-b4c2-63085408f81f": "world_zydims_aether",
  "95040cf6-c591-4791-9e12-0818933654ed": "nether",
  "3fa11ea0-196d-4539-9121-cf92e61ebc1a": "end",
};

const DimensionColorMap = {
  "3f7dbb2b-9d3b-4373-a571-50928068bd32": "#41BC49",
  "eb9185e0-1485-4e21-b4c2-63085408f81f": "#6CBAE8",
  "95040cf6-c591-4791-9e12-0818933654ed": "#B81E1E",
  "3fa11ea0-196d-4539-9121-cf92e61ebc1a": "#C9B979",
};

const mapUrlBase = "https://map.lounge.haus/";

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
