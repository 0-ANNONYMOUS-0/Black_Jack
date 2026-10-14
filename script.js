let message = ""
let isAlive = false
let blackJack = false
let Cards = []
let sum = 0
let MessageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")

player = 
{
    name:"Akash",
    chips:100
}

playerEl.textContent = player.name + ": ₹" + player.chips
function startGame()
{
    isAlive = true
    let Firstcard = randomCard()
    let Secondcard = randomCard()
    Cards = [Firstcard,Secondcard]
    sum = Firstcard + Secondcard
    renderGame()
}

function renderGame()
{
    sumEl.textContent = "sum: " + sum
    cardEl.textContent = "Cards:"
    for(let i = 0; i < Cards.length; i++)
    {
        cardEl.textContent += Cards[i]+" "
    }
    if(sum > 21)
    {
        message = "Game over"
        isAlive = false
    }
    else if(sum === 21)
    {
        message = "Black Jack!"
        blackJack = true
    }
    else
    {
        message = "Wanna draw one more"
    }
    
    MessageEl.textContent = message

}

function randomCard()
{
    random = Math.floor(Math.random()*13)+1
    if(random == 1) return 11
    if(random > 10) return 10
    return random 
}


function newCard()
{
    if(isAlive && !blackJack)
    {
        let new_card = randomCard()
        sum += new_card
        Cards.push(new_card)
        renderGame()
    }
}