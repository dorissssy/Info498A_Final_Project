const QUOTES = [
    {
      "Quotes": "I've had to accept that - that everyone cannot love me. Because when there's love, there's hate. When there's light, there's dark. But it was really hard to accept as an artist that there's a lot of people that hate me, but on the other side, there are many more people who love me. I think everyone goes through that.",
      "member": "RM"
    },
    {
      "Quotes": "I’m like a surfer, first you just paddle and fall off the board but as time goes by you can stand up on the bigger waves.",
      "member": "RM"
    },
    {
      "Quotes": "We’re on some path that’s set since we’re born, but I still believe we can change some things. So I believe in my faith but I still don’t believe in my fate.",
      "member": "RM"
    },
    {
      "Quotes": "Popularity is a bubble. It's a mountain: you can go up really hard but walk down really fast.",
      "member": "RM"
    },
    {
      "Quotes": "If you want to love others, I think you should love yourself first.",
      "member": "RM"
    },
    {
      "Quotes": "Humans seem to be programmed to think of ambivalent feelings at the same time. That is the driving force behind human beings: to be the warrant of all things and to control other worlds.",
      "member": "RM"
    },
    {
      "Quotes": "Effort makes you. You will regret someday if you don’t do your best now. Don’t think it’s too late but keep working on it. It takes time, but there’s nothing that gets worse due to practicing. So practice. You may get depressed, but it’s evidence that you are doing good.",
      "member": "Jungkook"
    },
    {
      "Quotes": "Living without passion is like being dead.",
      "member": "Jungkook"
    },
    {
      "Quotes": "Don't be trapped in someone else's dream.",
      "member": "V"
    },
    {
      "Quotes": "Purple is the last color of the rainbow. Purple means I will trust and love you for a long time.",
      "member": "V"
    },
    {
      "Quotes": "I have a big heart full of love, so please take it all.",
      "member": "V"
    },
    {
      "Quotes": "Those who want to look more youthful should live life with a young heart.",
      "member": "Jin"
    },
    {
      "Quotes": "Your presence can give happiness. I hope you remember that.",
      "member": "Jin"
    },
    {
      "Quotes": "When something is delicious. It's zero calories.",
      "member": "Jin"
    },
    {
      "Quotes": "If we all gather our embarrassment together, it’ll become confidence.",
      "member": "Jin"
    },
    {
      "Quotes": "Those who keep trying without giving up are the ones who succeed.",
      "member": "Jin"
    },
    {
      "Quotes": "Go on your path, even if you live for a day.”",
      "member": "Jimin"
    },
    {
      "Quotes": "Once your heart is moved, it will develop to something better and positive.",
      "member": "Jimin"
    },
    {
      "Quotes": "I hope you will never give up. Remember there is a person here in Korea, in the city of Seoul, who understands you.",
      "member": "Jimin"
    },
    {
      "Quotes": "Even when this rain stops, when clouds go away, I stand here, just the same.",
      "member": "J-Hope"
    },
    {
      "Quotes": "The music helped me sympathize with our young generation and also empathize with them. I'd like to create and write more music that represents them.",
      "member": "J-Hope"
    },
    {
      "Quotes": "When things get tough, look at the people who love you! You will get energy from them.",
      "member": "J-Hope"
    },
    {
      "Quotes": "Life is tough, and things don't always work out well, but we should be brave and go on with our lives.",
      "member": "Suga"
    },
    {
      "Quotes": "Emotions are so different in every situation and every moment, so I think to agonize every moment is what life is.",
      "member": "Suga"
    },
    {
      "Quotes": "Please don’t be afraid, don’t worry yourself. The end and beginning, beginning and end are connected.",
      "member": "Suga"
    }
   ]


let quoteToDisplay = "";
let memberToDisplay = "";

function getRandomQuote() {
    const randomInt = Math.floor(Math.random() * (24 + 1));
    quoteToDisplay = QUOTES[randomInt].Quotes;
    memberToDisplay = QUOTES[randomInt].member;
    return "\"" + quoteToDisplay + "\"" + "  -  " + memberToDisplay;
}

function displayQuote() {
    document.getElementById('quote-text').innerHTML = getRandomQuote();
}

//console.log(getRandomQuote());