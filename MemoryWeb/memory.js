let cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh', 'ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
cantons = cantons.sort(() => Math.random() - 0.5)
const getFlagPath = function (canton) {
    return `./img/${canton}.png`;
}
let tries = 0;

document.addEventListener('DOMContentLoaded', function () {
    const playground = document.getElementById('playground');
    cantons.forEach(function (value) {
        const tile = document.createElement('button');
        const tileImage = document.createElement('img');
        tileImage.setAttribute('src', getFlagPath(value));
        tile.appendChild(tileImage);
        playground.appendChild(tile);
    });
    const activeButtons = document.getElementsByClassName("active")
    const buttons = document.querySelectorAll("button");
  const checkWin = () =>{
    if (Array.from(buttons).every(button => button.classList.contains("matched"))) {
      alert(`you won in ${tries} turns!`)
    }
  }
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (activeButtons.length >= 2) {
                if (activeButtons[0].children[0].src == activeButtons[1].children[0].src) {
                    activeButtons[1].classList.add("matched")
                    activeButtons[0].classList.add("matched")
                }
                activeButtons[1].classList.remove("active")
                activeButtons[0].classList.remove("active")

            }
            button.classList.toggle('active');
            tries++;

        })
      checkWin()

    })
});
