const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    //fa sparire il bottone dopo il primo click
    btn.style.display = 'none';
    
    //numero di quadratini generati
    const numSquare = 64;

    //imposto la griglia di gioco
    const playGround = document.getElementById('playground');

    //ciclo per stamparne 64 <--
    for(let i = 0; i < numSquare; i++){
        let square = drawSquare(i);

        //attacco il quadratino alla griglia
        playGround.append(square);
        console.log(square)
        square.style.color = 'black';
    };
});

//disegna il quadrato qui
function drawSquare(squareIndex){
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = squareIndex + 1; 
    square.addEventListener('click', function(){
        square.classList.add('active');
        square.style.color = 'white';
        
    });
    return square; 
}

