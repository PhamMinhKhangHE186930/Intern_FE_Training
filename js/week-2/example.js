let userList = [];

document.getElementById('add').addEventListener('click', () => {
    const uid = document.getElementById("uid").value;
    const uName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    let userIndex = userList.findIndex((user, id) => user.uid == uid);

    if (userIndex != -1) {
        userList[userIndex] = {
            uid: uid,
            name: uName,
            phone: phone
        }
    } else {
        userList.push({
            uid: uid,
            name: uName,
            phone: phone
        })
    }

    createList();
});

const deleteUser = (uid) => {
    userList = userList.filter((user) => user.uid != uid);
    createList();
}

const createList = () => {
    const uList = document.getElementsByTagName('ul');
    uList[0].innerHTML = "";
    if (userList.length > 0) {
        for (let user of userList) {
            const newElement = document.createElement('li');
            newElement.innerHTML = `
            Id: ${user.uid} <br>
            Name: ${user.name} <br>
            Phone: ${user.phone} <br>
            <button onclick="deleteUser('${user.uid}')">Xóa</button>
            `;
            uList[0].appendChild(newElement);
        }
    }
}