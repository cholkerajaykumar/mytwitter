var objname = [
    {
        name: 'ajay',
        password: 'ajay123'
    },
    {
        name: 'bharadwaj',
        password: 'bharath123'
    },
    {
        name: 'kishore',
        password: 'kishore123'
    }
]
var str = "<option value=0>Select Year</option>"
for (let i = 1950; i < 2050; i++) {
    str = str + "<option value=" + i + ">" + i + "</option>"
}
document.getElementById("signup-year").innerHTML = str;

var str1 = "<option value=0>Select Month</option>"
for (let i = 1; i < 13; i++) {
    str1 = str1 + "<option value=" + i + ">" + i + "</option>"
}
document.getElementById("signup-month").innerHTML = str1;


var str2 = "<option value=0>Select Date</option>"
for (let i = 1; i < 32; i++) {
    str2 = str2 + "<option value=" + i + ">" + i + "</option>"
}
document.getElementById("signup-date").innerHTML = str2;



function validate() {
    var name = document.getElementById("input_text").value
    var password = document.getElementById("input_password").value
    for (i = 0; i < objname.length; i++) {
        if (name == objname[i].name && password == objname[i].password) {
            sessionStorage.setItem('username', name)
            window.location.href = "./info.html"
            return false
        }
    }
    alert('username or password incorrect')
}

function onClick() {
    document.getElementById('placeholder').style.color = '#0b94f0'
}
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        validate();
    }
})
$("#next1").on("click", function () {
    $('#myModal1').modal('show');
});
$("#gotomodal").on("click", function () {
    $('#myModal1').modal('hide');
});

$(document).ready(function(){
    $("#myModal").on('shown.bs.modal', function(){
        $(this).find('input[type="text"]').focus();
    });
});

var nameInput

document.getElementById("signup-name").addEventListener("keyup", function() {
    nameInput = document.getElementById('signup-name').value;
    if (nameInput != "" )  {
        document.getElementById('next1').disabled = false
        document.getElementById('next1').style.backgroundColor = '#19508e'
    } else {
        document.getElementById('next1').disabled = true
        document.getElementById('next1').style.backgroundColor = '#43586b'
    }
});



var name1
var mail1
var letters
var position
function validation() {
    name1 = document.getElementById('signup-name').value
    mail1 = document.getElementById('signup-email').value
    letters = /^[A-Za-z]+$/
    position = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (name1.match(letters)){
        if(mail1.match(position)){
        alert('Your name and  email have accepted : you can try another');
        document.getElementById('signup-name1').innerHTML = name1
        return true;
        }
    }
    else {
        alert('Please input alphabet characters only');
        document.getElementById('signup-name1').innerHTML = name1
        return false;
    }
    
}





