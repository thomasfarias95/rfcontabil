class FormsSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success;
    }

    init(){
        if(this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

