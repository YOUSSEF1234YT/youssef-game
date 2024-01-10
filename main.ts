sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`ninjaImage`, SpriteKind.Player)
mySprite.setPosition(72, 59)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.startCountdown(100)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(assets.image`starImage`, SpriteKind.Food)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
})
