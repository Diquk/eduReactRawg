export const getUniqPlatforms = (gamePlatforms) => {
  let uniqPlatforms = new Set();
  gamePlatforms?.forEach(item => { 
    let platformName = item.platform.name.split(" ")[0];
    if (!uniqPlatforms.has(platformName)) {
      uniqPlatforms.add(platformName);
    }
  });

  return Array.from(uniqPlatforms);
}