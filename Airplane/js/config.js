
const image = (path) => {
    let img = new Image()
    img.src = path
    return img
}
const Start = 0
//开始时
const Starting = 1
//运行时
const Running = 2
//暂停时
const Pause = 3
//结束时
const End = 4
let score = 0
let life = 3
//初始化图片
let bg = image("./images/background.png")
let copyRight = image('./images/resume_pressed.png')
let LoadingImage = image('./images/life.png')
let hero1 = image('./images/me1.png')
let hero2 = image('./images/me2.png')
let destroy_1 = image('./images/me_destroy_1.png')
let destroy_2 = image('./images/me_destroy_2.png')
let destroy_3 = image('./images/me_destroy_3.png')
let destroy_4 = image('./images/me_destroy_4.png')
let bulletImage = image('./images/bullet1.png')

let enemyImage1 = image("./images/enemy1.png")
let enemyImage1_1 = image("./images/enemy1_down1.png")
let enemyImage1_2 = image("./images/enemy1_down2.png")
let enemyImage1_3 = image("./images/enemy1_down3.png")
let enemyImage1_4 = image("./images/enemy1_down4.png")

let enemyImage2 = image("./images/enemy2.png")
let enemyImage2_1 = image("./images/enemy2_down1.png")
let enemyImage2_2 = image("./images/enemy2_down2.png")
let enemyImage2_3 = image("./images/enemy2_down3.png")
let enemyImage2_4 = image("./images/enemy2_down4.png")

let enemyImage3 = image("./images/enemy3_n1.png")
let enemyImage3_1 = image("./images/enemy3_down1.png")
let enemyImage3_2 = image("./images/enemy3_down2.png")
let enemyImage3_3 = image("./images/enemy3_down3.png")
let enemyImage3_4 = image("./images/enemy3_down4.png")
let PauseImage = image('./images/pause_nor.png')
//初始化开始背景
//背景的配置
const SKY = {
    bg: bg,
    width: 480,
    height: 650,
    speed: 30
}

//飞机加载页面的配置
const LOADING = {
    bg: LoadingImage,
    x: 0,
    y: 600,
    speed: 30,
}

//英雄配置
const HERO = {
    frame: {
        live: [hero1, hero2],
        death: [destroy_1, destroy_2, destroy_3, destroy_4]
    },
    x: 0,
    y: 650 - 126,
    width: 102,
    height: 126,
    speed: 30
}
//子弹配置项
let BULLET = {
    width: 5,
    height: 11,
    img: bulletImage
}
let ENEMY1 = {
    type: 1,
    width: 57,
    height: 51,
    life: 1,
    score: 10,
    frame: {
        live: [enemyImage1],
        death: [enemyImage1_1, enemyImage1_2, enemyImage1_3, enemyImage1_4]
    },
    minSpeed: 20,
    maxSpeed: 30
}
let ENEMY2 = {
    type: 2,
    width: 69,
    height: 99,
    life: 10,
    score: 20,
    frame: {
        live: [enemyImage2,],
        death: [enemyImage2_1, enemyImage2_2, enemyImage2_3, enemyImage2_4]
    },
    minSpeed: 40,
    maxSpeed: 50
}
let ENEMY3 = {
    type: 3,
    width: 169,
    height: 258,
    life: 20,
    score: 30,
    frame: {
        live: [enemyImage3,],
        death: [enemyImage3_1, enemyImage3_2, enemyImage3_3, enemyImage3_4]
    },
    minSpeed: 60,
    maxSpeed: 70
}