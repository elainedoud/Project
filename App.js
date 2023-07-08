const Url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc';

fetch(Url)
.then(res => res.json())
.then(data => {
    let boxes = "";
 data.items.map((values)=>{
    boxes+=     `<div id="large-container">
    <div id="info-box">
        <p id="namestyle"> Name: ${values.name}</p>
        <p id="namestyle">Size: ${values.size}</p>
        <p id="namestyle">Created At: ${values.created_at}</p>
    </div>
</div>`  
 })
 document.getElementById("large-container").innerHTML = names;
});

//Next Steps:
// Fix variable names and add comments
// Adjust CSS to make it look better
// Add a search function
// Add an another free API
// Try to make an adjustment so GET 404 error does not appear in 
// console window
// Readme (Final Step)


// May need to use Command-Shift-R to force refresh the page
// data.items[0].full_name will display the full name when
// using console.log