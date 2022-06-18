import { GamePlatform } from "common/models/interfaces";

export const getUniqPlatforms = (gamePlatforms?: GamePlatform[]): string[] | [] => {
  let uniqPlatforms: Set<string> = new Set();
  gamePlatforms?.forEach(item => { 
    let platformName = item.platform.name.split(" ")[0];
    if (!uniqPlatforms.has(platformName)) {
      uniqPlatforms.add(platformName);
    }
  });

  return Array.from(uniqPlatforms);
}