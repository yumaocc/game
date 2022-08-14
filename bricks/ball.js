window.p = 5
let Ball = function () {
    const img = imgFromPath('./img/ball.png')
    let o = {
        image: img,
        x: 300,
        y: 400,
        w: 8,
        h : 8,
        speedX: window.p, //球的速度
        speedY: window.p,//球的速度
        fired: false,
        move: function () { //小球移动的函数
            if (this.fired) {
                if (this.x < 0 || this.x > 400 - this.image.width) {
                    this.speedX *= -1
                }
                if (this.y < 0 || this.y > 500 - this.image.height) {
                    this.speedY *= -1
                }
                this.x += this.speedX
                this.y += this.speedY
            }
        },
        fire : function () {//小球开始移动的函数
            this.fired = true
        },
        fire1 : function () {
            o.fired = false
        },
    }
    o.hasPoint = function(x,y) {
        let xIn = x >= o.x &&  x <= o.x + o.image.width 
        let yIn = y >= o.y &&  y <= o.y + o.image.height
        return xIn && yIn

    }
    return o
}