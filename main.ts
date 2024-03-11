namespace SpriteKind {
    export const Plane_Changer = SpriteKind.create()
}
namespace StatusBarKind {
    export const Dummy = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Plane_Changer, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    mySprite = sprites.create(assets.image`Plane`, SpriteKind.Player)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite)
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Tank Bullet`, mySprite, 50, 0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(mySprite)
    mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
    mySprite.setPosition(0, 0)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite)
    statusbar.value = 100
})
statusbars.onZero(StatusBarKind.Dummy, function (status) {
    statusbar2.value = 100
})
info.onLifeZero(function () {
    sprites.destroy(mySprite, effects.fire, 5000)
    mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -2.5
})
let projectile: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let tilemap2 = 0
mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    2 2 2 2 d d d d d d d 2 2 2 2 2 
    2 2 2 d 2 2 2 2 2 2 2 d 2 2 2 2 
    2 2 d 2 2 d d d d d 2 2 d 2 2 2 
    2 2 d 2 d 2 2 2 2 2 d 2 d 2 2 2 
    2 2 d 2 d 2 d d d 2 d 2 d 2 2 2 
    2 2 d 2 d 2 d 2 d 2 d 2 d 2 2 2 
    2 2 d 2 d 2 d d d 2 d 2 d 2 2 2 
    2 2 d 2 d 2 2 2 2 2 d 2 d 2 2 2 
    2 2 d 2 2 d d d d d 2 2 d 2 2 2 
    2 2 2 d 2 2 2 2 2 2 2 d 2 2 2 2 
    2 2 2 2 d d d d d d d 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    f f f f f f f f f f f f f f f f 
    f b b b b b b b b b b b b b b f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
let PlaneChange = sprites.create(img`
    . . 6 6 6 6 . . 
    . 6 d 1 1 4 6 . 
    6 d 4 4 4 4 1 6 
    c b b 4 4 4 d c 
    . c b b 4 d c . 
    . . c c c c . . 
    `, SpriteKind.Plane_Changer)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Dummy)
statusbar2.attachToSprite(mySprite2)
statusbar2.value = 100
game.onUpdateInterval(2500, function () {
    statusbar.value += 2.5
})
forever(function () {
    PlaneChange.setPosition(52, 20)
    mySprite2.setPosition(90, 24)
})
