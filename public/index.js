let isAnimating = false;
let isUp = true;
let firsTime = true;

window.addEventListener('wheel', function (event) {
    const firstCard = this.document.getElementById("card1");
    const secondCard = this.document.getElementById("card2");

    const header = this.document.getElementById("header");

    const fullfilingtext = this.document.getElementById("fullfilingtext");

    const thebutton = this.document.getElementById("arrowButton");
    const thetext = this.document.getElementById("arrowText");

    if (isUp && !isAnimating && event.deltaY > 0) {
        scrollDown(firstCard, secondCard, header, fullfilingtext);

        isUp = false;
        isAnimating = true;
        this.window.setTimeout(() => isAnimating = false, 2000);

        thebutton.textContent = "↑";
        thetext.textContent = "Scroll up.";
    }
    else if (!isUp && !isAnimating && event.deltaY < 0) {
        scrollUp(firstCard, secondCard, header, fullfilingtext, firsTime);

        isUp = true;
        firsTime = false;

        isAnimating = true;
        this.window.setTimeout(() => isAnimating = false, 2000);

        thebutton.textContent = "↓";
        thetext.textContent = "Scroll down.";
    }

    event.deltaY = 0;
});

function onclickButton(){
    const firstCard = this.document.getElementById("card1");
    const secondCard = this.document.getElementById("card2");

    const header = this.document.getElementById("header");

    const fullfilingtext = this.document.getElementById("fullfilingtext");

    const thebutton = this.document.getElementById("arrowButton");
    const thetext = this.document.getElementById("arrowText");

    if (isUp && !isAnimating){
        scrollDown(firstCard, secondCard, header, fullfilingtext);

        isUp = false;
        isAnimating = true;
        this.window.setTimeout(() => isAnimating = false, 2000);

        thebutton.textContent = "↑";
        thetext.textContent = "Scroll up.";
    } else if (!isUp && !isAnimating){
        scrollUp(firstCard, secondCard, header, fullfilingtext);

        isUp = true;
        isAnimating = true;
        this.window.setTimeout(() => isAnimating = false, 2000);

        thebutton.textContent = "↓";
        thetext.textContent = "Scroll down.";
    }
}

function scrollDown(firstCard, secondCard, header, fullfilingtext, firsTime){
        // Bottom text
        fullfilingtext.style.transition = "all 6000ms";
        fullfilingtext.style.opacity = 1.0;

        // Header disapear
        header.style.animation = "headerDisappear 500ms forwards";

        //reset animation
        if (!firsTime){
            firstCard.offsetHeight;
            secondCard.offsetHeight;

            firstCard.style.transform = "translateY(10vh)";
            secondCard.style.transform = "translateY(0)";
        }

        firstCard.style.animation = "cardup 2s forwards";
        secondCard.style.animation = "cardup 2s forwards";

        firstCard.style.opacity = 1;
        secondCard.style.opacity = 0.5;
}

function scrollUp(firstCard, secondCard, header, fullfilingtext) {
    // Bottom text
    fullfilingtext.style.transition = "all 500ms";
    fullfilingtext.style.opacity = 0.0;

    // Header appear
    header.offsetHeight;
    header.style.opacity = 0;

    header.style.animation = "headerAppear 4000ms forwards";

    //reset animation
    firstCard.offsetHeight;
    secondCard.offsetHeight;

    firstCard.style.transform = "translateY(-50vh)";
    secondCard.style.transform = "translateY(-50vh)";

    firstCard.style.animation = "card2down 2s forwards";
    secondCard.style.animation = "carddown 2s forwards";

    firstCard.style.opacity = 0.5;
    secondCard.style.opacity = 1;
}

let mouseIsOver = false;
let timeoutOutId;

function mouseover(newText, id) {
    mouseIsOver = true;
    console.log(newText)

    if (id == "fullfilingtext"){
        document.getElementById(id).textContent = "";
        if (timeoutOutId) {
            clearTimeout(timeoutOutId)
        }
    }


    addLetters(newText, id);
}

function mouseleft(oldText, id) {
    mouseIsOver = false;

    // Solving multiple mouseovers issue
    if (id == "fullfilingtext") document.getElementById(id).textContent = "";
    else deleteLetters(oldText, id);
}

function addLetters(newText, id) {
    const object = document.getElementById(id);

    timeoutOutId = setTimeout(() => {
        if (object.textContent != newText && mouseIsOver) {
            object.textContent += newText[object.textContent.length]
        }

        if (mouseIsOver && object.textContent != newText) addLetters(newText, id);
    }, 30);
}

function deleteLetters(oldText, id) {
    const object = document.getElementById(id);

    setTimeout(() => {

        if (object.textContent != oldText) {
            object.textContent = object.textContent.substring(0, object.textContent.length -1)
        }

        if (object.textContent != oldText) deleteLetters(oldText, id);
    }, 30);
}

function showPortfolio(){
    console.log("Portfolio")
}