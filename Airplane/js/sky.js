class Sky {
    constructor(config) {
        this.bg = config.bg
        this.width = config.width
        this.height = config.height
        this.x = 0
        this.y1 = 0
        this.y2 = -this.height
        this.speed = config.speed
        this.lastTime = new Date().getTime()
    }//背景图
    judge() {
        let currentTime = new Date().getTime()
        if (currentTime - this.lastTime >= this.speed) {
            this.y1++
            this.y2++
            this.lastTime = currentTime
        }
        if (this.y2 === 0) {
            this.y1 = 0
            this.y2 = -this.height
        }
    }
    paint(context) {
        context.drawImage(this.bg, this.x, this.y1, 480, 650)
        context.drawImage(this.bg, this.x, this.y2, 480, 650)
    }
}
