


(function(){


  //Creating an Object in order to have multiple quotes
  function Quote(content, said, likes) {
    this.content = content;
    this.said = said;
    this.likes = likes;
  };

  var quoteOne = new Quote("I've got a Dungeon Master's Guide. I've got a 12 sided die.", "-Weezer", 0);

  var quoteTwo = new Quote("A couple thousand days full of every emotion. It's enough to know a woman as much as a man can.", "-Los Growlers", 0);

  var quoteThree = new Quote("His cigarette is burning, but he never seems to ash. He is grooming his poodle, He is living comfort eagle. You can meet at his location but you better come with cash.", "-CAKE", 0);

  var quoteFour = new Quote("Too much of anything is bad, but too much good whiskey is barely enough.", "-Mark Twain", 0);

  var quoteFive = new Quote("Adios, adios, you probably think I don't know what that means. Rock'n Roll, Rock'n Roll, you probably don't understand what I mean.", "-The Front Bottoms", 0);

  //Creating an array of objects in order to grab what I need when I need it.
  var quoteArray = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive];


  console.log(quoteArray[3].likes);

  var position = 0;

  //This is how I will render my content to the DOM.
  //It took me a good bit of trial and error using the vanilla methods.
  //Most of my experience displaying content comes from jQuery, React, and Backbone
  var quoteElement = document.getElementById('quote');
  var authorElement = document.getElementById('author');
  var likeElement = document.getElementById('likes');
  var newLikesOne = quoteArray[position].likes;
  var newAuthorOne = quoteArray[position].said;
  var newQuoteOne = quoteArray[position].content;

  //After messing around with innerHTML and createElement methods, innerHTML was more simple
  //and less complicated to deal with. It led to some html changes but that was no issue.
  quoteElement.innerHTML = newQuoteOne;
  authorElement.innerHTML = newAuthorOne;
  likeElement.innerHTML = newLikesOne;

  console.log(newQuoteOne);

  //Function to handle the click event of the right arrow. It will increment up through the array's position
  var nextQuote = document.getElementById('next-arrow').addEventListener('click', function(event){
    authorElement.innerHTML = "";
    quoteElement.innerHTML = "";

    //Here I set some conditions on handling the increment once you pass what content you have in the array.
    //Setting it to position = 0 within the else allows for the quotes to cycle through.
    if(position <= 3) {
      position++
    }else {
      position = 0
    }

    newLikesOne = quoteArray[position].likes;
    newAuthorOne = quoteArray[position].said;
    newQuoteOne = quoteArray[position].content;
    quoteElement.innerHTML = newQuoteOne;
    authorElement.innerHTML = newAuthorOne;
    likeElement.innerHTML = newLikesOne;
  });

  //Applied the same logic to the left arrow.
  var previousQuote = document.getElementById('prev-arrow').addEventListener('click', function(event){
    authorElement.innerHTML = "";
    quoteElement.innerHTML = "";

    if(position >= 1) {
      position--
    }else{
      position = 3
    }

    newLikesOne = quoteArray[position].likes;
    newAuthorOne = quoteArray[position].said;
    newQuoteOne = quoteArray[position].content;
    quoteElement.innerHTML = newQuoteOne;
    authorElement.innerHTML = newAuthorOne;
    likeElement.innerHTML = newLikesOne;
  })


  //Create a click event listener, update likes within out objects, and render that to the DOM.

  var likeButton = document.getElementById('like-button').addEventListener("click", function(event){
    quoteArray[position].likes++;
    likeElement.innerHTML = "";
    newLikesOne = quoteArray[position].likes;
    likeElement.innerHTML = newLikesOne;
  });


}());
