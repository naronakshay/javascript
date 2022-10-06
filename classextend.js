class Bus{
    constructor(brand){
        this.busname=brand;
    }

    present() {
        return 'I have a ' + this.busname;
      }
}

class Model extends Bus {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

let o = new Model("Benz","450X");
console.log(o.show());