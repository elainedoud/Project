const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';

fetch(Url)
.then(res => res.json())
.then(data => {
    let names = "";
 data.items.map((values)=>{
    names+=     `<div id="large-container">
    <div id="info-box">
        <p id="namestyle">${values.full_name}</p>
    </div>
</div>`  
 })
 document.getElementById("large-container").innerHTML = names;
});

// May need to use Command-Shift-R to force refresh the page
// data.items[0].full_name will display the full name when
// using console.log