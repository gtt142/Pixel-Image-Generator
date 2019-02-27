const dim = 9;
const colors = ["blue", "red", "green", "yellow", "purple", "DarkGreen", "Olive",
    "Aqua", "OrangeRed", "Indigo", "Navy", "Chocolate", "Fuchsia", "Teal"
]


function getRandomBitArray(dim) {
    let array = new Array(dim);

    for (let i = 0; i < dim; i++) {
        array[i] = new Array(dim)
    }
    for (let i = 0; i < dim; i++) {
        let j = 0;
        for (j = 0; j < dim / 2; j++) {
            array[i][j] = Math.floor(Math.random() * 2);
        }
        for (; j < dim; j++) {
            array[i][j] = array[i][dim - j - 1];
        }
    }

    return array;
}

function drawImage(array, dim, canvas, secondColor) {
    let ctx = canvas.getContext("2d");
    let rectWidth = Math.round(canvas.width / dim);
    let curentY = 0;
    for (let i = 0; i < dim; i++) {
        let curentX = 0;
        for (let j = 0; j < dim; j++) {
            if (array[i][j] == 0) {
                ctx.fillStyle = "white";
            } else {
                ctx.fillStyle = secondColor;
            }
            ctx.fillRect(curentX, curentY, curentX + rectWidth, curentY + rectWidth);
            curentX += rectWidth;
        }
        curentY += rectWidth;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let myCanvas = document.getElementById("canvas");
    myCanvas.width = 1000;
    myCanvas.height = 1000;
    
    let array = getRandomBitArray(dim);
    let randomColorIndex = Math.floor(Math.random() * colors.length)
    drawImage(array, dim, myCanvas, colors[randomColorIndex]);
})
