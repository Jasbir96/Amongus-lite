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
let scoreText;
function preload() {
}
function create() {
    scoreText = this.add.text(300, 200, "Hello Phaser", { fontSize: '32px', fill: "white" });
}
function update() {
    console.log("running update");
}