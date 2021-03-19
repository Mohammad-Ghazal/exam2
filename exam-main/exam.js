let names= ['ghazal','khamis','amro']

let ghazal=khamis=amro ={'Arabic':0, 'English':0, 'Math':0, 'Science':0, 'Art':0};
let students= [ghazal,khamis,amro]
let index=-0;
students.forEach(student => {
    
 for(key in student) {
      if (Object.hasOwnProperty.call(student, key)) {
      student[key]=  Math.floor(Math.random()*100);
      if(student[key]<50)
      student[key]['result']='Fail';
      else
      student[key]['result']='Pass';

     
      
      index++;
  }  }

});
console.log(students);


const body= document.querySelector('body')
const table_results=document.createElement('ul')


// let table=''+ students.reduce((previous, studentObj) => {
//     previous+= `<ul class=\'raw\'> 'GHazal'</ul>  <ul class=\'raw\'> 'GHazal'</ul> `;
//     console.log(previous);
    
// }, '');

const table=  names.reduce((result, current) => {
    let line_one=''
    students.forEach(student => {
   
    
        for(key in student) {
             if (Object.hasOwnProperty.call(student, key)) {
             student[key]=  Math.floor(Math.random()*100);
             if(student[key]<50)
             student[key]['result']='Fail';
             else
             student[key]['result']='Pass';
             index++;
         }  
         console.log(student);
         
        }
        line_one+=` <uli >${student['Arabic']}</li> `


       });
    
       result+=`<ul>${current} Arabic <ul><li> ${line_one}</li> </ul> `;


       return result;
   }, '');

table_results.innerHTML=table;


//'<ul class=\'raw\'>hello</ul> <ul class=\'raw\'>hello</ul>'
body.append(table_results)

//            object[key] =

// console.log(ghazal.Arabic);
// console.log(khamis.English);

