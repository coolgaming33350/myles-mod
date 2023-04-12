namespace SpriteKind {
    export const Vehicle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vehicle, function (sprite, otherSprite) {
    game.showLongText("PLANE INCOMING", DialogLayout.Bottom)
    sprites.destroy(mySprite)
    mySprite = sprites.create(assets.image`Bomber plane`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Tank Bullet`, mySprite, 50, 0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite.setPosition(5, 3)
    statusbar.value = 100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -2.5
})
info.onLifeZero(function () {
    sprites.destroy(mySprite, effects.fire, 5000)
    mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Tank`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Tank`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`Tank`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`Tank`, SpriteKind.Player))
    mp.setPlayerIndicatorsVisible(true)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
})
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let tilemap2 = 0
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
mySprite.setPosition(0, 0)
let Plane = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Vehicle)
Plane.setPosition(24, 100)
game.onUpdateInterval(2500, function () {
    statusbar.value += 2.5
})
