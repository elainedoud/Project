
const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';
const largeContainer = document.querySelector("#large-container");


async function api_call(url){
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
},})
    const info = await response.json();
    show(info);
    }

    window.onload = () => api_call(Url);


    

    function show(info){
        for (let x of info.items){
            const infoBox = document.createElement('div');
            //infoBox = document.querySelector("#info-box");
            const repoFullName = document.createElement('p');
            //const createdAt = document.createElement('p');
            
            repoFullName.textContent = x.full_name;
            //createdAt.textContent = x.created_at;

            ;
            //infoBox.append(createdAt);
            
        }
        infoBox.append(repoFullName);
        largeContainer.append(infoBox);
    }


    
    //I don't know how to debug my code further since console.log in 
    // terminal is not playing nice with DOM elements

    // I don't want to return hundreds of items; maybe that is causing issues