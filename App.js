const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';
const searchInput = document.querySelector("[data-search]")

let repos = []

fetch(Url)
.then(res => res.json())
.then(data => {
    let boxes = "";
 repos = data.items.map((values)=>{
    boxes+=    `<div id="info-box">
        <p id="info"> Name: ${values.name}</p>
        <p id="info">Size: ${values.size}</p>
        <p id="info">Created At: ${values.created_at}</p>
    </div>`  
    return {name: values.name, size: values.size, element: boxes}
 })
 document.getElementById("large-container").innerHTML = boxes;
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


// Add a search function
// Add an another free API [Stretch Goal]
// Readme (Final Step)


// May need to use Command-Shift-R to force refresh the page
// data.items[0].full_name will display the full name when
// using console.log