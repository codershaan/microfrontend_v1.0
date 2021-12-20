import faker from "faker"

const mount = (el)=>{

    let products =""

    for (let i = 0; i <5; i++) {
        const name  = faker.commerce.productName();
        products += `<div>${name}</div>`;
    
          
    }
    el.innerHTML = products
    console.log('products')
    console.log(products)
    // REACTDom.render(</app>,el) for react
}


if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products-only');
    if(el){
        mount(el);
    }
}




export  { mount };
