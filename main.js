// evento por cada boton
// const buttons = [...document.querySelectorAll('.tags__btn')];

// buttons.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         // extraer data
//         const article = document.getElementById(btn.dataset.id);

//         if(!article.classList.contains('main-text--active')){
//             // capturar boton y articulo activado para remover las clases asociadas
//             const activeBtn = buttons.find((btn) => {
//                 if(btn.classList.contains('tags__btn--active')){
//                     return btn;
//                 }
//             });
//             activeBtn.classList.remove('tags__btn--active');
//             document.getElementById(activeBtn.dataset.id).classList.remove('main-text--active')

//             // mostrar el articulo
//             btn.classList.add('tags__btn--active');
//             article.classList.add('main-text--active')
//         }
//     });
// });

// delegacion de eventos
const buttonsContainer = document.querySelector(".tags");
buttonsContainer.addEventListener("click", (e) => {
    const buttons = [...document.querySelectorAll(".tags__btn")];
    if (e.target.classList.contains("tags__btn")) {
        if (!e.target.classList.contains("tags__btn--active")) {
            // extraer boton activo
            buttons.find((btn) => {
                if (btn.classList.contains("tags__btn--active")) {
                    btn.classList.remove('tags__btn--active');
                    document.getElementById(btn.getAttribute('data-id')).classList.remove('main-text--active');
                }
            });
            // agregar clases activas
            e.target.classList.add('tags__btn--active');
            document.getElementById(e.target.getAttribute('data-id')).classList.add('main-text--active');
        }
    }
});