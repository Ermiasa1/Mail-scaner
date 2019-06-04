var MailListener = require("mail-listener4");
var keys = require("./keys.js");
var fs = require("fs");

var mailListener = new MailListener({  
  username: keys.mail.user_name, 
  password: keys.mail.pass_word,  
  host: keys.mail.host,
  port: 993, // imap port
  tls: true,
  connTimeout: 100000, // Default by node-imap
  authTimeout: 50000, // Default by node-imap,
  debug: console.log, // Or your custom function with only one incoming argument. Default: null
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  searchFilter: ["ALL"], // the search filter being used after an IDLE notification has been retrieved
  markSeen: false, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
  attachments: true, // download attachments as they are encountered to the project directory
  //attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

mailListener.start(); // start listening
 
// stop listening
//mailListener.stop();
 
mailListener.on("server:connected", function(){
  console.log("imapConnected");
});
 
mailListener.on("mailbox", function(mailbox){
  // console.log("Total number of mails: ", mailbox);
  console.log("Total number of mails: ", mailbox.messages.total); // this field in mailbox gives the total number of emails
});
 
mailListener.on("server:disconnected", function(){
  console.log("imapDisconnected");
});
 
mailListener.on("error", function(err){
  console.log(err);
});
 
mailListener.on("mail", function(mail, seqno, attributes){
  // do something with mail object including attachments
  //  console.log("emailParsed", mail);
  // console.log("emailParsed", mail.headers);
  console.log("emailParsed", mail.headers.from);
   console.log("subject", mail.headers.subject);
   console.log("Text", mail.text);
   console.log("this is an attachment", mail.attachments);
  // mail processing code goes here
});
 
mailListener.on("attachment", function(attachment){
  console.log("attachment "+attachment.path);
  console.log("Attachement name "+attachment.fileName)
  if(attachment.fileName.includes(".doc")){
    var file = fs.createWriteStream("./attachFiles/resume/"+attachment.fileName);
    file.on('pipe',(file)=>{
        console.log('resume download ') 
    }); 
    attachment.stream.pipe(file)
  }


});