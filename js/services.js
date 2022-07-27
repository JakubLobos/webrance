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