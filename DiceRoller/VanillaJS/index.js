const NUMBER_OF_FACES = 6;
const MIN_NUMBER_OF_DICE = 1;
const MAX_NUMBER_OF_DICE = 12;

const DICE_FACE_DOT_POSITIONS = {
    1: ['dot--center'],
    2: ['dot--top-right', 'dot--bottom-left'],
    3: ['dot--top-right', 'dot--center', 'dot--bottom-left'],
    4: [
        'dot--top-left',
        'dot--top-right',
        'dot--bottom-left',
        'dot--bottom-right',
    ],
    5: [
        'dot--top-left',
        'dot--top-right',
        'dot--center',
        'dot--bottom-left',
        'dot--bottom-right',
    ],
    6: [
        'dot--top-left',
        'dot--top-right',
        'dot--center-left',
        'dot--center-right',
        'dot--bottom-left',
        'dot--bottom-right',
    ],
};

let rolledDice = []

const onLimitInput = () => {
    const input = document.getElementById('dice-input')
    input.setAttribute('min', MIN_NUMBER_OF_DICE)
    input.setAttribute('max', MAX_NUMBER_OF_DICE)
}

const rollDice = (numberOfDice) => {
    return Array.from({ length: numberOfDice }, () =>
        Math.max(Math.ceil(Math.random() * NUMBER_OF_FACES), 1),
    );
}

const handleOnSubmit = () => {
    const form = document.querySelectorAll('.dice-form')[0]
    form.onsubmit = function (e) {
        e.preventDefault()
        const data = new FormData(e.target);
        const numberOfDice = +data.get('dice-count');
        rolledDice = rollDice(numberOfDice)
        drawDice()
    }
}

const Dice = (value) => {
    let dots = ''
    console.log(DICE_FACE_DOT_POSITIONS[value]);
    DICE_FACE_DOT_POSITIONS[value].forEach((dotPosition) => {
        dots += `<div class='${['dot', dotPosition].join(' ')}'>
          </div>`
    })
    return `
  <div class="dice">
    <div class="dots">
      ${dots}
    </div>
  </div>
`
}


const drawDice = () => {
    const container = document.querySelectorAll('.dice-list')[0]
    container.classList.remove('hidden')
    let result = ''
    rolledDice.forEach((dice) => {
        result += Dice(dice)
    })
    container.innerHTML = result
}


window.addEventListener('load', function () {
    onLimitInput()
    handleOnSubmit()
})