
import {mount as cartMount} from  'cart/CartShow';
import { mount as productMount} from 'products/ProductsIndex';

productMount(document.querySelector('#my-product'));
cartMount(document.querySelector('#my-cart'));
console.log('container')