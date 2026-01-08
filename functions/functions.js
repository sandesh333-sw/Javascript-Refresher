function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;

}

let teaOrder = makeTea("lemon tea");
console.log(teaOrder);

//teaorder function
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed`;
    }
   return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

//arrow function
const calculateTotal = (price, quantity) => {
    return price * quantity;
}
/**implicit return 
 * const calculateTotal = (price, quantity) => price * quantity;
*/

let totalCost = calculateTotal(10, 40);
console.log(totalCost);