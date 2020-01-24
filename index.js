window.onload = function () {
    // находим все ячейки
    const cells = document.getElementsByClassName('cell');

    // перебираем ячейки и указываем листенер для каждой

    for (let cell of cells) {
        console.log(cell);

        // указываем листенер на событие click
        cell.addEventListener("click", () => {
            // код обработки соытия
            console.log(cell);

            // если в классе у ячейки есть класс active
            if (cell.className.indexOf('active') !== -1) {
                // удаляем class active
                cell.classList.remove('active');
            } else {
                // добавляем класс active
                cell.classList.add('active');
            }
        });
    }

    
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let activeTextId = 1;
    
    
    nextButton.addEventListener('click', () => {
    
        //activeTextId == 1
        if (activeTextId === 4) {
            activeTextId = 1
        } else {
            activeTextId++;
        }
    
            //activeTextId == 2
    
            document.getElementById(`text${activeTextId == 1 ? 4 : activeTextId-1}`).style.opacity = 0;
    
           // document.getElementById(`text${activeTextId}`).classList.add('active');

            let  op = 0;
            while (op <= 1) {
                let _op = op + 0.05;
                setTimeout(() => {
                    document.getElementById(`text${activeTextId}`).style.opacity = _op;
                }, 60 + _op * 200);
    
                op += 0.05;
                console.log(op);
            }
    
            document.getElementById(`round${activeTextId == 1 ? 4 : activeTextId-1}`).classList.remove('round_active');
    
            document.getElementById(`round${activeTextId}`).classList.add('round_active');
    
    });
    
    prevButton.addEventListener('click', () => {
        if (activeTextId ===1) {
            activeTextId = 4;
        } else {
            activeTextId--;
        }
        
        document.getElementById(`text${activeTextId == 4 ? 1 : activeTextId + 1}`).style.opacity = 0;
    
        //document.getElementById(`text${activeTextId}`).classList.add('active')

        let  op = 0;
        while (op <= 1) {
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op += 0.05;
            console.log(op);
        }
    
        document.getElementById(`round${activeTextId == 4 ? 1 : activeTextId + 1}`).classList.remove('round_active')
    
        document.getElementById(`round${activeTextId}`).classList.add('round_active');
    });
    
    
};


/*document.querySelector("div.block").querySelectorAll("img")[0].addEventListener("mouseover", function() {
    this.src = "section2-2Back.png";
});*/

/*window.onload1 = function () {
    const blocks = document.getElementsByClassName('block');

    for (let block of blocks) {
        console.log(block);

        block.addEventListener("mouseover", () => {
            console.log(block);

            if (block.className.indexOf('active') !== -1) {
                block.classList.remove('active');
            } else {
                block.classList.add('active');
            }
        });
    }
};*/

/*onMouseOver = "window.document.images['section2Back'].src = 'section2-2Back.png';"
onMouseOut = "window.document.images['section2Back'].src = 'section2Back.png"; */

/*let block = document.getElementById('block');
function changeBgImg() {
    block.style.backgroundImage = "blue";
}
changeBgImg();*/

/* document.getElementById("block").onmouseover = function() {
    this.style.backgroundColor = "blue";
} */