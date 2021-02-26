input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
function get_distance () {
    pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
    pins.digitalWritePin(DigitalPin.P2, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    distance = pins.pulseIn(DigitalPin.P0, PulseValue.High)
    distance = distance / 58
}
let distance = 0
distance = 400
basic.forever(function () {
    get_distance()
    if (input.lightLevel() < 20 && distance < 10) {
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Sixteenth))
    } else if (input.lightLevel() < 20 && distance < 25) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
    } else if (input.lightLevel() < 20 && distance < 50) {
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
    } else if (input.lightLevel() < 20 && distance < 75) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
    } else if (input.lightLevel() < 20 && distance < 75) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Double))
    }
    basic.pause(100)
})
