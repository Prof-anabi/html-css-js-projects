const inputEl = document.getElementById("input");
const countEl = document.getElementById("count");
const saveEl = document.getElementById("save");
const container = document.querySelector("#container");

inputEl.innerText = 0;
let counter = 0;

countEl.addEventListener('click', ()=> {
    counter += 1;

    inputEl.innerText = counter;
})


// creating and appending the child elements and returning the first three
function createSavedValue(){
    const updateEl = inputEl.innerText;

    const spanContainer = document.getElementById("span-container");
    // Creating a span that will contain the saved value
    const spanEl = document.createElement("span");
    for (let i = 1; i < 2; i++) {

        // Updating the content of the span element
        spanEl.textContent = (`${updateEl}`);

        // Appending it into the container and returning the last element on the top
        if (spanContainer.childElementCount >= 1) {
            const firstItem = spanContainer.firstElementChild;
            spanContainer.insertBefore(spanEl, firstItem)
        } else {
            spanContainer.appendChild(spanEl);
        }
        
        // Reseting the value of the counter and input variable
        counter = 0;
        inputEl.innerText = 0;
        
    
        return Array.from(spanContainer.children).slice(0, 3);
    }
}

// Adding an event listener to save the current value
saveEl.addEventListener('click', ()=> {  
    createSavedValue();
})