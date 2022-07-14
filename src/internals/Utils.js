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

const worldUUIDs = {
  overworld: "11e52781-9149-4b29-accb-6acfb3d9f071",
  nether: "884d7c09-52e1-42a4-8a2a-7a21dfc49bc8",
  end: "ed0d5979-be3b-4ba6-a9b3-b3126e306ff1",
  aether: "6fdffaa4-66c9-40ca-ae14-489711eee5e3",
};

const DimensionNameMap = {
  [worldUUIDs.overworld]: "The Overworld",
  [worldUUIDs.nether]: "The Nether",
  [worldUUIDs.end]: "The End",
  [worldUUIDs.aether]: "The Aether",
};

const DimensionInternalNameMap = {
  [worldUUIDs.overworld]: "world",
  [worldUUIDs.nether]: "nether",
  [worldUUIDs.end]: "end",
  [worldUUIDs.aether]: "aether",
};

const DimensionColorMap = {
  [worldUUIDs.overworld]: "#41BC49",
  [worldUUIDs.nether]: "#B81E1E",
  [worldUUIDs.end]: "#C9B979",
  [worldUUIDs.aether]: "#6CBAE8",
};

const mapUrlBase = "https://map.lounge.haus";

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

export {
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
