
const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';
const largeContainer = document.querySelector("#large-container");
const infoBox = document.querySelector("#info-box");
let count;

//window.onload = 
//function pullAPI(url) {
fetch(Url)
.then(response => response.json())
.then(data =>{
    for (let key in data){
        if (data.hasOwnProperty(key) && key === "items"){
            const name = document.createElement('p');
            name.textContent = data[key].full_name;
            infoBox.appendChild(name); 
            count += 1;
        }
        if (count >= 10){
            break;
        }
    }}
    )

    largeContainer.appendChild(infoBox);
    
//}

//window.onload(Url);

//Now getting a GET Error and Syntax Error

//async function api_call(url){
    //const response = await fetch(url, {
       // method: 'GET',
       // headers: {
          //  "Content-Type": "application/json"
//},})
   // const info = await response.json();
   // show(info);
   // }

  //  window.onload = () => api_call(Url);


   // function show(info){
       // for (let x of info.items){
          //  const infoBox = document.createElement('div');
            //infoBox = document.querySelector("#info-box");
         //   const repoFullName = document.createElement('p');
            //const createdAt = document.createElement('p');
            
        //    repoFullName.textContent = x.full_name;
            //createdAt.textContent = x.created_at;

        //    ;
            //infoBox.append(createdAt);
            
     //   }
     //   infoBox.append(repoFullName);
     //   largeContainer.append(infoBox);
  //  }
  //