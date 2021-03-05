function clock() {
  let date = new Date();
  let hour = updateTime(date.getHours()) 
  let min = updateTime(date.getMinutes()) 
  let sec = updateTime(date.getSeconds()) 
  document.getElementById('clock').innerText = `${hour}:${min}:${sec}`;
} 
const updateTime = (time) => {
  if (time < 10) {
    return "0" + time.toString();
  }
  else {
    return time.toString();
  }
}
setInterval(clock, 1000);



function addtask() {
  const textInput = document.querySelector('.input7')
  if (textInput.value.length < 1){
    return
  }
  const ul = document.querySelector('.ulToDo')
  const li = document.createElement('li')
  const label = document.createElement('label')
  const input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  
  const textValue = document.createTextNode(textInput.value)
  textInput.value = ''

  const but = document.createElement("button")
  but.classList.add('butDel')
  but.innerText='x'
  but.addEventListener('click', ev => {
    del(ev)
  })
   label.appendChild(input)
   label.appendChild(textValue)
   label.appendChild(but)
   li.appendChild(label)
   ul.appendChild(li)


  function del(ev){
  ev.target.parentElement.parentElement.remove()
  }

 
  input.addEventListener('click', ev => {
    strike(ev)
  })
}

function send(ev){
  if (ev.key==="Enter"){
  addtask()
  }
}

function strike(ev){
  ev.target.parentElement.classList.toggle('strike');
}

function clearListOk(ev) {
  const getElemUl = document.querySelector('.ulToDo')
// с помощью "Arrау.from" мы создаем МАССИВ элементов из html коллекции 
  const arrChildren = Array.from(getElemUl.children)
  // item это тег <li> , поэтому обращаемся к потомкам <li>
  for (const item of arrChildren) {
    let itemChild=item.children[0]
    if (itemChild.getAttribute("class") && itemChild.getAttribute("class").includes("strike")) {
      item.remove()
    }
  }
}




// когда все загрузится можем запустить эту функцию:
window.addEventListener('load',  () => {
  const textInput = document.querySelector('.input7')
  textInput.addEventListener("keypress", send)

  const delOk = document.getElementById('DelOk')
  delOk.addEventListener('click', ev => {
    clearListOk(ev)
  })
});
