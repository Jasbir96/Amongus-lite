let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x444444,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
let game = new Phaser.Game(config);
let scoreText, player;
function preload() {
    this.load.spritesheet("player", ".//assets//sprite//char.png", { frameWidth: 40, frameHeight: 45, });
}
function create() {
    scoreText = this.add.text(300, 200, "Hello Phaser", { fontSize: '32px', fill: "white" });
    player = this.add.sprite(250, 200, 'player');
    player.setFrame(4);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 10, end: 19 }),
        frameRate: 20,
        repeat: -1
    })
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 9 }),
        frameRate: 20,
        repeat: -1
    })
    this.anims.create({
        key: 'idle',
        frames: [{ key: 'player', frame: 4 }],
        frameRate: 20
    });
    player.anims.play("left");
}
function update() {
    console.log("running update");
}