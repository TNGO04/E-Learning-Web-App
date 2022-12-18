var $usernameFld, $passwordFld;
var $firstNameFld, $lastNameFld, $roleFld;
var $updateBtn, $createBtn;
var $userRowTemplate, $tbody;
var userService = new AdminUserServiceClient();
var users = [];
var selectedUser = null;
$(main);

function main() { 
    $usernameFld = $("#usernameFld")
    $passwordFld = $("#passwordFld")
    $firstNameFld = $("#firstNameFld")
    $lastNameFld = $("#lastNameFld")
    $roleFld = $("#roleFld")
    $userRowTemplate = $(".wbdv-user.wbdv-template")
    $tbody = $(".wbdv-tbody")
    
    $createBtn = $(".wbdv-create")
    $createBtn.click(createUser)

    $updateBtn = $(".wbdv-update")
    $updateBtn.click(updateUser)

    findAllUsers().then((allUser) => {
        users = allUser
        renderUsers(users)
    })
    
    }

function createUser() {
    userService.createUser({
        userName: $usernameFld.val(),
        password: $passwordFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val()
    }).then((userJSON) => {
        users.push(userJSON)
        renderUsers(users)
    })
}

function deleteUser(event) { 
    var $deleteBtn = $(event.target)
    var index = $deleteBtn.attr("id")
    var id = users[index]._id

    userService.deleteUser(id).then((status) => {
        users.splice(index, 1)
        renderUsers(users)
    })
}

function selectUser(event) {
    var $selectBtn = $(event.target)
    var index = $selectBtn.attr("id")
    var id = users[index]._id
    findUserById(id).then((user) => {
        // fill header fields with information from selected user
        $usernameFld.val(user.userName)
        $firstNameFld.val(user.firstName)
        $lastNameFld.val(user.lastName)
        $roleFld.val(user.role)
        selectedUser = users[index]
    })
}
function updateUser() {
    // service send request to update using ID to server
    
    selectedUser.userName = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    
    var id = selectedUser._id
    
    // then update users JSON and re-render
    userService.updateUser(id, selectedUser).then((status) => {
        var index = users.findIndex((user) => user._id === selectedUser._id)
        users[index] = selectedUser
        renderUsers(users)
    })

}

function renderUsers(users) { 
    $tbody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        // deep copy of template row
        var newRow = $userRowTemplate.clone(true)

        // replace information fields with info from JSON
        newRow.find(".wbdv-username").text(user.userName)
        newRow.find(".wbdv-first-name").text(user.firstName)
        newRow.find(".wbdv-last-name").text(user.lastName)
        newRow.find(".wbdv-role").text(user.role)

        // add id to buttons and add click event
        newRow.find(".wbdv-remove").attr("id", i)
        newRow.find(".wbdv-remove").click((event) => {
            deleteUser(event);
        })

        newRow.find(".wbdv-edit").attr("id", i)
        newRow.find(".wbdv-edit").click((event) => {
            selectUser(event);
        })

        newRow.removeClass("wbdv-hidden")
        $tbody.append(newRow)
    }
}

function findAllUsers() { 
    return userService.findAllUsers();
} 

function findUserById(id) {
    return userService.findUserById(id);
}
