let speed = document.querySelector('.speed_km')
let speed_top = document.querySelector('.top_imgKm')
let speed_bottom = document.querySelector('.bottom_imgKm')
let temp = document.querySelector('.temp_h1')
let top_temp = document.querySelector('.top_imgtemp')
let bottom_temp = document.querySelector('.bottom_imgtemp')
let wheel = document.querySelector('.wheel_h1')
let top_whl = document.querySelector('.top_imgWhl')
let bottom_whl = document.querySelector('.bottom_imgWhl')
let turnOn = document.querySelectorAll('.TurnOn')
let includesActive = []
let org_price = 60
let ten_price = 10

speed.innerHTML = `${org_price} км/ч`

speed_top.onclick = () => {
    if (speed.innerHTML !== '120 км/ч') {
        speed.innerHTML = `${org_price += ten_price} км/ч`
    }
}

speed_bottom.onclick = () => {
    if (speed.innerHTML !== '60 км/ч') {
        speed.innerHTML = `${org_price -= ten_price} км/ч`
    }
}

let temp_gr = 20
let one_gr = 1

temp.innerHTML = `${temp_gr}°`

top_temp.onclick = () => {
    if (temp.innerHTML !== '25°') {
        temp.innerHTML = `${temp_gr += one_gr}°`
    }
}


bottom_temp.onclick = () => {
    if (temp.innerHTML !== '15°') {
        temp.innerHTML = `${temp_gr -= one_gr}°`

    }
}

wheel.innerHTML = '19'

top_whl.onclick = () => {
    if (wheel.innerHTML !== '21') {
        wheel.innerHTML++
    }
}


bottom_whl.onclick = () => {
    if (wheel.innerHTML !== '19') {
        wheel.innerHTML--
    }
}
turnOn.forEach(item => {

    item.onclick = () => {
        if (includesActive.includes(item)) {
            includesActive = includesActive.filter((el) => el.id !== item.id)
            item.classList.remove('active')
        } else {
            includesActive.push(item)
            item.classList.add('active')
        }
    }
    // item.onclick = () => {
    //     turnOn.forEach(a => a.classList.remove('active'))

    //     item.classList.add('active')
    //     // if (item.classList === 'active') {
    //     //     item.classList.remove('active')
    //     // }else{
    //     //     item.classList.add('active')
    //     // }
    // }

})



// 

let teslaImg = document.querySelector('.teslaImg')
let container = document.querySelector('.container')
let wheelBall = document.querySelector('.wheelsOne')
let wheelsTwo = document.querySelector('.wheelsTwo')
let containerTwo = document.querySelector('.big_container')
let img = document.querySelector('.into')
teslaImg.onclick = () => {
    teslaImg.style.scale = '12'

    wheelBall.style.opacity = '0'
    wheelsTwo.style.opacity = '0'
    setTimeout(() => {
        container.style.display = 'none'
        img.style.scale = '4'
        containerTwo.style.display = 'block'
        containerTwo.style.opacity = '1'
    }, 500)

    setTimeout(() => {
        img.style.scale = '1'
    }, 600)
}



let look_click = document.querySelector('.look_click')

look_click.onclick = () => {
    look_click.classList.add('active')
    img.style.scale = '7'
    setTimeout(() => {
        containerTwo.style.display = 'none'
        containerTwo.style.opacity = '0'
        container.style.display = 'block'
        teslaImg.style.scale = '1'
        wheelBall.style.opacity = '1'
        wheelsTwo.style.opacity = '1'
        look_click.classList.remove('active')
    }, 700)

}


let colorsInto = {
    black: "./img/intoImg.png",
    white: "./img/white.svg",
    brown: "./img/brown.svg"
}

let btns = document.querySelectorAll('.btns')

btns.forEach((btn) => {
    btn.onclick = () => {
        let color = btn.getAttribute('data-color')
        let imgB = colorsInto[color]
        img.src = `${imgB}`
        img.style.width = '1280px'

        img.style.transition = '1s ease'
    }
})



