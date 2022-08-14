class Hero {
    constructor(config) {
        this.frame = config.frame
        this.x = config.x
        this.y = config.y
        this.live = true
        this.width = config.width
        this.height = config.height
        this.speed = config.speed
        this.lastTime = new Date().getTime()
        this.img = this.frame.live[0]
        this.frameLiveIndex = 0
        this.frameDeathIndex = 0
        //子弹上次射击的事件
        this.lastShootTime = new Date().getTime()
        this.shootInterval = 100
        this.bulletList = []
        this.destroy = false
    }
    judge() {
        const currentTime = new Date().getTime()
        if (currentTime - this.lastTime > this.speed) {
            if (this.live) {
                this.img = this.frame.live[this.frameLiveIndex++ % 2]
            } else {
                this.img = this.frame.death[this.frameDeathIndex++]
                if (this.frameDeathIndex === this.frame.death.length) {
                    this.destroy = true
                }
            }
            this.lastTime = currentTime
        }
    }
    paint(context) {
        context.drawImage(this.img, this.x, this.y)
    }
    shoot() {
        const currentTime = new Date().getTime()
        if (currentTime - this.lastShootTime > this.shootInterval) {
            let bullet = new Bullet(BULLET, this.x + this.width / 2, this.y - BULLET.height)
            bullet.paint(context)
            this.bulletList.push(bullet)
            this.lastShootTime = currentTime
        }
    }
    collide() {
        this.live = false
    }
}