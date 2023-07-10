const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';
const searchInput = document.querySelector("[data-search]")

let repos = []

fetch(Url)
.then(res => res.json())
.then(data => {
    let boxes = "";
 repos = data.items.map((values)=>{
    const repoElement = document.createElement("div");
    repoElement.innerHTML =    
    `<div id="info-box">
        <p id="info"> Name: ${values.name}</p>
        <p id="info">Size: ${values.size}</p>
        <p id="info">Created At: ${values.created_at}</p>
    </div>` ; 
    document.getElementById("large-container").appendChild(repoElement);
    return {name: values.name, element: repoElement}
 })
 
});

//Pulling information from API for name of repo, its size, and its created at
// information

searchInput.addEventListener("input", e =>{
    const my_input = e.target.value;
    repos.map(repo =>{
        const isVisible = repo.name.includes(my_input)
        repo.element.classList.toggle("hide", !isVisible)
    })
})
//Will display the Repo that matches name put into the search bar
