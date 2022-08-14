let s = []
s.length = 10
console.log(s)
for (let i = 0; i < 10; i++) {
    for (let index = 0; index < 10; index++) {
        s.push([index *40 ,i *10])
        
    }
}
console.log(s)
