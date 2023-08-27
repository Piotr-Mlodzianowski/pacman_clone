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
        this.position.y += this.velocity.y;
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


//event listener troche inny kod od tutoriala, zmienione objekt key na e oraz dodano preventDefault;
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": 
        player.velocity.y = -5
        player.velocity.x = 0
        e.preventDefault();
        break;

        case "a": 
        player.velocity.x = -5
        player.velocity.y = 0
        e.preventDefault();
        break;

        case "s": 
        player.velocity.y = 5
        player.velocity.x = 0
        e.preventDefault();
        break;

        case "d": 
        player.velocity.x = 5
        player.velocity.y = 0
        e.preventDefault();
        break;
    }
})

// animacja bohatera

function animate() {
    requestAnimationFrame(animate); //metoda objektu window
    c.clearRect(0, 0, canvas.width, canvas.height); // metoda czyści canvas przy każdej klatce animacji (0 to początkowa pozycja x oraz y, czościmy całą wysokość i całą szerokość canvas)
    boundaries.forEach((boundary) => {
        boundary.draw();
    }) ;

    player.update();
}

animate();