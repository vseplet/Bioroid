import { createAnimations } from "./createAnimations";
import { preloadAssets } from "./preloadAssets";
import { initSceneSwitcher } from "./sceneSwitcher";
import {
  createCollisionLDtkTilemap,
  createLDtkilemap,
} from "./tilemapGenerator";

const scripts = {
  createAnimations,
  preloadAssets,
  createLDtkilemap,
  createCollisionLDtkTilemap,
  initSceneSwitcher,
};

export default scripts;
