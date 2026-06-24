// FIX: Interface Segregation Principle (ISP)
// IVehicle was a fat interface forcing every vehicle to implement unrelated methods.
// Split into focused interfaces. ICar and IBicycle compose only what they need

interface IVehicle {
    getVehicleType: string;
    getSpeed(): number;
    isTaxPayed(): boolean;
}

interface ILights {
    isLightsOn(): boolean;
    isLightsOff(): boolean;
}

interface IEngine {
    startEngine(): void;
    stopEngine(): void;
    acelerate(): number;
}

interface IRadio {
    startRadio(): void;
    stopRadio(): void;
}

interface ICar extends IVehicle {
    engine: IEngine;
    radio: IRadio;
    lights: ILights;
}

interface IBicycle extends IVehicle {
    lights: ILights;
}
