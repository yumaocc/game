let Block = function (position) {
    let p = position //砖块的坐标
    const img = imgFromPath('./img/block.png')
    let o = {
        image: img,
        x: p[0],
        y: p[1],
        w: 40,
        h: 20,
        alive: true,
        lives: p[2] || 1,
    }
    o.kill = function () {
        o.lives--
        if (o.lives < 1) {
            o.alive = false
        }
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}