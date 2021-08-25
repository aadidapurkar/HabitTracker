
var habitsList = ["1"];

function dateStart(){
  var dateStart = document.getElementById("date-start").value;
  console.log(dateStart)
}


function nameInput()
{
var name_input = document.getElementById("nameInput").value;
document.getElementById("welcome").innerHTML = "Welcome, " + name_input;
}




let employees = [
    { name: 'James', age: 21, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
]

let btnGet = document.querySelector('.habit-sub');
let myTable = document.querySelector('#table-habits');



var body = document.querySelector("#table-habits");

function habits(){
  var  habitsList = $(".habits-select").val();
  var habitlengths = habitsList.length;

  for(k=0; k < habitlengths; k++) {
    habitBTN = document.createElement("div");
    habitBTN.className = "col";
    habitText = document.createElement("button");
    habitTextContent = document.createTextNode("I have done " + habitsList[k] + " today.");
    habitText.className = "button-";
    habitText.classList.add("btn","btn-dark");
    habitText.id = "button-" + k;
    habitText.appendChild(habitTextContent);
    habitBTN.appendChild(habitText)
    body.appendChild(habitBTN);


  }

  var buttons = document.getElementsByClassName("button-");
  console.log(buttons);

  for(j=0; j < buttons.length;j++) {
    document.querySelector("#button-" + j).addEventListener("click",document.querySelector("#button-" + j).remove)
  }

}


btnGet.addEventListener("click", habits);
