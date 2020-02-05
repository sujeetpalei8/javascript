var arr = [];
var x = 1;
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => {
        arr.push(data)
        arr = arr[0]
        assigndata(arr);

    })

function assigndata(data) {
    console.log(arr);

    var temp = "";
    var index = 0;
    if (data.length >= 0) {


        data.forEach(user => {

            temp += "<tr>";
            temp += "<td>" + user.id + "</td>";
            temp += "<td>" + user.name + "</td>";
            temp += "<td>" + user.username + "</td>";
            temp += "<td>" + user.email + "</td>";
            temp += "<td>" + user.company.name + "</td>";
            temp += `<td><button onclick = "editUser(${index})" class="editbutton">EDIT</button><button onclick = "deleteUser(${index})" class="deletebutton">DELETE</button> </td></tr>`;
            index += 1;
        });
        document.getElementById("data").innerHTML = temp;
        document.getElementById("editDetails").style.display = 'none';
        document.getElementById("deletemsg").style.display = 'none';
        document.getElementById("updatemsg").style.display = 'none';
    }
}
function deleteUser(index) {
    arr.splice(index, 1);
    assigndata(arr);
    displaymessage("deletemsg");
}
function editUser(index) {
    var userpopulate = arr[index]
    document.getElementById("editDetails").style.display = 'block';
    document.getElementById("jsondata").style.display = 'none';

    document.getElementById("userid").value = userpopulate.id;
    document.getElementById("name").value = userpopulate.name;
    document.getElementById("username").value = userpopulate.username;
    document.getElementById("email").value = userpopulate.email;
    document.getElementById("company").value = userpopulate.company.name;

}
function updateUser() {
    var updatedUser = {
        id: document.getElementById("userid").value,
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        company: { name: document.getElementById("company").value }
    }
    if (updatedUser.name == "") {

        document.querySelector("#invalidname p").style.display = 'block';
    } else if (updatedUser.username == "") {

        document.querySelector("#invaliduname p").style.display = 'block';
    } else if (updatedUser.email == "") {
        
        document.querySelector("#invalidemail p").style.display = 'block';
    } else if(updatedUser.company.name==""){
        
        document.querySelector("#invalidcname p").style.display='block';
    }else{

        var index = document.getElementById("userid").value;
        arr[index - 1] = updatedUser;


        assigndata(arr);
    document.getElementById("editDetails").style.display = 'none';
        document.getElementById("jsondata").style.display = 'block';
        displaymessage("updatemsg");
    }}
function displaymessage(message) {

    document.getElementById(message).style.display = 'block';

    setTimeout(function () {
        document.getElementById(message).style.display = 'none';
    }, 5000);
}

function sortname(compare) {

    if (compare == "id") {
        console.log(arr.sort(function (a, b) {

            let comp = 0;
            if (a.id > b.id) {
                comp = 1;
            }
            else if (a.id < b.id) {
                comp = -1;
            }
            return comp * x * -1;
        }));
    }
    if (compare == "name") {
        console.log(arr.sort(function (a, b) {

            let comp = 0;
            if (a.name > b.name) {
                comp = 1;
            }
            else if (a.name < b.name) {
                comp = -1;
            }
            return comp * x;
        }));
    }
    if (compare == "username") {
        console.log(arr.sort(function (a, b) {

            let comp = 0;
            if (a.username > b.username) {
                comp = 1;
            }
            else if (a.username < b.username) {
                comp = -1;
            }
            return comp * x;
        }));
    }
    if (compare == "email") {
        console.log(arr.sort(function (a, b) {

            let comp = 0;
            if (a.email > b.email) {
                comp = 1;
            }
            else if (a.email < b.email) {
                comp = -1;
            }
            return comp * x;
        }));
    }
    if (compare == "companyname") {
        console.log(arr.sort(function (a, b) {

            let comp = 0;
            if (a.company.name > b.company.name) {
                comp = 1;
            }
            else if (a.company.name < b.company.name) {
                comp = -1;
            }
            return comp * x;
        }));
    }
    assigndata(arr);
    x = x * -1;
}
