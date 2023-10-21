const btn = document.querySelector('button');

btn.addEventListener('click', function(){
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
    };
});

