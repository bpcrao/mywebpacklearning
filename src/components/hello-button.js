import './hello-button.css'

class HelloButton {

    buttonCSSClass =  'hello-button';
    
    render () {
        const button = document.createElement('button');
        button.classList.add(this.buttonCSSClass);
        button.innerHTML  = "Apple button";
        const body = document.body.appendChild(button);
    }
    
}

export default HelloButton;