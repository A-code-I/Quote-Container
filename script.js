const quotContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const quoteAuthor=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');


let apiQuotes=[];
//Show Quote
function newQuote(){
    //Pick a random quote from apiQuotes array
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteAuthor.textContent=quote.author;
    quoteText.textContent=quote.text;
    console.log(quote);
}

//Get Quotes from API
async function getQuotes(){
    const apiurl='https://type.fit/api/quotes';
    try {
        const response=await fetch(apiurl);
        apiQuotes=await response.json();
        // console.log(apiQuotes);
        newQuote();
    } catch (error) {
        //catch error here
    }
}

//On Load
getQuotes();
