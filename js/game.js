var stage;
function loadGame() {
    stage = new createjs.Stage("gameCanvas");
    createjs.Ticker.framerate = 10;
    createjs.Ticker.on("tick", updateStage);

    var guardians = [];
    guardians[0] = new createjs.Bitmap("images/red_guardian.png");
    guardians[1] = new createjs.Bitmap("images/green_guardian.png");
    guardians[2] = new createjs.Bitmap("images/purple_guardian.png");
    guardians[3] = new createjs.Bitmap("images/blue_guardian.png");

    stage.addChild(guardians[0]);
    guardians[0].x = 250;
    guardians[0].y = 1000;
    console.log(guardians[0]);
    // for (var i = 0; i < 4; i++) {
    //     stage.addChild(guardians[i]);
    //     if (i > 0) guardians[i].x = guardians[i-1] + 150;
    //     else guardians[i].x = 150;
    //     guardians[i].y = 1202;
    //     guardians[i].scaleX = guardians[i].scaleY = 1;
    // }
}

function updateStage() {
    stage.update();
}