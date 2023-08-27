const canvas = document.querySelector(".mainCanv");
const c = canvas.getContext("2d"); // CanvasRenderingContext2D
// wszystko co będzie wykonywane na zmiennej c to methody wbudowane w canvas

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



// Pacman with movement

class Player {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity; // prędkość, do ruchów bohatera
        this.radius = 15;
    }

    draw() {
        c.beginPath() //canvas method
        c.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI *2); // jednostka radian, 0 to punkt startowy rysowania koła, PI w radianach to połowa koła więc *2 to całe koło
        c.fillStyle = "yellow";
        c.fill();
        c.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;  // nowa wartość pozycji x powiekszona o velocity po naciśnięciu przycisku
        this.position.y += yhis.velocity.y;
    }
}

const player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
    },
    velocity: {
        x: 0,
        y: 0
    }
});

player.draw();

// ruch bohaterem

window.addEventListener("keydown", ({key}) => {
    switch (key) {
        case "w": 
        player.velocity.y = -5
        break;

        case "a": 
        player.velocity.x = -5
        break;

        case "s": 
        player.velocity.y = 5
        break;

        case "d": 
        player.velocity.x = 5
        break;
    }
})

