const http = require('http'); // this is require for use node js 
const ExportImportDataInNODEJS = require('./ExportImport'); // this is a old way to import data in noe js
const fs = require('fs'); // this is use for read /edit any file.

const MyServer = http.createServer((Request,Response)=>{      // this function help to create a own server on broswer. in this function have a request parameter. this parameter in first this use for give a Request of your server.Secend para meter is response this use for give responce og your server
//    console.log(Request.url)
if (Request.url === '/Sahil') {
    Response.end(`<h1 style="color: blue; font-family: Arial;">My Name Sahil</h1>`);
    // Response.end(ExportImportDataInNODEJS);
} else if (Request.url === '/Trail') {
    Response.end(`<h1 style="color: green; font-family: Helvetica;">My Trail</h1>`);
} else if(Request.url === '/Home'){
    // fs.readFile('./HomePage.Html',(error,HomePageData)=>{ // This is a syncronace way to read file in this way we need call back function. 
    //     Response.end(HomePageData);
    // })
    
   const HomePageRead =  fs.readFileSync('./HomePage.Html');
    Response.end(HomePageRead);
} else {
    Response.end(`<h1 style="color: red; font-family: Verdana;">Page not found</h1>`);
}
 

})

MyServer.listen(9000,()=>{  //this function  is  read your created server values.
    console.log('My Server is Running Properly');
});
