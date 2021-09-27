input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(0)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Yes)
    senddata = 1
})
let s = 0
let z = 0
let senddata = 0
radio.setGroup(1)
senddata = 0
basic.forever(function () {
    if (senddata == 1) {
        z = input.acceleration(Dimension.Z)
        s = input.acceleration(Dimension.Strength)
        radio.sendString("" + z + "," + s)
    }
})
