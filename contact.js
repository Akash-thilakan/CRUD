//getcontact
function getContact() {

    return JSON.parse(localStorage.getItem("contacts")) || []
}




//savecontacts
function saveContact(contacts) {
    localStorage.setItem("contacts", JSON.stringify(contacts))
}



//add contact
function addContact() {
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value

    if (name && phone) {
        let contacts = getContact()
        contacts.push({ name, phone })
        saveContact(contacts)
        displayContact()
        clearInput()


    } else {
        alert("Enter the Name and PhoneNumber")
    }

}
//displaycontact
function displayContact() {
    let contacts = getContact()
    let table = document.getElementById("contacttable")
    table.innerHTML = ""
    contacts.forEach((user, index) => {
        table.innerHTML +=
            `
          <tr>
                        <td>${user.name}</td>
                        <td>${user.phone}</td>
                        <td>
                            <button onclick="editContact(${index})" class="btn btn-warning">Edit</button>
                            <button onclick="deleteContact(${index})" class="btn btn-danger">Delete</button>

                        </td>
                    </tr>
                
`

    });



}

//clearinput
function clearInput() {
    document.getElementById("name").value = ""
    document.getElementById("phone").value = ""
}



//edit contact
function editContact(index) {
    let contacts = getContact()
    document.getElementById("name").value = contacts[index].name
    document.getElementById("phone").value = contacts[index].phone
    contacts.splice(index, 1)
    saveContact(contacts)
}



//delete contact

function deleteContact(index) {
    let contacts = getContact()
    contacts.splice(index, 1)

    saveContact(contacts)
    displayContact()
}



//get contact

displayContact()