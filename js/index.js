var colors = ['red', 'blue', 'yellow', 'green', 'violet', 'lightblue'];
const MAX = 6;
const MIN = 0;
var squareBoard = [];


$(document).ready(function () {
    var squareWidth = (parseInt($('.board').css('width'))) / 14;
    generateSquares();

    $('.btn-red').on('click', function () {
        drench(colors[0]);
        decreaseMoves();
    });


    $('.btn-blue').on('click', function () {
        drench(colors[1]);
        decreaseMoves();
    });

    $('.btn-yellow').on('click', function () {
        drench(colors[2]);
        decreaseMoves();
    });

    $('.btn-green').on('click', function () {
        drench(colors[3]);
        decreaseMoves();
    });

    $('.btn-violet').on('click', function () {
        drench(colors[4]);
        decreaseMoves();
    });

    $('.btn-lightblue').on('click', function () {
        drench(colors[5]);
        decreaseMoves();
    });

    $('#new-game').on('click', function () {
        generateSquares();
        $('#game-over').css('display', 'none');
        $('#moves').html('30');
    });

});

/* Function for generating colored squeres */

function generateSquares() {
    /* for loop to create an array of colors */

    for (let i = 0; i < 14; i++) {
        squareBoard[i] = [];

        for (let j = 0; j < 14; j++) {
            var colorNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN;
            var randomColor = colors[colorNumber];
            squareBoard[i].push(randomColor);
        }
    }

    /* for loop to create DOM */

    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 14; j++) {
            let square = $('<div>')
                .addClass('square')
                .css({
                    'background-color': '' + squareBoard[i][j],
                    'top': i * 40 + 'px',
                    'left': j * 40 + 'px'
                });
            $('.board').append(square);
        }
    }
}

function drench(color) {
    var current_color = squareBoard[0][0];
    if (current_color == color) {
        return;
    }

    drenchSquare(0, 0, current_color, color);

    updateSquares();
}

/**
 * Changes the color of the specific square
 */

function drenchSquare(x, y, from_color, to_color) {

    if (x >= 0 && x < 14 && y >= 0 && y < 14 && squareBoard[x][y] == from_color) {
        squareBoard[x][y] = to_color;

        drenchSquare(x + 1, y, from_color, to_color);
        drenchSquare(x - 1, y, from_color, to_color);
        drenchSquare(x, y + 1, from_color, to_color);
        drenchSquare(x, y - 1, from_color, to_color);

    }
}

function updateSquares() {

    $('.board').empty();

    for (let i = 0; i < 14; i++) {

        for (let j = 0; j < 14; j++) {
            square = $('<div>')
                .addClass('square')
                .css({
                    'background-color': '' + squareBoard[i][j],
                    'top': i * 40 + 'px',
                    'left': j * 40 + 'px'
                });
            $('.board').append(square);
        }
    }
}

function decreaseMoves() {
    let startMoves = $('#moves').html();
    startMoves--;
    if (startMoves >= 0) {
        $('#moves').html(startMoves);
    } else {
        $('#game-over').css('display', 'block');
    }
    
}

function c(msg) {
    console.log(msg);
}