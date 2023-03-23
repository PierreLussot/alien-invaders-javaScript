//selection des elements html

let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

btn.onclick = function () {
  let score = 0;
  let time = 60;

  container.innerHTML = "";
  let interval = setInterval(function showTarget() {

    //creation de la cible

    let target = document.createElement("img");
    target.id = "target";
    target.src = "alien.png";
    container.appendChild(target);
    target.style.top = Math.random() * (500 - target.offsetHeight) + "px";
    target.style.left = Math.random() * (550 - target.offsetWidth) + "px";

    //faire apparaitre la cible dans un interval de temp entre 500s & 2000s

    function radomTime(max) {
      let time = Math.floor(Math.random() * max);
      if (time > 500) {
        console.log(time);
        return time;
      }
    }

    //faire disparaitre la cible

    setTimeout(function () {
      target.remove();
    }, radomTime(2000));

    //quand on clique sur la target

    target.onclick = function () {
      score += 1;
      target.style.display = "none";
    };
    time -= 1;

    //aficher les infos

    scoreContainer.innerHTML = `Score : ${score}`;

    timeContainer.innerHTML = `Temps : ${time}`;

    if (time === 0) {
      clearInterval(interval);
      container.innerHTML = "Le jeux est terminé";
    }
  }, 1000);
};
