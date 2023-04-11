controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Tank Bullet`, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
info.onLifeZero(function () {
    sprites.destroy(mySprite, effects.fire, 5000)
    mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Tank`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(3)
let tilemap2 = 0
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
