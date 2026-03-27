
export default class Widget{
    constructor(){

    }

    addWidget(){
        document.body.insertAdjacentHTML('beforeend', `
            <div class="container-widget">
                <button class="container-widget__btn" type="button">Collapse</button>
                <div class="container-widget__text-box">
                    <span class="text">Когда мы придумаем текст тут будет текст, но пока мы его не придумали, так что текста нет. Но обязательно придумаем</span>
                </div>
            </div>`);
        this.animationWidget();
    }

    animationWidget(){
        document.body.addEventListener('click', function(event){
            if(event.target.classList.contains('container-widget__btn') && !event.target.nextElementSibling.classList.contains('activate')){
                event.target.nextElementSibling.classList.add('activate');
                event.target.nextElementSibling.firstElementChild.classList.add('text-activate');
                setTimeout(() => {
                    event.target.nextElementSibling.style.animationPlayState = 'paused';
                }, 1500);
            } else {
                event.target.nextElementSibling.style.animationPlayState = 'running';
                                    
                setTimeout(() => {
                    event.target.nextElementSibling.classList.remove('activate');
                    event.target.nextElementSibling.firstElementChild.classList.remove('text-activate');
                }, 1500);
            }
        })
    }

}