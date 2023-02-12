const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = Quote => {
    const blockQuote = document.getElementById('qoute')
    blockQuote.innerText = Quote.quote;
}