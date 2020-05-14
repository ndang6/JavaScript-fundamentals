const myColors = ['#00BCD4', '#BDBDBD'];
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert("WHY DID YOU CLICK ME?")
});

/* --------------------------------------------- */
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const texts = ['abc', 'cdf']
let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]
const words = ["dog", "dig", "log", "bag", "map"]
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500]

/* forEach, map, filter, find, some, every */
nums.forEach(function (n, index) {
    console.log(index, n * n)
});

const caps = texts.map(function (t) {
    return t.toUpperCase().split('').join('.');
});

/* Arrow Functions */
const square = (x) => {
    return x * x;
}
const isEven = x => x % 2 === 0; // one-liner implicit return

const movie = movies.find(movie => { // returns the first element that satisfies the provided testing function
    return movie.includes("Mrs")
});

const odds = nums.filter(x => {
    return x % 2 === 1
});

const threeChar = words.every(x => {
    return x.length === 3
});

const startWithb = words.some(x => {
    return x[0] === 'b'
});

const increasing = prices.sort((a, b) => {
    return a - b
});

/* REDUCE */
const total = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

const max = [89, 96, 58, 77, 62, 93, 81, 99, 73].reduce((max, currentValue) => {
    //if (currentValue > max) return currentValue
    //return max
    return Math.max(max, currentValue)
});

const add100 = [10, 20, 30, 40, 50].reduce((sum, currentValue) => {
    return sum + currentValue
}, 100);  // initial value is given

const votes = ['y', 'y', 'y', 'n', 'y', 'n', 'n', 'y', 'n', 'y', 'n'];
const results = votes.reduce((tally, val) => {
    if (tally[val])
        tally[val]++
    else
        tally[val] = 1;

    return tally
}, {});

/* SPREAD */
const colors = ['red', 'orange', 'yellow', 'green']
function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

const firstHalf = ["Dang", "Tran"];
const secondHalf = ["Khoi", "Nguyen"]
const myName = () => {
    console.log(...firstHalf, ...secondHalf)
}

const feline = { leg: 4, family: 'Felidae' }
const lion = { ...feline, genus: 'Panthera' }

/* REST */
function sum(...nums) {
    return nums.reduceRight((sum, currVal) => {
        return sum + currVal
    });
}

/* Destructuring */
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];
const [gold, silver, bronze] = raceResults;
const [, , , fourth] = raceResults;
const [winner, ...others] = raceResults;

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Superman"
};

function print({ first, last, title }) {
    console.log(`${first} ${last}, ${title}`);
}

/* Shorthand Object Properties */
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return { max, min, sum, avg }
}

/* Computer Properties */
const role = 'Host';
const p1 = 'Jools Holland';
const role2 = 'Director';
const p2 = 'James Cameron';

const team = {
    [role]: p1,
    [role2]: p2
}

/* Keyword THIS */
function sayHi() {
    console.log("Hi!");
    console.log(this); // returns window object
}
var global = 'value';  // global is added to window object (global scope)

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const { first, last, nickName } = this;
        console.log(`Hi, this is ${first} ${last}`);
    }
}

const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase() {
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
        //console.log(this.pickPhrase())         // refers to annoyer object
        // setInterval(function(){
        //     console.log(this.pickPhrase())    // refers to window object
        // }, 3000);                       
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())       // Use arrow function to get around it
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
    }
}

const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['heart', 'diamonds', 'spades', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const { suits, values, deck } = this;
            for (let value of values.split(',')) {
                for (let suit of suits) {
                    deck.push({ value, suit });
                }
            }
        },
        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());
            }
            return cards
        },
        shuffle() {
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1)); // going backwards from arr.length down to 1
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }
}

const myDeck = makeDeck(); // This allows us to make multiple decks
myDeck.initializeDeck();
myDeck.shuffle();


