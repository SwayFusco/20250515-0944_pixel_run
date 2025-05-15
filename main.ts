function startGame () {
    player = game.createSprite(2, 4)
}
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    startGame()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    startGame()
})
let obstacle: game.LedSprite = null
let player: game.LedSprite = null
startGame()
basic.forever(function () {
    basic.pause(randint(4000, 6000))
    obstacle = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        obstacle.change(LedSpriteProperty.Y, 1)
    }
    if (player.isTouching(obstacle)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    obstacle.delete()
})
