let smile = document.querySelectorAll('.smile')

setInterval(()=>{
    for (const obj of smile) {
        let r = Math.round(Math.random() * 10)
        if( r === 0) {
            obj.innerHTML = '😂'
        }
        if( r === 1) {
            obj.innerHTML = '😘'
        }
        if( r === 2) {
            obj.innerHTML = '😃'
        }
        if( r === 3) {
            obj.innerHTML = '😊'
        }
        if( r === 4) {
            obj.innerHTML = '🤣'
        }
        if( r === 5) {
            obj.innerHTML = '😍'
        }
        if( r === 6) {
            obj.innerHTML = '😉'
        }
        if( r === 7) {
            obj.innerHTML = '😢'
        }
        if( r === 8) {
            obj.innerHTML = '😎'
        }
        if( r === 9) {
            obj.innerHTML = '😒'
        }
        if( r === 10) {
            obj.innerHTML = '😜'
        }   
    }
} , 2000)

setInterval(()=>{
    for (const obj of smile) {
        obj.classList.add('smile-on')
        setTimeout(()=>{
            obj.classList.remove('smile-on')
        } , 2000)
    }
} , 6000)
for (const obj of smile) {
    obj.classList.add('smile-on')
    setTimeout(()=>{
        obj.classList.remove('smile-on')
    } , 2000)
}