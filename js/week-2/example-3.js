const toggleBtn = document.getElementById('navbar__btn--colapse');
const toggleBtnPhone = document.getElementById('navbar__btn--media-phone');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('collapsed');
});

toggleBtnPhone.addEventListener('click', () => {
    document.body.classList.toggle('collapsed');
});

// call api

// const API_KEY = "pub_457939f90d1519954cb53bc76109dd8cdf931f13be2a14da6ed9366215a8e6f6"
const API_KEY = "reqres_283aa35cab24417780c1da81549bfdad"
const apiUrl = "https://reqres.in/api/users?page=1";

let userData = []
let page = 1;
let total_pages = 1;

const fetchUsers = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(response.status)
        }

        const data = await response.json();
        userData = data?.data ?? [];
        page = data.page;
        total_pages = data.total_pages;

        generateData();
    } catch (error) {
        console.log("Fetch error", error.message)
    }
}

fetchUsers();

const generateData = () => {
    const cardList = document.getElementById("card_list");
    cardList.innerHTML = '';
    if (userData.length > 0) {
        userData.forEach(user => {
            const userCard =
                `<div class="card">
                <div class="card__header">
                    <img src="${user.avatar}" alt="avatar">
                </div>
                <div class="card__content">\
                    <h3>User information</h3>
                    <p>Email: <span>${user.email}</span></p>
                    <p>Full name: <span>${user.first_name + ' ' + user.last_name}</span></p>
                </div>
            </div>`;

            cardList.innerHTML = cardList.innerHTML + userCard;
        });
    }
}