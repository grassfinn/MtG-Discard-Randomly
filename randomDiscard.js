

function discardRandomly(hand) {
    const currentHand = Array(hand).fill(0)
    const cardsToDiscard = []
    for (let i = 0; i < 3; i++) {
        const randomCard = Math.floor(Math.random() * currentHand.length) + 1
        cardsToDiscard.push(randomCard)
        currentHand.shift()
    }
    console.log(cardsToDiscard)
    return cardsToDiscard

}

function handleSubmit(e) {
    const resultsElem = document.getElementById('results')
    const input = userInput

    resultsElem.replaceChildren('')

    if (!input.value) return
    const cardsToDiscard = discardRandomly(+input.value)
    if (e.target.id === 'reset') {
        input.value = ''
        resultsElem.replaceChildren('')
        return
    }

    for (let i = 0; i < cardsToDiscard.length; i++) {
        const h2 = document.createElement('h2')
        h2.textContent = cardsToDiscard[i]
        resultsElem.append(h2)
    }
}


submit.addEventListener('click', handleSubmit)
reset.addEventListener('click', handleSubmit)