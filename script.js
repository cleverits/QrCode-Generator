const wrapper = document.querySelector(".wrapper");
const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const btn = document.querySelector(".form button");
const img = document.querySelector(".qr-code img");
let currentValueInput;

form.addEventListener('submit', (event) => {
    event.preventDefault()//Որ սայտը refresh չլի ավտոմատ

    const inputValue = input.value.trim();
    if (!inputValue || inputValue === currentValueInput) return; 
    currentValueInput = inputValue;

    btn.textContent = "идет создание QR-кода...";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

    img.addEventListener("load", () => {
        wrapper.classList.add('active');
        btn.textContent = "сгенерировать QR-код";
    })

    img.addEventListener("error", () => {
        alert("ошибка");
        location.reload()
    })

    img.addEventListener("input", () => {
        if (!this.value.trim() && wrapper.classList.contains("active")) {
            wrapper.classList.remove("active")
        }
    })
})






// link API 
// img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;