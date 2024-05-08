export function createAnimations(scene: Phaser.Scene) {
  {
    const [defaultAnim] = scene.anims.createFromAseprite("title");
    defaultAnim.repeat = -1;
    defaultAnim.repeatDelay = 1000;
  }

  {
    const [defaultAnim] = scene.anims.createFromAseprite("hero");
    defaultAnim.msPerFrame = 1;
    defaultAnim.frameRate = 15;
  }

  {
    const [defaultAnim] = scene.anims.createFromAseprite("dino");
    defaultAnim.repeat = -1;
  }

  {
    const [run, angry] = scene.anims.createFromAseprite("chicken");
    run.repeat = -1;
    angry.repeat = -1;
  }

  {
    const [defaultAnim] = scene.anims.createFromAseprite("dino-rider");
    defaultAnim.repeat = -1;
  }

  {
    const [defaultAnim] = scene.anims.createFromAseprite("egg");
    defaultAnim.repeat = -1;
  }

  {
    const [green, red] = scene.anims.createFromAseprite("dino-king");
    green.repeat = -1;
    red.repeat = -1;
  }

  {
    const [a, b, c, d, e, f] = scene.anims.createFromAseprite("slime");
    a.repeat = -1;
    b.repeat = -1;
    c.repeat = -1;
    d.repeat = -1;
    e.repeat = -1;
    f.repeat = -1;
  }
}
