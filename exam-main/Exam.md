
## Exam:
Create a new repository on your Github and name it 'Grades-Tracker'.

### Build a one-page website using HTML, CSS, and Vanilla Javascript. The wireframe of the targeted page is attached to Slack.
You will be building a simple webpage which contains the information about students and their grades.

As a user, I would like to be able to add students grades in specific courses so I can track the grades.
- Create a form in order to add the student name and course. 
The course should be one of a predefined list that contains the following courses: 
Arabic, English, Math, Science, Art

- Whenever you add a new student, you should generate the student's grade as an integer random number between 0 and 100.

As a user, I would like to view all of my students that I already added so that I can quickly view their grades.
- Whenever you add a student using the form, you should use the local storage in order to get all the students from it and render them as a table using DOM.

- Add a clear button under the table, that when clicked will clear the table and the local storage

- Add a fourth column to the table and fill it with "Fail" if the grade in that row is less than 50, and "Pass" otherwise 


## ******************************************************


### Do this work on the 'main' branch.

1. Create an HTML file and convert the wireframe into HTML structure.

2. Create a CSS file to apply the style.
- The used font is "Roboto" -> google font.

3. Create a js file to handle the functionality.
- Handle adding the students to the table and local storage.
- Handle calculating the random grade.
- Handle getting the students from the local storage and rendering them.

- Handle clearing the table and the local storage

- Add "Fail" if the grade in that row is less than 50, and "Pass" otherwise in a new column in the table

## ******************************************************


practices: 

Q1 -
``` 
const snorlaxData = {
  stats: [
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/6/",
        name: "speed",
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/5/",
        name: "special-defense",
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/4/",
        name: "special-attack",
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: "snorlax",
  weight: 4600,
};

```


Write a function named extractState that, given the snorlaxData, to return the object whose 'name' property matches the given string.

If the input array does not have a stat with that specific name, the function should return null.

```
const extractStat = (statName, arr) => {
  // Solution code here...
};

```


//test: extractStat("speed", snorlaxData.stats) => { stat: { url: "https://pokeapi.co/api/v2/stat/6/", name: "speed" }, effort: 5, baseStat: 30}



Q2 - 

```
const characters = [
  {
    name: "Eddard",
    spouse: "Catelyn",
    children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: "Lysa",
    children: ["Robin"],
    house: "Arryn",
  },
  {
    name: "Cersei",
    spouse: "Robert",
    children: ["Joffrey", "Myrcella", "Tommen"],
    house: "Lannister",
  },
  {
    name: "Daenarys",
    spouse: "Khal Drogo",
    children: ["Drogon", "Rhaegal", "Viserion"],
    house: "Targaryen",
  },
  {
    name: "Mace",
    spouse: "Alerie",
    children: ["Margaery", "Loras"],
    house: "Tyrell",
  },
  {
    name: "Sansa",
    spouse: "Tyrion",
    house: "Stark",
  },
  {
    name: "Jon",
    spouse: null,
    house: "Snow",
  },
];
```

a- Write a function named countNumberOfChildren that, given the array of characters, return the total number of children in the data set.

```
const countNumberOfChildren = (arr) => {
  // Solution code here...
};
```


//test: countNumberOfChildren(characters) => 14


b- Write a function named extractChildren that, given the array of characters from a, accomplishes the following:

1) return an array of the characters that contain the letter 'a' in their name

2) then the final return an array of all the children's names in the filtered array

```
const extractChildren = (arr) => {
  // Solution code here...
};
```

//test: extractChildren(characters) => ["Robb","Sansa","Arya","Bran","Rickon","Drogon","Rhaegal","Viserion", "Margaery","Loras"]
      
      
      
     

