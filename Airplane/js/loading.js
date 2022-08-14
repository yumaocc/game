class Loading {
    constructor(config) {
        this.bg = config.bg
        this.x = config.x
        this.y = config.y
        this.speed = config.speed,
            this.lastTime = new Date().getTime()
    }
    judge() {
        let currentTime = new Date().getTime()
        if (currentTime - this.lastTime >= this.speed) {
            this.x += 10
            this.lastTime = currentTime
        }

        if (this.x === 500) {
            state = Running
        }
    }
    paint(context) {
        context.drawImage(this.bg, this.x, this.y)
    }
}