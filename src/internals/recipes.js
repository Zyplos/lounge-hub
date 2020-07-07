import waterBucket from "../assets/items/water_bucket.png";
import slimeBall from "../assets/items/slime_ball.png";
import wheat from "../assets/items/wheat.png";
import greenDye from "../assets/items/green_dye.png";
import rottenFlesh from "../assets/items/rotten_flesh.png";
import leather from "../assets/items/leather.png";
import cookedMutton from "../assets/items/cooked_mutton.png";
import stick from "../assets/items/stick.png";
import fireCharge from "../assets/items/fire_charge.png";
import soulTorch from "../assets/items/soul_torch.png";
import charcoal from "../assets/items/charcoal.png";
import anyDye from "../assets/items/dye.gif";
import redDye from "../assets/items/red_dye.png";
import paper from "../assets/items/paper.png";
import string from "../assets/items/string.png";
import ironIngot from "../assets/items/iron_ingot.png";
import redstone from "../assets/items/redstone.png";
import nameTag from "../assets/items/name_tag.png";
import apple from "../assets/items/apple.png";
import enchantedGoldenApple from "../assets/items/enchanted_golden_apple.gif";

import stonePickaxe from "../assets/items/stone_pickaxe.png";
import stoneAxe from "../assets/items/stone_axe.png";
import stoneShovel from "../assets/items/stone_shovel.png";
import stoneHoe from "../assets/items/stone_hoe.png";
import stoneSword from "../assets/items/stone_sword.png";
import blazeRod from "../assets/items/blaze_rod.png";
import brewingStand from "../assets/items/brewing_stand.png";
import bow from "../assets/items/bow.png";
import lever from "../assets/items/lever.png";

import stone from "../assets/items/stone.png";
import cobblestone from "../assets/items/cobblestone.png";
import andesite from "../assets/items/andesite.png";
import diorite from "../assets/items/diorite.png";
import granite from "../assets/items/granite.png";
import polishedAndesite from "../assets/items/polished_andesite.png";
import polishedDiorite from "../assets/items/polished_diorite.png";
import polishedGranite from "../assets/items/polished_granite.png";
import blackstone from "../assets/items/blackstone.png";

import blockOfGold from "../assets/items/block_of_gold.png";
import furnace from "../assets/items/furnace.png";
import piston from "../assets/items/piston.png";
import observer from "../assets/items/observer.png";
import dispenser from "../assets/items/dispenser.png";
import dropper from "../assets/items/dropper.png";

import glass from "../assets/items/glass.png";
import sand from "../assets/items/sand.png";
import sandstone from "../assets/items/sandstone.png";
import smoothSandstone from "../assets/items/smooth_sandstone.png";
import redSand from "../assets/items/red_sand.png";
import redSandstone from "../assets/items/red_sandstone.png";
import smoothRedSandstone from "../assets/items/smooth_red_sandstone.png";
import soulSoil from "../assets/items/soul_soil.png";
import soulSand from "../assets/items/soul_sand.png";
import anyBed from "../assets/items/bed.gif";
import anyConcretePowder from "../assets/items/concrete_powder.gif";
import anyGlazedTerracotta from "../assets/items/glazed_terracotta.gif";
import anyStainedGlass from "../assets/items/stained_glass.gif";
import anyStainedGlassPane from "../assets/items/stained_glass_pane.gif";
import anyWool from "../assets/items/wool.gif";

import oakLog from "../assets/items/oak_log.png";
import birchLog from "../assets/items/birch_log.png";
import spruceLog from "../assets/items/spruce_log.png";
import jungleLog from "../assets/items/jungle_log.png";
import acaciaLog from "../assets/items/acacia_log.png";
import darkOakLog from "../assets/items/dark_oak_log.png";
import crimsonStem from "../assets/items/crimson_stem.gif";
import warpedStem from "../assets/items/warped_stem.gif";

import oakPlanks from "../assets/items/oak_planks.png";

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
  {
    type: "blasting",
    input: ["Cobblestone", cobblestone],
    result: ["Stone", stone],
  },
  {
    type: "blasting",
    input: ["Sand", sand],
    result: ["Glass", glass],
  },
  {
    type: "crafting",
    input: [
      false,
      ["Fire Charge", fireCharge],
      false,

      false,
      ["Stick", stick],
      false,

      false,
      ["Soul Soil", soulSoil],
      false,
    ],
    result: ["Soul Torch", soulTorch, 4],
  },
  {
    type: "crafting",
    input: [
      false,
      ["Fire Charge", fireCharge],
      false,

      false,
      ["Stick", stick],
      false,

      false,
      ["Soul Sand", soulSand],
      false,
    ],
    result: ["Soul Torch", soulTorch, 4],
  },
  {
    type: "blasting",
    input: ["Jungle Log", jungleLog],
    result: ["Charcoal", charcoal],
  },
  {
    type: "crafting",
    input: [
      ["Any Bed", anyBed],
      ["Any Dye", anyDye],
      ["Any Dye", anyDye],

      ["Any Dye", anyDye],
      false,
      false,

      false,
      false,
      false,
    ],
    result: ["Any Bed", anyBed],
  },
  {
    type: "crafting",
    input: [
      ["Any Concrete Powder", anyConcretePowder],
      ["Any Concrete Powder", anyConcretePowder],
      ["Any Concrete Powder", anyConcretePowder],

      ["Any Concrete Powder", anyConcretePowder],
      ["Any Dye", anyDye],
      ["Any Concrete Powder", anyConcretePowder],

      ["Any Concrete Powder", anyConcretePowder],
      ["Any Concrete Powder", anyConcretePowder],
      ["Any Concrete Powder", anyConcretePowder],
    ],
    result: ["Any Concrete Powder", anyConcretePowder, 8],
  },
  {
    type: "crafting",
    input: [
      ["Any Glazed Terracotta", anyGlazedTerracotta],
      ["Any Glazed Terracotta", anyGlazedTerracotta],
      ["Any Glazed Terracotta", anyGlazedTerracotta],

      ["Any Glazed Terracotta", anyGlazedTerracotta],
      ["Any Dye", anyDye],
      ["Any Glazed Terracotta", anyGlazedTerracotta],

      ["Any Glazed Terracotta", anyGlazedTerracotta],
      ["Any Glazed Terracotta", anyGlazedTerracotta],
      ["Any Glazed Terracotta", anyGlazedTerracotta],
    ],
    result: ["Any Glazed Terracotta", anyGlazedTerracotta, 8],
  },
  {
    type: "crafting",
    input: [
      ["Any Stained Glass", anyStainedGlass],
      ["Any Stained Glass", anyStainedGlass],
      ["Any Stained Glass", anyStainedGlass],

      ["Any Stained Glass", anyStainedGlass],
      ["Any Dye", anyDye],
      ["Any Stained Glass", anyStainedGlass],

      ["Any Stained Glass", anyStainedGlass],
      ["Any Stained Glass", anyStainedGlass],
      ["Any Stained Glass", anyStainedGlass],
    ],
    result: ["Any Stained Glass", anyStainedGlass, 8],
  },
  {
    type: "crafting",
    input: [
      ["Any Stained Glass Pane", anyStainedGlassPane],
      ["Any Stained Glass Pane", anyStainedGlassPane],
      ["Any Stained Glass Pane", anyStainedGlassPane],

      ["Any Stained Glass Pane", anyStainedGlassPane],
      ["Any Dye", anyDye],
      ["Any Stained Glass Pane", anyStainedGlassPane],

      ["Any Stained Glass Pane", anyStainedGlassPane],
      ["Any Stained Glass Pane", anyStainedGlassPane],
      ["Any Stained Glass Pane", anyStainedGlassPane],
    ],
    result: ["Any Stained Glass Pane", anyStainedGlassPane, 8],
  },
  {
    type: "crafting",
    input: [
      ["Any Wool", anyWool],
      ["Any Dye", anyDye],
      false,

      false,
      false,
      false,

      false,
      false,
      false,
    ],
    result: ["Any Wool", anyWool],
  },
  {
    type: "crafting",
    input: [
      ["Sand", sand],
      ["Sand", sand],
      ["Sand", sand],

      ["Sand", sand],
      ["Sand", sand],
      ["Sand", sand],

      ["Sand", sand],
      ["Sand", sand],
      ["Red Dye", redDye],
    ],
    result: ["Red Sand", redSand, 8],
  },
  {
    type: "crafting",
    input: [
      ["Sandstone", sandstone],
      ["Sandstone", sandstone],
      ["Red Dye", redDye],

      false,
      false,
      false,

      false,
      false,
      false,
    ],
    result: ["Red Sandstone", redSandstone, 2],
  },
  {
    type: "crafting",
    input: [
      ["Smooth Sandstone", smoothSandstone],
      ["Smooth Sandstone", smoothSandstone],
      ["Red Dye", redDye],

      false,
      false,
      false,

      false,
      false,
      false,
    ],
    result: ["Smooth Red Sandstone", smoothRedSandstone, 2],
  },
  {
    type: "furnace",
    input: ["Any Concrete Powder", anyConcretePowder],
    result: ["Any Stained Glass", anyStainedGlass],
  },
  {
    type: "crafting",
    input: [
      false,
      ["Iron Ingot", ironIngot],
      ["String", string],

      false,
      ["Paper", paper],
      ["Iron Ingot", ironIngot],

      ["Paper", paper],
      false,
      false,
    ],
    result: ["Name Tag", nameTag],
  },
  {
    type: "crafting",
    input: [
      ["Block of Gold", blockOfGold],
      ["Block of Gold", blockOfGold],
      ["Block of Gold", blockOfGold],

      ["Block of Gold", blockOfGold],
      ["Apple", apple],
      ["Block of Gold", blockOfGold],

      ["Block of Gold", blockOfGold],
      ["Block of Gold", blockOfGold],
      ["Block of Gold", blockOfGold],
    ],
    result: ["Enchanted Golden Apple", enchantedGoldenApple],
  },
  {
    type: "crafting",
    input: [
      false,
      ["Blackstone", blackstone],
      false,

      false,
      ["Blackstone", blackstone],
      false,

      false,
      ["Stick", stick],
      false,
    ],
    result: ["Stone Sword", stoneSword],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],

      false,
      ["Stick", stick],
      false,

      false,
      ["Stick", stick],
      false,
    ],
    result: ["Stone Pickaxe", stonePickaxe],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      false,

      ["Blackstone", blackstone],
      ["Stick", stick],
      false,

      false,
      ["Stick", stick],
      false,
    ],
    result: ["Stone Axe", stoneAxe],
  },
  {
    type: "crafting",
    input: [
      false,
      ["Blackstone", blackstone],
      false,

      false,
      ["Stick", stick],
      false,

      false,
      ["Stick", stick],
      false,
    ],
    result: ["Stone Shovel", stoneShovel],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      false,

      false,
      ["Stick", stick],
      false,

      false,
      ["Stick", stick],
      false,
    ],
    result: ["Stone Hoe", stoneHoe],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      false,
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
    ],
    result: ["Furnace", furnace],
  },
  {
    type: "crafting",
    input: [
      ["Oak Planks", oakPlanks],
      ["Oak Planks", oakPlanks],
      ["Oak Planks", oakPlanks],

      ["Blackstone", blackstone],
      ["Iron Ingot", ironIngot],
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      ["Redstone", redstone],
      ["Blackstone", blackstone],
    ],
    result: ["Piston", piston],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],

      ["Redstone", redstone],
      ["Redstone", redstone],
      ["Iron Ingot", ironIngot],

      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
    ],
    result: ["Observer", observer],
  },
  {
    type: "crafting",
    input: [
      false,
      ["Blaze Rod", blazeRod],
      false,

      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],

      false,
      false,
      false,
    ],
    result: ["Brewing Stand", brewingStand],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      ["Bow", bow],
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      ["Redstone", redstone],
      ["Blackstone", blackstone],
    ],
    result: ["Dispenser", dispenser],
  },
  {
    type: "crafting",
    input: [
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      false,
      ["Blackstone", blackstone],

      ["Blackstone", blackstone],
      ["Redstone", redstone],
      ["Blackstone", blackstone],
    ],
    result: ["Dropper", dropper],
  },
  {
    type: "crafting",
    input: [
      false,
      false,
      false,

      false,
      ["Stick", stick],
      false,

      false,
      ["Blackstone", blackstone],
      false,
    ],
    result: ["Lever", lever],
  },
];
