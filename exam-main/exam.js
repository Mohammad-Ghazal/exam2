let names = ["ghazal", "khamis", "amro"];
let clsses = ["Arabic", "English", "Math", "Science", "Art"];

let ghazal, khamis, amro;
let students = [];
const randomMark = function () {
  return Math.floor(Math.random() * 100);
};
// students.forEach(student => {
//  for(key in student) {
//       student[key]=  randomMark();
//       console.log( student[key]);

//    }

// });

// console.log(students);

const body = document.querySelector("body");
const table_results = document.createElement("ul");

// let table=''+ students.reduce((previous, studentObj) => {
//     previous+= `<ul class=\'raw\'> 'GHazal'</ul>  <ul class=\'raw\'> 'GHazal'</ul> `;
//     console.log(previous);

// }, '');
let index = 0;
let line_one = "";
line_one += ` <td> ${names[index]}</td>`;
let result = clsses.reduce((previous, current) => {
  previous += `<td> ${current} </td>`;
  return previous;
}, "");

let table = "";
names.forEach(function (stName, index) {
  students[index] = { Arabic: 0, English: 0, Math: 0, Science: 0, Art: 0 };
  for (key in students[index]) {
    students[index][key] = randomMark();
  }

  table += `<tr>
<td>${stName}</td>
<td>${students[index][clsses[0]]}</td>
<td>${students[index][clsses[1]]}</td>
<td>${students[index][clsses[2]]}</td>
<td>${students[index][clsses[3]]}</td>
<td>${students[index][clsses[4]]}</td>
</tr> `;
});
/*
//     students.forEach(student => {
//         for(key in student) {
//              if (Object.hasOwnProperty.call(student, key)) {
//              student[key]=  Math.floor(Math.random()*100);
//              if(student[key]<50)
//              student[key]['result']='Fail';
//              else
//              student[key]['result']='Pass';
//              index++;
//          }
//          console.log(student);

//         }
//         line_one+=`<td> ${student['Arabic']}</ur> `

//        result+=`<tr>${name}  ${line_one}</tr> `;

//    }
*/
table_results.innerHTML =
  `<table class="styled-table"> 
  <tr class="active-row"> 
  <th>name  </th>` +
  result +
  table +
  "</table>";
//console.log(result);

//'<ul class=\'raw\'>hello</ul> <ul class=\'raw\'>hello</ul>'
body.append(table_results);

//            object[key] =

// console.log(ghazal.Arabic);
// console.log(khamis.English);
