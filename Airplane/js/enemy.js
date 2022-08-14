class Enemy {
    constructor(config) {
        this.type = config.type
        this.width = config.width
        this.height = config.height
        this.y = -config.height
        this.x = Math.floor(Math.random() * (480 - config.width))
        this.life = config.life
        this.score = config.score
        this.frame = config.frame
        this.img = config.frame.live[0]
        this.live = true
        this.minSpeed = config.minSpeed
        this.maxSpeed = config.maxSpeed
        this.lastTime = new Date().getTime()
        this.speed = Math.floor(Math.random() * (config.minSpeed - config.maxSpeed + 1)) + config.maxSpeed
        this.deathIndex = 0
        this.destroy = false
    }
    move() {
        const currentTime = new Date().getTime()
        if (currentTime - this.lastTime >= this.speed) {
            if (this.live) {
                this.img = this.frame.live[0]
                this.y++

            } else {
                this.img = this.frame.death[this.deathIndex++]
                if (this.deathIndex === this.frame.death.length) {
                    this.destroy = true
                }
            }
            this.lastTime = currentTime
        }
    }
    paint(context) {
        context.drawImage(this.img, this.x, this.y)
    }
    outOfBounds() {
        return this.y > 650 + this.height
    }
    //碰撞方法
    hit(o) {
        let el = this.x
        let er = this.x + this.width
        let et = this.y
        let eb = this.y + this.height
        let ol = o.x
        let or = o.x + o.width
        let ot = o.y
        let ob = o.y + o.height
        if (ol > er || or < el || ot > eb || ob < et) {
            return false
        } else {
            return true
        }
    }
    collide() {
        this.life--
        if (this.life === 0) {
            this.live = false
            score += this.score
        }
    }


}