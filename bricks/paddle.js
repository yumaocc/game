let Paddle = function () {
    const img = imgFromPath('./img/paddle.png')
    let o = {
        image: img,
        x: 300,
        y: 450,
        speed: 10,//移动速度
    }
    let aInb = function (x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.moveLeft = function () {
        o.x -= o.speed //挡板移动
        if (o.x < 0) {
            o.x = 0
        }
    },
        o.moveRight = function () {
            o.x += o.speed//挡板移动
            if (o.x > 400 - o.image.width) {
                o.x = 400 - o.image.width
            }
        }
    o.collide = function (ball) {
        let a = o
        let b = ball
        if (aInb(a.x,b.x ,b.x + b.image.width) || aInb(b.x,a.x ,a.x + a.image.width)) {
            if (aInb(a.y,b.y ,b.y + b.image.height) || aInb(b.y,a.y ,a.y + a.image.height)) {
                return true
            }
        }
        return false
    }
    return o
}