//1. Compare two JSON

var obj1 = {
    name : "person1",
    age : 5
};
var obj2 = {
    age : 5,
    name : "person1"
}

console.log(JSON.stringify(obj1==obj2));


//2. Rest counteries Flag
let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all")

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
    for(let i=0;i<result.length; i++){
        console.log(result[i].flag)
    }
}