import { Platform } from "common/components/platform/platform";

export const getUniqPlatforms = (gamePlatforms, mod) => {
  let uniqPlatforms = new Set();
  return gamePlatforms?.map(item => { 
    let platformName = item.platform.name.split(" ")[0];
    if (!uniqPlatforms.has(platformName)) {
      uniqPlatforms.add(platformName);
      return <Platform platform={platformName}  
        key={platformName} mod={mod || null}/>;
    }
  }) ?? [];
}