const url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc'

async function api_call(url){
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
},})
    const info = await response.json();
    console.log(info);

    }

    console.log(api_call(url))