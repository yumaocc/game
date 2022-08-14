const guaGame = function () {
    let g = {
        actions: {},//按下按键触发的事件
        keyDowns: {},//按下按键确定一个时，是否调用移动函数
        level : 1,//关卡
    }
    let canvas = document.querySelector('#id_canvas')
    const context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    g.drawImage = function (guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)//更新位置
    }
    //记录事件
    window.addEventListener('keydown', function (e) {
        g.keyDowns[e.key] = true
    })
    window.addEventListener('keyup', function (e) {
        g.keyDowns[e.key] = false
    })
    //注册事件
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    let runLoop = function () {
        let actions = Object.keys(g.actions)
        for (let index = 0; index < actions.length; index++) {
            const e = actions[index];
            if (g.keyDowns[e]) {
                g.actions[e]()
            }
        }
        g.update()//更新新的图片新的坐标
        context.clearRect(0, 0, canvas.width, canvas.height)//清空画布
        g.draw() //更新位置
        setTimeout(function () {
            runLoop()
        }, 1000 / window.fps)
    }
    //定时器
    setTimeout(function () {
        runLoop()
    }, 1000 / window.fps)

    return g
}
