
var quotes = [  {quote : '"You only live once, but if you do it right, once is enough."' , owner : "--Mae West" , photo :  '<img src="images/Mae West.jpeg" alt="Mae West">'} ,
                {quote : '"Be the change that you wish to see in the world."' , owner : "--Mahatma Gandhi" , photo :  '<img src="images/Mahatma Gandhi.jpeg" alt="Mahatma Gandhi">'} , 
                {quote : '"Always forgive your enemies; nothing annoys them so much."' , owner : "--Oscar Wilde" , photo :  '<img src="images/Oscar Wilde.jpeg" alt="Oscar Wilde">'} , 
                {quote : '"A friend is someone who knows all about you and still loves you."' , owner : "--Elbert Hubbard" , photo :  '<img src="images/Elbert Hubbard.jpeg" alt="Elbert Hubbard">'} , 
                {quote : '"If you tell the truth, you do not have to remember anything."' , owner : "--Mark Twain" , photo :  '<img src="images/Mark Twain.jpeg" alt="Mark Twain">'} ,
                {quote : '"Live as if you were to die tomorrow. Learn as if you were to live forever."' , owner : "--Mahatma Gandhi" , photo :  '<img src="images/Mahatma Gandhi.jpeg" alt="Mahatma Gandhi">'} ,
                {quote : '"A day without sunshine is like, you know, night."' , owner : "--Steve Martin" , photo :  '<img src="images/Steve Martin.jpeg" alt="Steve Martin">'} ,
                {quote : '"For every minute you are angry you lose sixty seconds of happiness."' , owner : "--Ralph Waldo Emerson" , photo :  '<img src="images/Ralph Waldo Emerson.jpeg" alt="Ralph Waldo Emerson">'} ,
                {quote : '"That which does not kill us makes us stronger."' , owner : "--Friedrich Nietzsche" , photo : '<img src="images/Friedrich Nietzsche.jpeg" alt="Friedrich Nietzsche">'} ,
                {quote : '"It is never too late to be what you might have been."' , owner : "--George Eliot" , photo :  '<img src="images/George Eliot.jpeg" alt="George Eliot">'}  ];

var generatedIndex;

function showingNewQuote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    if (randomIndex == generatedIndex){
        showingNewQuote();
    }
    else{
        document.getElementById("quote").innerHTML = quotes[randomIndex].quote;
        document.getElementById("quoteOwner").innerHTML = quotes[randomIndex].owner;
        document.getElementById("quoteOwnerImg").innerHTML = quotes[randomIndex].photo;
    }
    generatedIndex = randomIndex;
}

