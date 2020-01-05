//% weight=5 color=#2699BF icon="\uf110"
namespace TrafficLights {
    //% block="红灯亮" color=#FF0000
    export function RedOn() {
        pins.digitalWritePin(DigitalPin.P0, 0);
    }
    //% block="红灯灭" color=#000000
    export function RedOff() {
        pins.digitalWritePin(DigitalPin.P0, 1);
    }
    //% block="黄灯亮" color=#BFBF00
    export function YellowOn() {
        pins.digitalWritePin(DigitalPin.P1, 0);
    }
    //% block="黄灯灭" color=#000000
    export function YellowOff() {
        pins.digitalWritePin(DigitalPin.P1, 1);
    }
    //% block="绿灯亮" color=#00BF00
    export function GreenOn() {
        pins.digitalWritePin(DigitalPin.P2, 0);
    }
    //% block="绿灯灭" color=#000000
    export function GreenOff() {
        pins.digitalWritePin(DigitalPin.P2, 1);
    }
}