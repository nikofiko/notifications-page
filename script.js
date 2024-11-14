const notifications = document.querySelectorAll('.notification')
const quantity = document.querySelector('.quantity')
const button = document.querySelector('.mark-read')
const dot = document.querySelector('.unread::after')

let counter = 0

notifications.forEach(element => {
    let notificationClass = element.className;
    if (notificationClass.includes("unread")) {
        counter += 1;
    }
});
quantity.textContent = counter

button.addEventListener("click", ()=>{
    notifications.forEach(element => {
        let notificationClass= element.className
        if (notificationClass.includes("unread")){
            element.classList.remove("unread")
        }
    });
})
