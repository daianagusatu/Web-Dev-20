function genQuote() {
    let randNum = Math.floor(Math.random() * 4) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    let linkedinQuote = quotes[randNum].split(' ').join('%20');
    linkedinQuote = tweetQuote.split('<br>').join('');
    
    $('.twitter-share-button').attr('href', linkedinQuote);
  }
  
  //quote array
  let quotes = ["Blank", "\"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.\" - William W. Purkey", "\"You only live once, but if you do it right, once is enough.\"- Mae West", "\"To live is the rarest thing in the world. Most people exist, that is all.\"- Oscar Wilde", "\"Life isn't about finding yourself. Life is about creating yourself.\"- George Bernard Shaw"];

 