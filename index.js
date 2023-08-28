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
    constructor({position, image}) {
        this.position = position;
        this.width = 40;
        this.height = 40;
        this.image = image; // obrazy rur zamiast rysowania kwadratów
    };

    // funkcja rysująca boundry
    draw() {
        //c.fillStyle = "blue"
        //c.fillRect(this.position.x, this.position.y, this.width, this.height);

        c.drawImage(this.image, this.position.x, this.position.y)
    };
};

    // klasa dla pigułek do zbierania
class Pellet {
    constructor({position}) {
        this.position = position;
        this.radius = 3;
    };

    draw() {
        c.beginPath() //canvas method
        c.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI *2); // jednostka radian, 0 to punkt startowy rysowania koła, PI w radianach to połowa koła więc *2 to całe koło
        c.fillStyle = "white";
        c.fill();
        c.closePath();
    };
};



// dla znaku "-, |, 1, 2, 3, 4, b" stwórz boundry
const map = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '7', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '+', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
    ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
    ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
    ['|', '.', 'b', '.', '[', '5', ']', '.', 'b', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', 'p', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
  ];

const boundaries = [];
const pellets = [];


function createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

// objekt Image dla obrazu poziomej rury
//const image = new Image();
//image.src = "./img/pipeHorizontal.png"

map.forEach((row, rowIndex) => {
row.forEach((symbol, symbolIndex) => {
    switch (symbol) {
        case "-": 
        boundaries.push(
            new Boundary({
            position: {
                x: Boundary.width * symbolIndex,
                y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
            },
            image: createImage("./img/pipeHorizontal.png") // przekazujemy obraz rury
        })
        );
            break;

            case "|": 
            boundaries.push(
                new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
                },
                image: createImage("./img/pipeVertical.png") // przekazujemy obraz rury
            })
            );
                break

                case "1": 
            boundaries.push(
                new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
                },
                image: createImage("./img/pipeCorner1.png") // przekazujemy obraz rury
            })
            );
                break

                case "2": 
            boundaries.push(
                new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
                },
                image: createImage("./img/pipeCorner2.png") // przekazujemy obraz rury
            })
            );
                break

                case "3": 
            boundaries.push(
                new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
                },
                image: createImage("./img/pipeCorner3.png") // przekazujemy obraz rury
            })
            );
                break

                case "4": 
            boundaries.push(
                new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
                },
                image: createImage("./img/pipeCorner4.png") // przekazujemy obraz rury
            })
            );
                break

                case "b": 
                boundaries.push(
                    new Boundary({
                    position: {
                        x: Boundary.width * symbolIndex,
                        y: Boundary.height * rowIndex //pozycja y mnożona jest przez index, aby stworzyć nowy boundary pod poprzednim
                    },
                    image: createImage("./img/block.png") // przekazujemy obraz rury
                })
                );
                    break

                    case '[':
                boundaries.push(
                    new Boundary({
                    position: {
                         x: Boundary.width * symbolIndex,
                        y: Boundary.height * rowIndex
                    },
                image: createImage('./img/capLeft.png')
          })
        )
        break

        case ']':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                image: createImage('./img/capRight.png')
              })
            )
            break
          case '_':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                image: createImage('./img/capBottom.png')
              })
            )
            break
          case '^':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                image: createImage('./img/capTop.png')
              })
            )
            break
          case '+':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                image: createImage('./img/pipeCross.png')
              })
            )
            break
          case '5':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                color: 'blue',
                image: createImage('./img/pipeConnectorTop.png')
              })
            )
            break
          case '6':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                color: 'blue',
                image: createImage('./img/pipeConnectorRight.png')
              })
            )
            break
          case '7':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                color: 'blue',
                image: createImage('./img/pipeConnectorBottom.png')
              })
            )
            break
          case '8':
            boundaries.push(
              new Boundary({
                position: {
                    x: Boundary.width * symbolIndex,
                    y: Boundary.height * rowIndex
                },
                image: createImage('./img/pipeConnectorLeft.png')
              })
            )
            break
            
            case '.':
        pellets.push(
          new Pellet({
            position: {
              x: symbolIndex * Boundary.width + Boundary.width / 2, // wyśrodkowanie kropki
              y: rowIndex * Boundary.height + Boundary.height / 2 // wyśrodkowanie kropki
            }
          })
        )
       break
            
    };
});
});





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

function circleCollidesWithRectangle({circle, rectangle}) {
    return (
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height && 
            circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x &&
            circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y &&
            circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width
    )
}


const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


//event listener troche inny kod od tutoriala, zmienione objekt key na e oraz dodano preventDefault;
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": 
        keys.w.pressed = true;
        lastKey = "w";
        e.preventDefault();
        break;

        case "a": 
        keys.a.pressed = true;
        lastKey = "a";
        e.preventDefault();
        break;

        case "s": 
        keys.s.pressed = true;
        lastKey = "s";
        e.preventDefault();
        break;

        case "d": 
        keys.d.pressed = true;
        lastKey = "d";
        e.preventDefault();
        break;
    }
})

window.addEventListener("keyup", ({key}) => {
    switch (key) {
        case "w": 
        keys.w.pressed = false;
        e.preventDefault();
        break;

        case "a": 
        keys.a.pressed = false;
        e.preventDefault();
        break;

        case "s": 
        keys.s.pressed = false;
        e.preventDefault();
        break;

        case "d": 
        keys.d.pressed = false;
        e.preventDefault();
        break;
    }
});

let lastKey = "";

// animacja bohatera

function animate() {
    requestAnimationFrame(animate); //metoda objektu window
    c.clearRect(0, 0, canvas.width, canvas.height); // metoda czyści canvas przy każdej klatce animacji (0 to początkowa pozycja x oraz y, czościmy całą wysokość i całą szerokość canvas)

    if (keys.w.pressed && lastKey === "w") {
        for (let i=0; i , i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWithRectangle({
                circle: {...player,
                    velocity: {
                        x: 0,
                        y: -5
                    }
                },
                rectangle: boundary
            }) 
               ) {
                player.velocity.y = 0;
                break;
                } else {
                    player.velocity.y = -5;
                }
            }
    } else if (keys.a.pressed && lastKey === "a") {
        for (let i=0; i , i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWithRectangle({
                circle: {...player,
                    velocity: {
                        x: -5,
                        y: 0
                    }
                },
                rectangle: boundary
            }) 
               ) {
                player.velocity.x = 0;
                break;
                } else {
                    player.velocity.x = -5;
                }
            }
    } else if (keys.s.pressed && lastKey === "s") {
        for (let i=0; i , i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWithRectangle({
                circle: {...player,
                    velocity: {
                        x: 0,
                        y: 5
                    }
                },
                rectangle: boundary
            }) 
               ) {
                player.velocity.y = 0;
                break;
                } else {
                    player.velocity.y = 5;
                }
            }
    } else if (keys.d.pressed && lastKey === "d") {
        for (let i=0; i , i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWithRectangle({
                circle: {...player,
                    velocity: {
                        x: 5,
                        y: 0
                    }
                },
                rectangle: boundary
            }) 
               ) {
                player.velocity.x = 0;
                break;
                } else {
                    player.velocity.x = 5;
                }
            }
    }


    // rysowanie boundaries i pellets na podstawie zawortości tablic boundaries i oraz pellets

pellets.forEach(pellet => {
    pellet.draw()
})

    boundaries.forEach((boundary) => {
        boundary.draw()

        // wykrywanie kolizji
        //player.position.y - player.radius wyznacza górę bohatera
        //boundary.position.y + boundary.height wyznacza dół boundary
        if (circleCollidesWithRectangle({
            circle: player, 
            rectangle: boundary})
            ) {
                player.velocity.x = 0;
                player.velocity.y = 0;
            }
    });

    player.update();
}

animate();