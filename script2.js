let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all")

request.send();

request.onload = function(){
    let result = JSON.parse(request.response);
    for(let i=0;i<result.length; i++){
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
    }
}