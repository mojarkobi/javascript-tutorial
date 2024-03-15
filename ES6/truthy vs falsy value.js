let num = 0;

let str = "";

let name = null;

let age;

let trained = false;

if(name){
   console.log("truthy value");
}else{
    console.log("falsy value");
}

/*

উপরের 0 তারপর str = "" বা empty string , name = null , let age বা undefined value সবশেষে trained = false হলো falsy value
এসব ভ্যালু  বাদে সকল রকম ভ্যালু হলো truthy value
নিচে উদাহরণ দেয়া হলো
*/

let name2= "ashik";

if(name2){
    console.log("truthy value");
}else{
    console.log("falsy value");
}

