import resources from "@game/resources";

export function preloadAssets(scene: Phaser.Scene) {
  for (const key in resources.assets.sprites) {
    const name = resources.assets.sprites[key];
    scene.load.image(name, `assets/sprites/${name}/${name}.png`);
  }

  for (const key in resources.assets.spritesheets) {
    const name = resources.assets.spritesheets[key];
    scene.load.aseprite(
      name,
      `assets/spritesheets/${name}/${name}.png`,
      `assets/spritesheets/${name}/${name}.json`,
    );
  }

  for (const key in resources.assets.tilemaps) {
    const name = resources.assets.tilemaps[key];
    scene.load.json({
      key: name,
      url: `assets/tilemaps/${name}.ldtk`,
    });
  }

  for (const key in resources.assets.tilesets) {
    const name = resources.assets.tilesets[key];
    scene.load.image(name, `assets/tilesets/${name}/${name}.png`);
  }
}
