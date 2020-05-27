setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteratio = (secondsRatio + currentDate.getMinutes()) /
        60
    const hoursRation = (miuntesRatio + currentDate.getHours()) /
        12

}