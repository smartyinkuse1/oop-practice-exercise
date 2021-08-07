class Rectangle {

    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    getArea() {
        return this.breadth * this.length
    }

    getPerimeter() {
        return 2 * (this.length + this.breadth)
    }

    getSummary() {
        return `The Rectangle has an area of ${this.getArea()} and a perimeter of ${this.getPerimeter()}`
    }

}


class Circle {
    
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getSummary() {
        return `The Rectangle has an area of ${this.getArea()} and a perimeter of ${this.getCircumference()}`
    }
}



// Rectangle Form

const rectangleForm = document.getElementById("rectangleForm")


const rectangleFormHandler = (event) => {
    event.preventDefault()
    const lengthValue = parseInt(rectangleForm.elements["lengths"].value)
    const breadthValue = parseInt(rectangleForm.elements["breadth"].value)
    
    let rectObj = new Rectangle(lengthValue, breadthValue)
    document.getElementById("rectangleResult").innerHTML = rectObj.getSummary()
}
rectangleForm.addEventListener("submit", rectangleFormHandler)



//Circle Form 

const circleForm = document.getElementById("circleForm")

const circleFormHandler = (event) => {
    event.preventDefault()
    const radiusValue = parseInt(circleForm.elements["radius"].value);

    let circleObj = new Circle(radiusValue);
    document.getElementById("circleResult").innerHTML = circleObj.getSummary()
}

circleForm.addEventListener("submit", circleFormHandler)