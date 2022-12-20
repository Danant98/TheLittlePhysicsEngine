// Vector class 

class Vector {

    constructor(...components) {
        this.components = components;
    }

    add({components}) {
        return new Vector(
            ...components.map((component, index) => this.components[index] + component)
            );
    }

    subtract({components}) {
        return new Vector(
            ...components.map((component, index) => this.components[index] - component)
        );
    }

    mag() {
        return Math.hypot(...this.components);
    }

    dot({components}) {
        return components.reduce((acc, component, index) => acc + component * this.components[index], 0);
    }

    normalize() {
        if (this.mag() === 0) {
            return new Vector(1, 1);
        } else {
            return new Vector(
                ...this.components.map(component => component * (1 / this.mag()))
            ); 
        }
    }
}




