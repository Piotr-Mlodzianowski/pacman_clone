const canvas = document.querySelector(".mainCanv");
const c = canvas.getContext("2d"); // CanvasRenderingContext2D

// CSS widzi canvas jako img przez co nie styluje go poprawnie
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


console.log(canvas);
console.log(c);

class Boundary {
    static width = 40;
    static height = 40;
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

// dla znaku "-" stwórz boundry
const map = [
    ["-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", " ", "-", "-", " ", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-"]
];

const boundaries = [];

map.forEach((row, rowIndex) => {
row.forEach((symbol, symbolIndex) => {
    switch (symbol) {
        case "-": 
        boundaries.push(new Boundary({
            position: {
                x: Boundary.width * symbolIndex,
                y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
            }
        })
        );
            break
    }
})
})

boundaries.forEach((boundary) => {
    boundary.draw();
})

