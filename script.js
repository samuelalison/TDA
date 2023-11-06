const listContainer = document.querySelector('#list-container');
const inputBox = document.querySelector('#input-box');
const box = document.querySelector('.row');


function getTask (){
  const text = inputBox.value;

  if(inputBox.value === ''){
    alert("Please Write Something")
  } else {
    const li = document.createElement('li');
    li.innerHTML = text;
    listContainer.appendChild(li)

    const span = document.createElement('span');
     span.innerHTML = '\u00d7';
     li.appendChild(span);
     saveData();
  }
  inputBox.value = ""
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked")
     saveData()
  } else if (e.target.tagName === "SPAN"){
     e.target.parentElement.remove();
     saveData()
  }
})

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem('data')
};
showTask();