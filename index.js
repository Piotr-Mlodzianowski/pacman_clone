    // velocity.x > 0 - ruch w prawo
    // velocity.x < 0 - ruch w lewo
    // velocity.y < 0 - ruch w góre
    // velocity.y > 0 - ruch w dół


const canvas = document.querySelector(".mainCanv");
const c = canvas.getContext("2d"); // CanvasRenderingContext2D
// wszystko co będzie wykonywane na zmiennej c to methody wbudowane w canvas


// CSS widzi canvas jako img przez co nie styluje go poprawnie
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

console.log(canvas);
console.log(c);

const messageEl = document.querySelector(".message");

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

    // klasa dla Power-up do zbierania
    class PowerUp {
        constructor({position}) {
            this.position = position;
            this.radius = 8;
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
const powerUps = [];


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

       case 'p':
        powerUps.push(
          new PowerUp({
            position: {
              x: symbolIndex * Boundary.width + Boundary.width / 2, // wyśrodkowanie power-upa
              y: rowIndex * Boundary.height + Boundary.height / 2 // wyśrodkowanie power-upa
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
        this.radians = 0.75;
        this.openRate = 0.12;
        this.rotation = 0;
    }

    draw() {
        c.save();

        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.translate(-this.position.x, -this.position.y);

        c.beginPath(); //canvas method
        //c.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI * 2); // jednostka radian, 0 to punkt startowy rysowania koła, PI w radianach to połowa koła więc *2 to całe koło
        c.arc(this.position.x, this.position.y, this.radius, this.radians , Math.PI * 2 - this.radians); // to samo tylko z małym wcięciem
        c.lineTo(this.position.x, this.position.y) // dodanie linii do punku wcięcia
        c.fillStyle = "yellow";
        c.fill();
        c.closePath();

        c.restore();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;  // nowa wartość pozycji x powiekszona o velocity po naciśnięciu przycisku
        this.position.y += this.velocity.y;

        // animacja ust bohatera
        if (this.radians < 0 || this.radians > 0.75)
            this.openRate = -this.openRate;
        
        this.radians += this.openRate; // to nie jest elementem warunku if

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

// Duchy

class Ghost {
    static speed = 2;
    constructor({position, velocity, color = 'red'}) {
        this.position = position;
        this.velocity = velocity; 
        this.radius = 15;
        this.color = color;
        this.prevCollisions = [];
        this.speed = 2;
        this.scared = false;
    }

    draw() {
        c.beginPath() //canvas method
        c.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI *2); // jednostka radian, 0 to punkt startowy rysowania koła, PI w radianach to połowa koła więc *2 to całe koło
        c.fillStyle = this.scared ? "deepskyblue" : this.color;
        c.fill();
        c.closePath();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;  // nowa wartość pozycji x powiekszona o velocity po naciśnięciu przycisku
        this.position.y += this.velocity.y;
    }
}

const ghosts = [
    new Ghost({
        position: {
            x: Boundary.width * 4 + Boundary.width / 2, // * 6 przesuwa pozycję ducha o 6 pozycji w prawo
        y: Boundary.height * 5 + Boundary.height / 2
        },
        velocity: {
            x: -Ghost.speed,
            y: 0
        }
    }),
    new Ghost({
        position: {
            x: Boundary.width * 4 + Boundary.width / 2, // * 6 przesuwa pozycję ducha o 6 pozycji w prawo
        y: Boundary.height * 7 + Boundary.height / 2
        },
        velocity: {
            x: 0,
            y: Ghost.speed
        },
        color: "orange"
    }),
    new Ghost({
        position: {
            x: Boundary.width * 6 + Boundary.width / 2, // * 6 przesuwa pozycję ducha o 6 pozycji w prawo
        y: Boundary.height * 5 + Boundary.height / 2
        },
        velocity: {
            x: 0,
            y: -Ghost.speed
        },
        color: "blue"
    }),    new Ghost({
        position: {
            x: Boundary.width * 6 + Boundary.width / 2, // * 6 przesuwa pozycję ducha o 6 pozycji w prawo
        y: Boundary.height * 7 + Boundary.height / 2
        },
        velocity: {
            x: Ghost.speed,
            y: 0
        }, color: "pink"
    })
];

// ruch bohaterem

function circleCollidesWithRectangle({circle, rectangle}) {
    //Aby poprawnie działoło wykrywanie kolizji należy uwzględnić odległość między postacią (także duchem) a widoczną granicą, Boundary.widht / 2 ustawia nas na środku postaci, nastęnie odejmujemy radious i mamy odległość między granicą a postacią. Odejmujemy 1px, żeby zrobić mały odstęp między
    const padding = Boundary.width / 2 - circle.radius - 1;
    return (
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height + padding && 
            circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x - padding &&
            circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y - padding &&
            circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width + padding
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

window.addEventListener("keyup", (e) => {
    switch (e.key) {
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

//Score
const scoreEl = document.querySelector(".score--points");
let score = 0;

let lastKey = "";

function reload() {
    setTimeout (() => {
        window.location.reload();
    }, 5000)
};

// animacja bohatera
let animationId;

function animate() {
    animationId = requestAnimationFrame(animate); //metoda objektu window
    c.clearRect(0, 0, canvas.width, canvas.height); // metoda czyści canvas przy każdej klatce animacji (0 to początkowa pozycja x oraz y, czościmy całą wysokość i całą szerokość canvas)

    
        // Wygrana
     if (pellets.length === 0) {
            messageEl.style = "color: green;"
            messageEl.innerHTML = "Wygrana";
            cancelAnimationFrame(animationId);
            reload();
     }

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

    //iterujemy po tablicy od tyłu, ma to na celu powstrzymanie migania pigułek przy odejmowaniu kolejnych z tablicy, ponieważ wtedy nie zmieniają się pozycje elementów tablicy
    for (let i = pellets.length - 1; 0 <= i; i--) {
    const pellet = pellets[i];
        pellet.draw();
    
        //wykrywanie kolizji
        //Math.hypot - odstęp między środkiem gracza a środkie pigułki w () różnica miedzy 2 pozycjami x oraz 2 pozycjami y
        if (
            Math.hypot(
                pellet.position.x - player.position.x, 
                pellet.position.y - player.position.y)
                <
                pellet.radius + player.radius
            ) {
                pellets.splice(i, 1);
                score += 10; // powiększa score o  10
                scoreEl.innerHTML = score; // aktualizuje zawartość elementu score o nową wartość score
            };
    };

    //rysowanie power-up
    for (let i = powerUps.length - 1; 0 <= i; i--) {
        const powerUp = powerUps[i];
        powerUp.draw();

        // kolizja gracza i power-up
        if (
            Math.hypot(
                powerUp.position.x - player.position.x, 
                powerUp.position.y - player.position.y)
                <
                powerUp.radius + player.radius
            ) {
                powerUps.splice(i, 1);

                // przestraszone duchy
                ghosts.forEach(ghost => {
                    ghost.scared = true;

                    setTimeout(() => {
                        ghost.scared = false;
                    }, 5000)
                })
            }

    }

    for (let i = ghosts.length - 1; 0 <= i; i--) {
        const ghost = ghosts[i];
            //kolizja ducha z graczem
            if (
                Math.hypot(
                    ghost.position.x - player.position.x, 
                    ghost.position.y - player.position.y)
                    <
                    ghost.radius + player.radius 
                ) {

                if(ghost.scared) {
                        ghosts.splice(i, 1);

                    } else {
                        messageEl.style = "color: red;"
                        messageEl.innerHTML="Gra skończona"
                        cancelAnimationFrame(animationId);
                        reload();
                    }

                }
            }

    boundaries.forEach((boundary) => {
        boundary.draw();

        // wykrywanie kolizji
        //player.position.y - player.radius wyznacza górę bohatera
        //boundary.position.y + boundary.height wyznacza dół boundary
        if (circleCollidesWithRectangle({
            circle: player, 
            rectangle: boundary})
            ) {
                player.velocity.x = 0;
                player.velocity.y = 0;
            };
    });

    player.update();

    //rysowanie duchów
    ghosts.forEach(ghost => {
        ghost.update();



        const collisions = [];
        //wykrywanie kolizji ducha z boundaries
        boundaries.forEach(boundary => {
            //wykrycie jaka jest aktualna kolizja
            if (
                !collisions.includes("right") && 
                circleCollidesWithRectangle({
                circle: {...ghost,
                    velocity: {
                        x: ghost.speed,
                        y: 0
                    }
                },
                rectangle: boundary
            }) 
               ) {
                collisions.push ("right");
               }
               if (
                !collisions.includes("left") && 
                circleCollidesWithRectangle({
                circle: {...ghost,
                    velocity: {
                        x: -ghost.speed,
                        y: 0
                    }
                },
                rectangle: boundary
            }) 
               ) {
                collisions.push ("left");
               }
               if (
                !collisions.includes("up") && 
                circleCollidesWithRectangle({
                circle: {...ghost,
                    velocity: {
                        x: 0,
                        y: -ghost.speed
                    }
                },
                rectangle: boundary
            }) 
               ) {
                collisions.push ("up");
               }
               if (
                !collisions.includes("down") && 
                circleCollidesWithRectangle({
                circle: {...ghost,
                    velocity: {
                        x: 0,
                        y: ghost.speed
                    }
                },
                rectangle: boundary
            }) 
               ) {
                collisions.push ("down");
               }
        })

        if (collisions.length > ghost.prevCollisions.length) {
            ghost.prevCollisions = collisions;

        }

        // w sytucaji gdy czawartość collisions nie jest równa zawartosci prevCollisions tworzona jest zmienna pathways, która przechowuje możliwe kierunki ruchu czyli takie z którymi nie ma kolizji. W pathways zostawiamy tylko te wartości prevCollisions które nie znajdują się w collisions
        if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {

            //wykrywamy w którą stronę porusza się duch
            if (ghost.velocity.x > 0) {
                ghost.prevCollisions.push("right");
            } else if (ghost.velocity.x < 0) {
                ghost.prevCollisions.push("left");
            } else if (ghost.velocity.y < 0) {
                ghost.prevCollisions.push("up");
            } else if (ghost.velocity.y > 0) {
                ghost.prevCollisions.push("down");
            }

            const pathways = ghost.prevCollisions.filter(collision => {
                return !collisions.includes(collision);
            });
            
            // direction to kierunek w którym poruszymy ducha, bedzie to przypadkowo wybrana wartość z tablicy pathways
            const direction = pathways[Math.floor(Math.random() * pathways.length)];

            // switch który zmienia wartość kierunku ruchu ducha w zależności od wylosowanej wartości  direction
            switch(direction) {
                case "down": 
                ghost.velocity.y = ghost.speed;
                ghost.velocity.x = 0;
                break;

                case "up": 
                ghost.velocity.y = -ghost.speed;
                ghost.velocity.x = 0;
                break;

                case "right": 
                ghost.velocity.y = 0;
                ghost.velocity.x = ghost.speed;
                break;

                case "left": 
                ghost.velocity.y = 0;
                ghost.velocity.x = -ghost.speed;
                break;
            }

            ghost.prevCollisions = [];
        }
    })

    // zmiana kierunku bohatera
    // Math.PI - 180 stopni
    // Math.Pi / 2 - 90 stopni
    if (player.velocity.x > 0) player.rotation = 0;
    else if (player.velocity.x < 0) player.rotation = Math.PI;
    else if (player.velocity.y > 0) player.rotation = Math.PI / 2;
    else if (player.velocity.y < 0) player.rotation = Math.PI * 1.5;
};

animate();