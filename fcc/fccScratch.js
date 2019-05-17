/* const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(arr => arr > 0 && arr % 1 == 0).map(arr => arr * arr);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); */

/* let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8 */

/* const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
    let [a, b, ...arr] = list; // change this
  // change code above this line
  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10]; */

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return ({max, min}) =>
    {return (max + min) / 2.0;}
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015 */

/* const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = arr.map(x => `<li class="text-warning">${x}</li>`);
    // change code above this line

    return resultDisplayArray;
  }
  //
   * makeList(result.failure) should return:
   * [ <li class="text-warning">no-var</li>,
   *   <li class="text-warning">var-on-top</li>,
   *   <li class="text-warning">linebreak</li> ]
   * */
// const resultDisplayArray = makeList(result.failure);

/*
  function makeClass() {
    "use strict";
    // Alter code below this line
    class Thermostat {
      constructor(tempInF) {
        this._tempInF = tempInF;
      }
      get temperature(){
        return (5/9 * (this._tempInF - 32));
      }
      set temperature(tempInC){
        this._tempInF = (tempInC * 9.0 / 5 + 32);
        // F = C * 9.0 / 5 + 32
      }
    }
    // Alter code above this line
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C

let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(\s+)$/; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
let blah = "hello";
*/

/*
// the global variable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

//This function should add a book to the list and return the list
// New parameters should come before the bookName one

// Add your code below this line
function add(myBookList, bookName) {
  const inputBookList = myBookList.slice(0);
  inputBookList.push(bookName);
  return inputBookList;

  // Add your code above this line
}

// This function should remove a book from the list and return the list
// New parameters should come before the bookName one

// Add your code below this line
function remove(myBookList, bookName) {
  const outputBookList = myBookList.slice(0);
  if (outputBookList.indexOf(bookName) >= 0) {
    outputBookList.splice(outputBookList.indexOf(bookName), 1);

    // Add your code above this line
  }
  return outputBookList;
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(
  bookList,
  'On The Electrodynamics of Moving Bodies',
);
const newestBookList = remove(
  add(bookList, 'A Brief History of Time'),
  'On The Electrodynamics of Moving Bodies',
);

// console.log(bookList);
*/

// the global variable
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
    Plot:
      'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot:
      'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];

// Add your code below this line

/*
const rating = watchList.map((x) => {
  const rObj = {};
  rObj.title = x.Title;
  rObj.rating = x.imdbRating;
  return rObj;
}); */

// for(var i=0; i < watchList.length; i++){
//  rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// }

/* let hello = "   Hello, World!  ";
 let wsRegex = /^(\s+)(\s+)$/; // Change this line
 let result = hello.replace(wsRegex, ""); // Change this line
 let blah ="hello"; */

/* function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
    for (let i = 0; i < arr.length; i++){
      if (arr[i].indexOf(elem) == (-1) ){
        newArr.push(arr[i]);
      }
    }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

*/

/*
let myNestedArray = [
  // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
    [
      ['deep'],
      [
        ['deeper'],
        [
          ['deepest']
        ]
      ]
    ]
  // change code above this line
];

*/

/* let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
let myArr = ['oranges', 'plums', 'strawberries'];
delete foods[...myArr];

// change code above this line

console.log(foods); */

/* let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
    // change code below this line
    let myArr = Object.keys(obj);

    // change code above this line
}

console.log(getArrayOfUsers(users)); */

/* function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i<arr.length; i++){
    if (func(arr[i])){
      return i;
    }
  }
  return;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); */

/* function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  const arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1.slice());
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
*/

/* // the global Array
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  let newArray = [];
  // Add your code below this line
  //s.forEach(function(x) {
  //  newArray.push(callback(x));
  //});
  s.forEach = (x) => newArray.push(callback(x));
  // Add your code above this line
  return newArray;
};

const newS = s.myMap(function(item) {
  return item * 2;
});
console.log(newS); */

/* const rating = watchList.map((x) => {
  const rObj = {};
  rObj.rating = x.imdbRating;
  return rObj;
}); */

/* const movies = watchList.filter((x) => x.Director === 'Christopher Nolan');
const rating = movies.map((x) => parseFloat(x.imdbRating, 10));

const sum = rating.reduce((x, y) => {
  return x + y;
});
let averageRating = sum / rating.length; */

/* const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  const newArr = arr.concat([]);
  newArr.sort();

  // Add your code above this line
}
nonMutatingSort(globalArray); */

/* function splitify(str) {
  // Add your code below this line
  const bob = str.split(/[ .,]+/);
  return bob;
  // Add your code above this line
}
splitify('Hello World,I-am code'); */

// the global variable
/* const globalTitle = ' Winter Is   Coming';
// const globalTitle = 'Winter Is Coming';

// Add your code below this line
function urlSlug(title) {
  const myStr = title.trim();
  const outputVar = myStr.split(/\W+/);
  const bob = outputVar.map((x) => x.toLowerCase());
  return bob.join('-');
}
// Add your code above this line

const winterComing = urlSlug(globalTitle); // Should be "winter-is-coming" */

function checkPositive(arr) {
  // Add your code below this line
  return arr.every((x) => x > 0);

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
