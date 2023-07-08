const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';

fetch(Url)
.then(res => res.json())
.then(data => {
    let names = "";
 data.items.map((values)=>{
    names+=     `<div id="large-container">
    <div id="info-box">
        <p id="namestyle">${values.full_name}</p>
        <p id="namestyle">${values.size}</p>
        <p id="namestyle">${values.created_at}</p>
        <p id="namestyle">${values.has_wiki}</p>
        
    </div>
</div>`  
 })
 document.getElementById("large-container").innerHTML = names;
});

//Next Steps:
// Display more information
// Fix variable names and add comments
// Adjust CSS to make it look better
// Try to make an adjustment so GET 404 error does not appear in 
// console window


// May need to use Command-Shift-R to force refresh the page
// data.items[0].full_name will display the full name when
// using console.log