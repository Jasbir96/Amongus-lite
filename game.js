let gameScene = new Phaser.Scene('Game');
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x444444,
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 350 },
            debug: false
        }
    }
};
let game = new Phaser.Game(config);
let scoreText, player, cursors;
gameScene.preload = function preload() {
    this.load.spritesheet("player", ".//assets//sprite//char.png", { frameWidth: 40, frameHeight: 45, });
}
gameScene.create = function create() {
    scoreText = this.add.text(300, 200, "Hello Phaser", { fontSize: '32px', fill: "white" });
    player = this.physics.add.sprite(250, 200, 'player');
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
    // player.anims.play("left");
    player.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
    console.log(cursors);
}
gameScene.update = function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-120);
        player.anims.play("left", true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(120);
        player.anims.play("right", true);
    } else {
        player.setVelocityX(0);
        player.anims.play("idle", true);
    }
    if (cursors.space.isDown) {
        player.setVelocityY(-300);

    }
}
