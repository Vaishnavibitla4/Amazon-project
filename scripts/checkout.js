import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
//import '../data/cart-class.js'; //runs all the code inside the file
//import '../data/backend-practice.js';
import { loadProducts} from "../data/products.js";

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
