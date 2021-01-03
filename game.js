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
            debug: true
        }
    }
};
let game = new Phaser.Game(config);
let player, cursors, platforms;
gameScene.preload = function preload() {
    this.load.spritesheet("player", ".//assets//sprite//char.png", { frameWidth: 40, frameHeight: 45, });
    this.load.image("platform", ".//assets//sprite//platform.png");
}
gameScene.create = function create() {
    // scoreText = this.add.text(300, 200, "Hello Phaser", { fontSize: '32px', fill: "white" });
    player = this.physics.add.sprite(250, 200, 'player');
    player.setFrame(4);
    platforms = this.physics.add.staticGroup();
    platforms.create(50, 580, 'platform').setScale(2, 0.7).refreshBody();
    platforms.create(215, 110, 'platform').setScale(0.2, 0.3).refreshBody();
    platforms.create(555, 200, 'platform').setScale(0.2, 0.3).refreshBody();
    platforms.create(260, 350, 'platform').setScale(0.2, 0.3).refreshBody();
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
    this.anims.create({
        key: 'rJump',
        frames: [{ key: 'player', frame: 1 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'lJump',
        frames: [{ key: 'player', frame: 19 }],
        frameRate: 20
    });
    // player.anims.play("left");
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);
    cursors = this.input.keyboard.createCursorKeys();
}
gameScene.update = function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-120);
        // ke liye collider add kar na padta hai
        if (player.body.touching.down) {
            player.anims.play("left", true);
        } else {
            player.anims.play("lJump", true);
        }
    } else if (cursors.right.isDown) {
        player.setVelocityX(120);
        if (player.body.touching.down) {
            player.anims.play("right", true);
        } else {
            player.anims.play("RJump", true);

        }
    } else {
        player.setVelocityX(0);
        player.anims.play("idle", true);
    }
    if (cursors.space.isDown) {
        player.setVelocityY(-300);

    }
}
