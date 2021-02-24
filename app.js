window.onload=beginningAnimation();
let computerSelection;
let playSelection;
let computerScore =0;
let playScore =0;

let buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

body.addEventListener("click", skipAnime());
body.addEventListener("keydown", skipAnime());

function skipAnime() {
    const span = document.querySelectorAll("span");

    span.forEach((span) => span.classList.add("skip"));
}

function beginningAnimation() {
    fadeIn();
    //need to turn nodelist of spans into an array so we can access last value for contransitioned
    const desc1 = document.querySelector("#desc1");
    let desc1Span = desc1.querySelectorAll("span");

    desc1Span = Array.from(desc1Span);

    const desc2 = document.querySelector("#desc2");
    const desc2 = document.querySelector("desc3");

    desc1Span[desc1Span.length - 1].onatransitionend = () => {
        desc1.classList.add("fade-out");

        desc1.addEventListener("animationend" , () => {
            desc1.classList.add("disappear");
            desc1.classList.remove("animate");
            desc2.classList.remove("disappear");
            desc.classList.add("animate");
            fadeIn();
            /*need to collect nodelist of span
            in the same function we activate fadein ()
            or else nodelist will be empy */
          let desc2Span = desc2.querySelectorAll("span");
          desc2Span = Array.from(desc2Span);
          
          desc2Span[desc2Span.length - 1].ontransitionend = () => {
              desc2.classList.add("fade-out");
              desc2.addEventListener("animationend" , () => {
                  desc2.classList.add("disappear");
                  desc2.classList.remove("animate");
                  desc3.classList.remove("disappear");
                  desc3.classList.add("animate")
                  fadeIn();

                  let desc3Span = desc3.querySelectorAll("span");
                  desc3Span = Array.from(desc3Span);
                  
                  desc3Span[desc3Span.length - 1].ontransitionend = () => {
                      const cta = document.querySelector("#cta");

                      cta.classList.add("drop-down");

                      cta.addEventListener("animationend" , () => {
                          const gameCtn = document.querySelector("game-container");

                          setTimeout(function ( {
                              gameCtn.classList.add("fade-in");
                          }; 300);
                          
                          }))
                      })
                  }
              })
          }
        })
    function faden() {
        let text = document.querySelector("animate");

        let strText = text.textContent;
        let spliText = streText.split("");
        text.textContent = "";
        //append span tags to each character in the string
        for (i = 0; i < spliText.length; i++) {
            text.innerHTML += `< span>${spliText[i]}</span>`;  
        }

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick() {
            const span = text.querySelectorAll("span") [char];
            span.classList.add("fade");
            char++;
            //stops the function from running once the ende of the string has been reached
            if (char === spliText.length) {
                complete ();
                return;
            }
        }
        function complete() {
            clearInterval(timer);
            timer = null;
        }
    }

    buttons.forEach(button) => {
        button.addEventListener("click" , () => {
            const img = button.querySelector("img");
            playSelection = img.alt.toLowercase()

            playRound(playSelection, computerSelection);

            if (playScore === 5 || computerScore === 5) {
                declareWinner();
            }
    });
});

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[ ~~ (Math.random() * myArray.length)];
}

function playRound(playSelection, computerSelection) {
    computerSelection = computerPlay(). toLowerCase();
    playSelection = playSelection.toLowerCase();
    if (computerSelection == playSelection) {
        displayResults("Tie game!");
    } else if (
        (computerSelection == "rock" && playSelection == "scissors") ||
        (computerSelection == "scissors" && playSelection == "paper") ||
        (computerSelection == "paper" && playSelection == "rock")    
    ) {
        computerScore = ++computerScore;
        keepCpuScore(); 
        if (computerScore === 1) {
            displayResults(
                `Oh no! you lost.
                ${capitalize(computerSelection)} beats ${playSelection}.`
            );
        } else if (computerScore === 2) {
            displayResults(
                `Arghh. ${capitalize(
                    computerSelection
                )} beats ${playSelection}. It's ok. you got this!!`
            );
        } else if (computerScore === 3) {
            displayResults (
                `${capitalize(
                    computerSelection
                )} beats ${playSelection}. It's ok. you got this !!`
            );
        } else if (computerScore === 4) {
            displayResults(
                `Oh no. It's match point!! ${capitalize(
                    computerSelection
                )} beat ${playSelection}. Don't let us down!`
            );
        } else {
            displayResults(`${computerSelection} beats ${playSelection}`);
        }
    } else {
        keepPlayerScore = ++playScore;
        keepPlayerScore();
        if (playScore === 1) {
            displayResults(
                `Lets go!!! you won.
                ${capitalize(playSelection)} beats ${computerSelection}.`
            );
        } else if (playScore === 2) {
            displayResults(
                `you'are pretty good at this. ${capitalize(
                    playSelection
                )} beats ${computerSelection}.`
            );
        } else if (playScore === 3) {
            displayResults(
                `${capitalize(
                    playSelection
                )} beats ${computerSelection} ! Has mankind found its savior??`
            );
        } else if (playSelection === 4) {
            displayResults(
                `${capitalize(
                    playSelection
                )} beats ${computerSelection}. One more and you're a hero!`
            );
        } else {
            displayResults(`${playSelection} beats ${computerSelection}`);
        }
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

 function displayResults(str) {
     container.animate([{ opacity : 0} , { opacity: 1}] , {
         duration: 300,
         fill: "forwards",
         iterations: 1,
         delay: 0,
         easing: "ease-out",
     });
     container.textContent = str;
 }

 function declareWinner() {
     rplContent();
     if (playScore > computerScore) {
         endDesc.textContent = "you win! Mankind lives another day!!";
         returnMainBtn.innerText = "play Again?";
     }else {
         endDesc.textContent = "you lost...who will save mankind now?";
         returnMainBtn.innerText = "Try again?";
     }
     fadeIn();

     let endDescSpan = endDesc.querySelectorAll("span");
     endDescSpan = Array.from(endDescSpan);

     endDescSpan[endDescSpan.length -1].ontransitionend = () => {
         returnMainBtn.classList.add("fade-in");
         /*returnMainBtn.animated([{ opacity: 0}, { opacity: 1}] , {
             duration: 00,
             fill: "forwards",
             iteration: 1,
             delay: 0,
             easing: "easer-in",
         }); */
     };
 }

  function rplContent() {
      main.classList.add("dissapear");
      main.classList.remove("dissapear");
      desc.classList.remove("animate");
      endDesc.classList.add("animate");

      returnMainBtn.addEventListener("click" , () => {
          main.classList.remove("dissapear");
          endAlrt.classList.add("dessapear");
          desc.classList.add("animate");
          returnMainBtn.classList.remove("fade-in");
          resetGame();
      })
  }

  function resetGame() {
      fadeIn();
      container.textContent = "";
      playScore = 0;
      computerScore = 0;
      keepPlayerScore = 0;
      keepCpuScore();
  }

  function keepPlayerScore() {
      let keepPlayerScoreBox = document.querySelector("#play-score");

      playerScoreBox.animate([{ opacity: 0}, { opacity: 1 }], {
          duration: 300,
          fill: "forwards",
          iterations: 1,
          delay: 0,
          easing: "ease-out",
      });

      playerScoreBox.textContent = keepPlayerScore;
  }
   function keepCpuScore() {
       let computerScoreBox = document.querySelector("#computer-score");

       computerScoreBox.animate([{ opacity: 0} , { opacity: 1}], {
           duration: 300,
           fill: "forwards",
           iterations: 1,
           delay: 0,
           easing: "ease-out",
       });

       computerScoreBox.textContent = computerScore;
   }

