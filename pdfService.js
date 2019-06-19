var pdfreader = require("pdfreader");
const pdf = require('pdf-parse');
const fs = require('fs');
var docxParser = require('docx-parser'); 
const testFolder = "./resumeAttachment/pdfFiles/";

//this function  reads the doc file and displays the text
module.exports ={
    pdReader : function pdReader(){  
  
  fs.readdir(testFolder, (err, files) => {
         
      files.forEach(file => {    
     
      var rows = {}; // indexed by y-position
         
      function printRows() {
        Object.keys(rows) // => array of y-positions (type: float)
          .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
          .forEach(y => console.log((rows[y] || []).join("")));
      }
      new pdfreader.PdfReader().parseFileItems("./resumeAttachment/pdfFiles/"+ file, function(err, item) {
      
          if (!item || item.page) {
            // end of file, or page
            printRows();
            console.log( item);
          //   console.log("PAGE:", item.page);
            rows = {}; // clear rows for next page
          } else if (item.text) {
            // accumulate text items into rows object, per line
            (rows[item.y] = rows[item.y] || []).push(item.text);
          }
        });
  
     
  
      })
    });
  }
  }





  // function no 1

//this functio  reads the pdf file displays the text
// function pdReader(fileAdress){    

//       var rows = {}; // indexed by y-position
       
//       function printRows() {
//         Object.keys(rows) // => array of y-positions (type: float)
//           .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
//           .forEach(y => console.log((rows[y] || []).join("")));
//       }
//       new pdfreader.PdfReader().parseFileItems('./pdfFiles/'+ fileAdress, function(err, item) {
      
//           if (!item || item.page) {
//             // end of file, or page
//             printRows();
//             console.log( item);
//           //   console.log("PAGE:", item.page);
//             rows = {}; // clear rows for next page
//           } else if (item.text) {
//             // accumulate text items into rows object, per line
//             (rows[item.y] = rows[item.y] || []).push(item.text);
//           }
//         });
//       }

// no 2 function
//'''''''''''''''''''''''
// // // this function extracts text from pdf file

// function textExtractor(fileAdress){

//  let dataBuffer = fs.readFileSync('./pdfFiles/'+fileAdress);
 
// pdf(dataBuffer).then(function(data) {
 
//     // number of pages
//     console.log(data.numpages);
//     // number of rendered pages
//     console.log(data.numrender);
//     // PDF info
//     console.log(data.info);
//     // PDF metadata
//     console.log(data.metadata); 
//     // PDF.js version
//     // check https://mozilla.github.io/pdf.js/getting_started/
//     console.log(data.version);
//     // PDF text
//     console.log(data.text); 
        
// });
// }  

// textExtractor("Ermias Okbazghi resume.pdf");