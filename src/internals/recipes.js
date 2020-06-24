import waterBucket from "../assets/items/water_bucket.png";
import slimeBall from "../assets/items/slime_ball.png";
import wheat from "../assets/items/wheat.png";
import greenDye from "../assets/items/green_dye.png";
import rottenFlesh from "../assets/items/rotten_flesh.png";
import leather from "../assets/items/leather.png";
import cookedMutton from "../assets/items/cooked_mutton.png";

import cobblestone from "../assets/items/cobblestone.png";
import andesite from "../assets/items/andesite.png";
import diorite from "../assets/items/diorite.png";
import granite from "../assets/items/granite.png";
import polishedAndesite from "../assets/items/polished_andesite.png";
import polishedDiorite from "../assets/items/polished_diorite.png";
import polishedGranite from "../assets/items/polished_granite.png";

import oakLog from "../assets/items/oak_log.png";
import birchLog from "../assets/items/birch_log.png";
import spruceLog from "../assets/items/spruce_log.png";
import jungleLog from "../assets/items/jungle_log.png";
import acaciaLog from "../assets/items/acacia_log.png";
import darkOakLog from "../assets/items/dark_oak_log.png";
import crimsonStem from "../assets/items/crimson_stem.gif";
import warpedStem from "../assets/items/warped_stem.gif";

import strippedOakLog from "../assets/items/stripped_oak_log.png";
import strippedBirchLog from "../assets/items/stripped_birch_log.png";
import strippedSpruceLog from "../assets/items/stripped_spruce_log.png";
import strippedJungleLog from "../assets/items/stripped_jungle_log.png";
import strippedAcaciaLog from "../assets/items/stripped_acacia_log.png";
import strippedDarkOakLog from "../assets/items/stripped_dark_oak_log.png";
import strippedCrimsonStem from "../assets/items/stripped_crimson_stem.png";
import strippedWarpedStem from "../assets/items/stripped_warped_stem.png";

export default [
  {
    type: "crafting",
    input: [
      ["Water Bucket", waterBucket],
      ["Green Dye", greenDye],
      false,

      ["Wheat", wheat],
      false,
      false,

      false,
      false,
      false,
    ],
    result: ["Slime Ball", slimeBall],
  },
  {
    type: "stonecutter",
    input: ["Andesite", andesite],
    result: ["Cobblestone", cobblestone],
  },
  {
    type: "stonecutter",
    input: ["Diorite", diorite],
    result: ["Cobblestone", cobblestone],
  },
  {
    type: "stonecutter",
    input: ["Granite", granite],
    result: ["Cobblestone", cobblestone],
  },
  {
    type: "stonecutter",
    input: ["Polished Andesite", polishedAndesite],
    result: ["Andesite", andesite],
  },
  {
    type: "stonecutter",
    input: ["Polished Diorite", polishedDiorite],
    result: ["Diorite", diorite],
  },
  {
    type: "stonecutter",
    input: ["Polished Granite", polishedGranite],
    result: ["Granite", granite],
  },
  {
    type: "smoker",
    input: ["Rotten Flesh", rottenFlesh],
    result: ["Cooked Mutton", cookedMutton],
  },
  {
    type: "furnace",
    input: ["Rotten Flesh", rottenFlesh],
    result: ["Leather", leather],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Dark Oak Log", strippedDarkOakLog],
      ["Dark Oak Log", darkOakLog],
      false,

      ["Dark Oak Log", darkOakLog],
      ["Stripped Dark Oak Log", strippedDarkOakLog],
      false,

      false,
      false,
      false,
    ],
    result: ["Dark Oak Log", darkOakLog, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Birch Log", strippedBirchLog],
      ["Birch Log", birchLog],
      false,

      ["Birch Log", birchLog],
      ["Stripped Birch Log", strippedBirchLog],
      false,

      false,
      false,
      false,
    ],
    result: ["Birch Log", birchLog, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Acacia Log", strippedAcaciaLog],
      ["Acacia Log", acaciaLog],
      false,

      ["Acacia Log", acaciaLog],
      ["Stripped Acacia Log", strippedAcaciaLog],
      false,

      false,
      false,
      false,
    ],
    result: ["Acacia Log", acaciaLog, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Spruce Log", strippedSpruceLog],
      ["Spruce Log", spruceLog],
      false,

      ["Spruce Log", spruceLog],
      ["Stripped Spruce Log", strippedSpruceLog],
      false,

      false,
      false,
      false,
    ],
    result: ["Spruce Log", spruceLog, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Oak Log", strippedOakLog],
      ["Oak Log", oakLog],
      false,

      ["Oak Log", oakLog],
      ["Stripped Oak Log", strippedOakLog],
      false,

      false,
      false,
      false,
    ],
    result: ["Oak Log", oakLog, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Jungle Log", strippedJungleLog],
      ["Jungle Log", jungleLog],
      false,

      ["Jungle Log", jungleLog],
      ["Stripped Jungle Log", strippedJungleLog],
      false,

      false,
      false,
      false,
    ],
    result: ["Jungle Log", jungleLog, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Warped Stem", strippedWarpedStem],
      ["Warped Stem", warpedStem],
      false,

      ["Warped Stem", warpedStem],
      ["Stripped Warped Stem", strippedWarpedStem],
      false,

      false,
      false,
      false,
    ],
    result: ["Warped Stem", warpedStem, 4],
  },
  {
    type: "crafting",
    input: [
      ["Stripped Crimson Stem", strippedCrimsonStem],
      ["Crimson Stem", crimsonStem],
      false,

      ["Crimson Stem", crimsonStem],
      ["Stripped Crimson Stem", strippedCrimsonStem],
      false,

      false,
      false,
      false,
    ],
    result: ["Crimson Stem", crimsonStem, 4],
  },
];
