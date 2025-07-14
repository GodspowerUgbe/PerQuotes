async function getQuotes(){
    const container = document.querySelector('.quotes-container');
    
    const data = await fetch('/api/random');
    const quotes = await data.json();
    quotes.forEach((element) => {
        const quote = document.createElement('section');
        quote.classList.add('quote');
        quote.setAttribute('data-aos','fade-up')
        quote.innerHTML = `
          <p class='quote-title'>Quote by ${element.author}</p>
            <section>
            <p class='main-quote'>${element.quote}
            </p>
            <p class='author'>${element.author}</p>
            `
        container.append(quote);
        
    });
}

getQuotes()