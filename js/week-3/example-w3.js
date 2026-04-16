document.querySelector('.navbar__btn--media-phone').addEventListener('click',() => {
    document.body.classList.toggle('collapsed');
});

const listRegisBtn = document.querySelectorAll('.regis-btn');
const listLearnBtn = document.querySelectorAll('.learn-btn');
const listMeetBtn = document.querySelectorAll('.meet-all-btn');
const listReadBtn = document.querySelectorAll('.read-btn');

const registerNavigate = () => {
    window.alert("Navigate to register")
    window.navigation.navigate('/html/week-3/features.html')
}
const learnAlert = () => {
    window.alert("Learn more button clicked")
}
const meetAlert = () => {
    window.alert("Meet button clicked")
}
const readAlert = () => {
    window.alert("Read more button clicked")
}

listRegisBtn.forEach((btn) => {
    btn.addEventListener('click', registerNavigate)
});

listLearnBtn.forEach(btn => {
    btn.addEventListener('click', learnAlert)
})

listMeetBtn.forEach(btn => {
    btn.addEventListener('click', meetAlert)
})

listReadBtn.forEach(btn => {
    btn.addEventListener('click', readAlert)
})