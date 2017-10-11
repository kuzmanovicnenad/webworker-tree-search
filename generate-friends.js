let friends = [
  "Jaclyn",
  "Craig",
  "Perry",
  "Bailey",
  "Laurel",
  "Margery",
  "Dodson",
  "England",
  "Mooney",
  "Glenda",
  "Brittany",
  "Carol",
  "Pamela",
  "Joseph",
  "Finch",
  "Maddox",
  "Holloway",
  "Wilson",
  "Nannie",
  "Nadia",
  "Alicia",
  "Morales",
  "Chapman",
  "Sullivan",
  "Horn",
  "Oconnor",
  "Juana",
  "Jill",
  "Alexandra",
  "Erica",
  "Berg",
  "Blanca",
  "Hoffman",
  "Christi",
  "Minnie",
  "Erickson",
  "Bobbi",
  "Guerrero",
  "Sharlene",
  "Kristie",
  "Mccarthy",
  "Byers",
  "Mabel",
  "Hays",
  "Frieda",
  "Freeman",
  "Lester",
  "Dollie",
  "Aline",
  "Kimberley",
  "Gates",
  "Phelps",
  "Lidia",
  "Allison",
  "Lloyd",
  "Alyson",
  "Weber",
  "Arnold",
  "Felecia",
  "Macias"
];

let result = {};

let numberOfPeople = process.argv[2] || 60;
let numberOfFriends = process.argv[3] || 10;

let configFriends = friends.slice(0, numberOfPeople)

for(let friend of configFriends) {
    let people = [];
    for(let i = 0; i < numberOfFriends; i++) {
        people.push(configFriends[Math.floor(Math.random() * numberOfPeople)])
    }
    result[friend] = {
        name: friend,
        friends: people
    }
}

const fs = require('fs');
const content = "var friends = " + JSON.stringify(result);

fs.writeFile("./friends.js", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
