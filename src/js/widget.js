
export default class Widget{
    constructor(){

    }

    addWidget(){
        document.body.insertAdjacentHTML('beforeend', `
            <div class="container-widget">
                <button class="container-widget__btn" type="button">Collapse</button>
                <div class="container-widget__text-box">
                    Когда мы придумаем текст тут будет текст, но пока мы его не придумали, так что текста нет. Но обязательно придумаем
                </div>
            </div>`);
        this.animationWidget();
    }

    animationWidget(){
        document.body.addEventListener('click', function(event){
            if(event.target.classList.contains('container-widget__btn')){

                event.target.nextElementSibling.classList.add('activate');
            }
        })
    }

}