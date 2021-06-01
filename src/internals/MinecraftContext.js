import React from "react";

const MinecraftContext = React.createContext({
  vanilla: null,
  modded: null,
});
MinecraftContext.displayName = "MinecraftContext";
export default MinecraftContext;
