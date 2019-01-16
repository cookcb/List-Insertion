let addItem = () => {
    let input = document.getElementById('inputField').value;
    let list = document.getElementById('listDisplay');
    
    if(input === ""){
        return;
    }

    let newItem = document.createElement('li');
    newItem.innerHTML = input;

    list.appendChild(newItem);

}