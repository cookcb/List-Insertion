let addItem = () => {
    let input = document.getElementById('inputField').value;
    let list = document.getElementById('listDisplay');
    
    if(input === ""){
        return;
    }

    let newItem = document.createElement('li');
    newItem.innerHTML = input;
    newItem.classList.add('text');

    let currentItems = document.getElementById('listDisplay').getElementsByTagName('li');
    let itemCount = currentItems.length;

    if((itemCount + 1) % 3 === 0){
        newItem.classList.add('redItem');
    }
    
    list.appendChild(newItem);
}