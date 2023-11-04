window.onload = () => {draw("canvas1"); draw("canvas2")};

class Star {
    constructor(diameter, x, y) {
      this.diameter = diameter;
      this.x = x;
      this.y = y;

      this.makeBigger = true;
    }
  }
  

function draw(id) {

    let starSize = window.innerWidth / 500;

    if (starSize > 2) {
        starSize = 2;
    }

    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";

    let stars = [];

    //...drawing code...
    for (let y = 0; y < canvas.height; y += window.innerHeight / 20) {
        for (let x = 0; x < canvas.width; x +=  window.innerWidth / 20) {
            const random_boolean = Math.random() < 0.2;
            if (random_boolean) {
                const random_booleanX = randomNumber(window.innerWidth / 10, -window.innerWidth / 10);
                const random_booleanY = randomNumber(window.innerHeight / 10, -window.innerHeight / 10);
                
                stars.push(new Star(starSize, x - random_booleanX, y - random_booleanY))

                ctx.beginPath();
                ctx.arc(x - random_booleanX, y - random_booleanY, starSize, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        }
    }

    stars.forEach(star => {
        const random_boolean = Math.random() < 0.2;

        if (random_boolean) {
            setTimeout(() => {
                makeBigger(ctx, 0.2, star)
            }, 100);
        }

    });
}

function randomNumber(max, min) {
    return Math.random() * (max - min) + min;
}

function makeBigger(ctx, index, star) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.diameter * index, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.diameter * index, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();


    if ( index >= 1.5) {
        star.makeBigger = false;
    } else if (index <= 1) {
        star.makeBigger = true;
    }

    let newIndex = index;
    if (star.makeBigger) {
        newIndex += 0.2;
    } else {
        newIndex += -0.2;
    }

    setTimeout(() => {
        makeBigger(ctx, newIndex, star)
    }, 300);
}