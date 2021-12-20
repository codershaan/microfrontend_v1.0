import faker from "faker"



const mount = (el)=>{

    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`


    el.innerHTML = cartText
    console.log('inside cart ', cartText)
    // REACTDom.render(</app>,el) for react
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-cart-only");
    if(el){
        mount(el);
    }
}

export { mount };