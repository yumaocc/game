let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

const sky = new Sky(SKY)
const loading = new Loading(LOADING)
let hero = new Hero(HERO)
let state = Start//定义游戏状态
//开始
canvas.addEventListener('click', function (e) {
    if (state === Start) {
        state = Starting
    }
})
canvas.addEventListener('mousemove', function (e) {
    hero.x = e.offsetX - hero.width / 2
    hero.y = e.offsetY - hero.height / 2
})
canvas.addEventListener('mouseleave', function () {
    if (state === Running) {
        state = Pause
    }
})
canvas.addEventListener('mouseenter', function () {
    if (state === Pause) {
        state = Running
    }
})

//全局函数，生成敌方飞机
let enemies = []
let level = 33 //飞机产生的速率
let lastTime = new Date().getTime()
function createComponent() {
    const currentTime = new Date().getTime()
    if (currentTime - lastTime > level) {
        let ran = Math.floor(Math.random() * 100)
        if (ran < 60) {
            enemies.push(new Enemy(ENEMY1))
        } else if (ran > 60 && ran < 90) {
            enemies.push(new Enemy(ENEMY2))
        } else {
            enemies.push(new Enemy(ENEMY3))
        }
    }
    lastTime = currentTime
}

//全局函数，判断敌人和子弹
function judgeComponent() {
    for (let index = 0; index < hero.bulletList.length; index++) {
        hero.bulletList[index].move()
    }
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move()

    }

}
//全局函数，来绘制敌人和子弹
function paintComponent() {
    for (let index = 0; index < hero.bulletList.length; index++) {
        hero.bulletList[index].paint(context)
    }
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].paint(context)
    }
    context.font = "20px 微软雅黑"
    context.fillText('分数 :' + score, 10, 20)
    context.fillText('生命 :' + life, 400, 20)

}
//全局函数，来销毁子弹和敌人
function deleteComponent() {
    if (hero.destroy) {
        life--
        hero.destroy = false
        if (life === 0) {
            state = End
        } else {
            hero = new Hero(HERO)
        }
    }
    for (let index = 0; index < hero.bulletList.length; index++) {
        if (hero.bulletList[index].outOfBounds() || hero.bulletList[index].destroy) {
            hero.bulletList.splice(index, 1)
        }
    }
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].outOfBounds() || enemies[i].destroy) {
            enemies.splice(i, 1)
        }
    }


}
//碰撞检测函数
function checkHit() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].hit(hero)) {
            enemies[i].collide()
            hero.collide()
        }
        for (let j = 0; j < hero.bulletList.length; j++) {
            if (enemies[i].hit(hero.bulletList[j])) {
                enemies[i].collide()
                hero.bulletList[j].collide()
            }
        }
    }
}


bg.addEventListener('load', function () {
    setInterval(() => {
        if (score === 999999) {
            context.textAlign = "center"
            context.textBaseline = 'center'
            context.font = "bold 24px 微软雅黑"
            context.fillText('恭喜你成功通关', 480 / 2, 650 / 2)
            state = Start
        }
        switch (state) {
            case Start:
                sky.judge()
                sky.paint(context)
                context.drawImage(copyRight, (240 - copyRight.width / 2), (340 - copyRight.height / 2))
                break
            case Starting:
                sky.judge()
                sky.paint(context)
                loading.judge()
                loading.paint(context)
                break
            case Running:
                sky.judge()
                sky.paint(context)
                hero.judge()
                hero.paint(context)
                hero.shoot()
                createComponent()
                judgeComponent()
                deleteComponent()
                paintComponent()
                checkHit()
                break
            case Pause:
                context.drawImage(PauseImage, (240 - copyRight.width / 2), (340 - copyRight.height / 2))
                break
            case End:
                context.textAlign = "center"
                context.textBaseline = 'center'
                context.font = "bold 24px 微软雅黑"
                context.fillText('GAME OVER', 480 / 2, 650 / 2)
                break
        }
    }, 1000 / 30)
})