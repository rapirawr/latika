const changeTheme = document.getElementById("changeTheme");

changeTheme.addEventListener('click', function(){
    document.body.classList.toggle("dark-mode")
    changeTheme.classList.toggle("active")
});

function sapaSaya() {
    alert("Halo, Rafi Abdillah Fairuz! Semoga harimu menyenangkan!");
};
