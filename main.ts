controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Tank Bullet`, mySprite, 50, 0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite.setPosition(0, 0)
    statusbar.value = 100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -2.5
})
info.onLifeZero(function () {
    sprites.destroy(mySprite, effects.fire, 5000)
    mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
})
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let tilemap2 = 0
mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
