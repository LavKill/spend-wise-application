function removeSpending() {
    let id = this.getAttribute('id');
    let allSpendings = returnToDo();
    allSpendings.splice(id, 1);
    localStorage.setItem('myData', JSON.stringify(allSpendings));
    document.getElementById('spendings').innerHTML = '';
    showAllSpendings();
}

function showForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById('spendingDate').valueAsDate = new Date();
}

function hideForm() {
    document.getElementById("form").style.display = "none";
    document.getElementById("show").style.display = "inline-block";
}

//Checks if there is already data in LocalStorage
function returnToDo(){
    var allSpendings = [];
    var allSpendingsTemp = localStorage.getItem('myData');
    if(allSpendingsTemp != null){
        allSpendings = JSON.parse(allSpendingsTemp);
    }
    return allSpendings;
}
//Class that creates tasks.
function Spending(){
    this.amount = document.getElementById('amount').value;
    this.category = document.getElementById('category').value;
    this.date = document.getElementById('spendingDate').value;
    this.describe = document.getElementById('description').value;
}
//Insert task properties into the HTML
function newSpending(x,y,z,o){
    document.getElementById('spendings').innerHTML +=
        '<div class="col l3"> <h4 class="another-font">'+x+  '$</h4>'+
        '<p class="another-font">Description:'+y+'</p>' +
        '<p class="another-font">Category: '+z+'</p>' +
        '<p class="another-font">Date: ' +o +'</p>'+
        '<div class="btn red" >Delete</div>'+
    '</div>'
}
//Gets all the objects from the array.
function showAllSpendings(){
    var allSpendings = returnToDo();
    document.getElementById('spendings').innerHTML = '';
    for(var i=0;i<allSpendings.length;i++){
        newSpending(
            allSpendings[i].amount,
            allSpendings[i].describe,
            allSpendings[i].category,
            allSpendings[i].date
        );
    }
    var button = document.getElementsByClassName('red');
    for (var j = 0; j < button.length; j++) {
        button[j].addEventListener('click', removeSpending);
        console.log(button[j].addEventListener('click', removeSpending));

    }
}
function submitInfo(){
    var allSpendings = returnToDo();
    allSpendings.push(new Spending);
    localStorage.setItem('myData',JSON.stringify(allSpendings));
    showAllSpendings();
    hideForm();
}
showAllSpendings();