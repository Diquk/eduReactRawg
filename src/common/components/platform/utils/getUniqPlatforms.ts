import { GamePlatform } from "interfaceses";

export const getUniqPlatforms = (gamePlatforms?: GamePlatform[] | null): string[] | [] => {
  let uniqPlatforms: Set<string> = new Set();
  gamePlatforms?.forEach(item => { 
    let platformName = item.platform.name.split(" ")[0];
    if (!uniqPlatforms.has(platformName)) {
      uniqPlatforms.add(platformName);
    }
  });

  return Array.from(uniqPlatforms);
}