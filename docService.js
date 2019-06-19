var docxParser = require('docx-parser'); 
const testFolder = "./resumeAttachment/docFiles/";
const fs = require('fs');

module.exports ={
    docConverter :function docConverter(){

        fs.readdir(testFolder, (err, files) => {               
            files.forEach(file => {                     
            console.log("file" + file);             
            docxParser.parseDocx("./resumeAttachment/docFiles/"+file, function(data){
            console.log(data);
            return data;
        });      
          });
        ; 
        });
        }
};



// file readers:   

// the below functions can read files from folders  
// You can use the fs.readdir or fs.readdirSync methods.

// fs.readdir     ...No1

// const testFolder = './tests/';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

// fs.readdirSync....No 2

// const testFolder = './tests/';
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
//   console.log(file);
// });
// The difference between the two methods, is that the first one is asynchronous, so you have to provide
//  a callback function that will be executed when the read process ends.

// The second is synchronous, it will return the file name array, but it 
// will stop any further execution of your code until the read process ends.  
   


// doc converter :  convertig docx to plain text in terminal.


// var docxParser = require('docx-parser');

// var docCollection = "./docFiles/";
// console.log( docCollection.data);

// function docConverter(fileAdress){

// docxParser.parseDocx("./docFiles/" + fileAdress, function(data){
//         console.log(data);
//         return data;
// });
// };
