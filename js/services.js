//kolumny efekt pojawiania sie

const columns = document.querySelectorAll('.service_column');
const ui = document.querySelector('.service_content_container');

document.addEventListener('scroll', ()=>{
    if(window.scrollY >= ui.clientHeight/1.5) {
        columns.forEach(e =>{
            e.style = "animation: ColumnsShowUp 1.5s forwards;";
            e.style = "-webkit-animation: ColumnsShowUp 1.5s forwards;";
        });
    }
});

//popup

const checkPrice = document.querySelectorAll('#check');
const popup = document.querySelector('.popup');
let isPopupVisible = false;

function hidePopup() {
    popup.classList.toggle('hidden')
}

function showPopup() {
    popup.classList.toggle('hidden')
    isPopupVisible = true;
    setTimeout(() => {
        hidePopup()
        isPopupVisible = false;
    }, 4000);
}

checkPrice.forEach((element) => {
    element.addEventListener('mouseover', () => {
        if (!isPopupVisible) showPopup()
    })
})