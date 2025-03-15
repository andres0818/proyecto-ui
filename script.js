
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    Init()
});

function Init(){
    const actionModal = document.querySelectorAll("a");

    actionModal.forEach(e => {
        e.addEventListener("click", e => {

            if(e.target.dataset.show){
                document.querySelector(`#${e.target.dataset.show}`).showModal()
            }
            else if(e.target.dataset.hidde){
                document.querySelector(`#${e.target.dataset.hidde}`).close();
            }
        })
    });
}

