input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.pause(10000)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showIcon(IconNames.Yes)
})
