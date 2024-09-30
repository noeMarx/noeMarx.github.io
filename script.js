const anzahlBilder = 3 // Anzahl der Bilder
const dauerProBild = 2 // Sekunden
let counter = 0


setInterval(function () {
    const body = document.querySelector('body')
    body.style.backgroundImage = `url('${counter+1}.png')`
    counter++
    counter %= anzahlBilder
}, dauerProBild * 1000)