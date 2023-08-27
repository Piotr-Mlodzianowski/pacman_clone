const canvas = document.querySelector(".mainCanv");
const c = canvas.getContext("2d"); // CanvasRenderingContext2D

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


console.log(canvas);
console.log(c);

class Boundry {
    constructor({position}) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    // funkcja rysująca boundry
    draw() {
        c.fillStyle = "blue"
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const boundry = new Boundry({position : {
    x: 0,
    y: 0
}
});

boundry.draw();