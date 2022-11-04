let car = {
    Brand: "Mitsubishi",
    Variant: "Lancer EX",
    Transmission: "Automatic",
    Lights: {
        Front: "LED",
        Rear: "LED/Bulb",
        Signal: "Bulb"
    },

    displayBrand(){
        alert(this.Brand);
        document.writeLine(this.Transmission);
    }
}

class myCar{
    constructor(Brand, Variant, Transmission){
        this.Brand = Brand;
        this.Variant = Variant;
        this.Transmission = Transmission;
    }
}