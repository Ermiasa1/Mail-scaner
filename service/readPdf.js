let fs = require('fs'),
PDFParser = require("pdf2json");

function readpdf(){
let pdfParser = new PDFParser(); 
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        console.log(JSON.stringify(pdfData).toString().includes("java"));
        fs.writeFile("./attachFiles/resume/sample.json", JSON.stringify(pdfData));
    });
    pdfParser.loadPDF("./pdf2json/test/sample.pdf");
}
