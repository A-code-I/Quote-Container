const quotContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const quoteAuthor=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

let apiQuotes=[];

//Show loading
function loading(){
    loader.hidden=false;
    quotContainer.hidden=true;
}

//Hide loader
function complete(){
    quotContainer.hidden=false;
    loader.hidden=true;
}

//Show Quote
function newQuote(){
    loading(); 
    //Pick a random quote from apiQuotes array
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //Check if author value is blank and replace empty author with 'Unknown'
    if(!quote.author){
        quoteAuthor.textContent='unknown'; 
    }
    else{
        quoteAuthor.textContent=quote.author;
    }
    
    // Check the quoe length to determine the CSS styling
    if(quote.text.length>70){
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote'); 
    }
    // set the quote , hide loading
    quoteText.textContent=quote.text;
    complete();
    // console.log(quote);
}

//Get Quotes from API
async function getQuotes(){
    loading();
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

//Tweet Quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl,'_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuotes();
// loading();
