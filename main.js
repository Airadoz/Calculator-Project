const screen = document.querySelector('.screen');
const possibleButtons = Array.from(document.querySelectorAll("button"));

let chosenValue = possibleButtons.forEach((button)=> addEventListener('click', (e)=>{
    result = e.target.id;
    return result;
}));

if(chosenValue === 'one'){
    screen.innerHTML = '1';
}

// const chosenValue = possibleButtons.map(findId);
