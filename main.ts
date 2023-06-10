radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        zoombit.brake()
    } else if (receivedNumber == 1) {
        zoombit.move(MotorDirection.Forward, 255)
    } else if (receivedNumber == 2) {
        zoombit.turn(TurnDirection.Left, 255)
    } else if (receivedNumber == 3) {
        zoombit.turn(TurnDirection.Right, 255)
    } else if (receivedNumber == 4) {
        zoombit.move(MotorDirection.Backward, 255)
    }
})
basic.showIcon(IconNames.Surprised)
radio.setGroup(1)
