var pName = document.getElementById("name");
var phone = document.getElementById("phone");
var list = document.getElementById("bookmarkList");
var contacts = [];

// Load contacts from localStorage
if (localStorage.getItem("contactsdb") != null) {
    contacts = JSON.parse(localStorage.getItem("contactsdb"));
    display();
}

// Add button click event listener
document.getElementById("btnAdd").addEventListener("click", function(e) {
    e.preventDefault();
    addBookmark();
});

function addBookmark() {
    var person = {
        personName: pName.value,
        personPhone: phone.value
    };  
    contacts.push(person);
    localStorage.setItem("contactsdb", JSON.stringify(contacts));
    display();
    clear();
}

function clear() {
    pName.value = "";
    phone.value = "";
}

function display() {
    list.innerHTML = '';
    for (var i = 0; i < contacts.length; i++) {
        list.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${contacts[i].personName}</td>
            <td>${contacts[i].personPhone}</td>
            <td>
                <button class="btn btn-danger" onclick="removePerson(${i})">Delete</button>
            </td>
        </tr>`;
    }
}

function removePerson(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contactsdb", JSON.stringify(contacts));
    display();
}
