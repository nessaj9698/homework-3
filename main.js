const $btn = document.getElementById('btn-kick');
const character = {
    name:'Pikachu',
    defaultHP: 100,
    damageHP:60,
    elHP:document.getElementById('health-character'),
    elProgressbar:document.getElementById('progressbar-character'),
};

const enemy = {
    name:'Pikachu',
    defaultHP: 100,
    damageHP:100
};
$btn.addEventListener('click', function () {
console.log('Kick');
changeHP(random(20), character);
changeHP(random(20), enemy);
})

function init() {
    console.log('Start game');
    renderHPLife(character);
    renderProgressbarHP(character);
}

function renderHPLife (person) {
const $character = document.getElementById('health-character');
person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP (person) {
person.elProgressbar.style.width = person.damageHP + '%';
}

init();
