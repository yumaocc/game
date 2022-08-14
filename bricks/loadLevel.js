let levels = [[[100,300,2]],[],[[200,200]]]
let y = function (level) {
    for (let i = 0; i < 10; i++) {
        for (let index = 0; index < 10; index++) {
            level[1].push([index *40 ,i *10,i],i)
        }
    }
    return level
}
levels = y(levels)

let loadLevel = function (n) {
        n = n - 1
    let level = levels[n]
    console.log(level.length,'总数')
    let blocks = []
    //砖块的数量
    for (let i = 0; i < level.length; i++) {
        let p = level[i]
        let b = Block(p)
        blocks.push(b)
    }
    window.blockLength =blocks.length
    return blocks
    
}