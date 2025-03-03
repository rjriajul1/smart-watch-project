
const ringButtons =document.querySelectorAll('.ring-button');
// console.log(ringButtons);
const productImageBase="./images/"

for(let i =0; i< ringButtons.length; i++){
    // console.log(ringButtons[i]);
    const ringBtn = ringButtons[i];

    ringBtn.addEventListener('click', function(event){
        // console.log("hello");
        const color =event.target.id.replace("-color", "");
        // console.log(color);

        for(let j =0; j < ringButtons.length; j++){
            ringButtons[j].classList.remove('border-purple-600');
            ringButtons[j].classList.add('border-gray-300');
        }
           event.target.classList.add("border-purple-600");
           event.target.classList.remove('border-gray-300');

           const productImage =document.getElementById('product-image');
        //    console.log(productImage);
           productImage.src = productImageBase + color + ".png"

    })
}

function selectWristSize(size){
    // console.log(size);
    const sizes =["S","M","L","XL"];
    for(let i =0; i< sizes.length; i++){
        // console.log(sizes[i]);
        const button = document.getElementById('size-'+sizes[i]);
        const element=sizes[i];
        if(size === element){
              button.classList.add('border-purple-600');
        }else{
            button.classList.remove('border-purple-600')
        }
    }
}

const quantityElements=document.querySelectorAll(".quantity-button");
// console.log(quantityElements);
for(let btn of quantityElements){
    // console.log(btn.innerText);
    btn.addEventListener('click', function(event){
        // console.log('hello');

        const amout = event.target.innerText === "+" ? 1 : -1;
        const quantityElement =document.getElementById('quantity');
        // console.log(quantityElement.innerText);
        const currentQuantity=parseInt(quantityElement.innerText);
        const newQuantity=Math.max(0,currentQuantity + amout);
        quantityElement.innerText=newQuantity;
    });
}

let cartCout=0;
let cartTtems=[];

document.getElementById('add-to-cart')
.addEventListener("click", function(){
    // console.log('hello');
    const quantity =parseInt(document.getElementById('quantity').innerText);
    // console.log(quantity);

    if(quantity > 0){
        document.getElementById('checkout-container').classList.remove('hidden');
        cartCout=cartCout+quantity;
        document.getElementById('cart-count').innerText=cartCout;
        const selectedColorButton = document.querySelector('button.border-purple-600.w-6');
        // console.log(selectedColorButton);
        const selectedColor =selectedColorButton.id.split("-")[0];
        // console.log(selectedColor);
        const selectedSizeButtons = document.querySelector('button.border-purple-600:not(.w-6)');
        // console.log(selectedSizeButtons.innerText);

        const selectedSize = selectedSizeButtons.innerText.split(" ")[0];
        // console.log(selectedSize);
        const selectedPrice= selectedSizeButtons.innerText.split(" ")[1].split("$")[1];
        // console.log(selectedPrice);

        cartTtems.push({
            image:selectedColor + ".png",
            title:"classy Modern Smart Watch",
            color:selectedColor,
            size:selectedSize,
            quantity:quantity,
            price:quantity * parseInt(selectedPrice)
        })
        // console.log(cartTtems);
    }
     else {
            alert("Please select a quantity...");
          }
        });

 document.getElementById('checkout-btn')
 .addEventListener("click", function(){

    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove("hidden");
     
    const cartContainer=document.getElementById('cart-items');

    for(let i =0; i< cartTtems.length; i++){
        // console.log(cartTtems[i]);
        const item=cartTtems[i];

        const row = document.createElement('tr');
        row.classList.add('border-b');
        row.innerHTML=`
        <td>
           <div class="flex items-center space-x-2">
           <img class="w-12 h-12 p-2 object-cover rounded-md " src="${productImageBase}${item.image}" alt="">
           <span class="font-semibold">${item.title}</span>
           </div>
        </td>
        <td class=" px-4 ">${item.color}</td>
        <td class=" px-4 ">${item.size}</td>
        <td class=" px-4 ">${item.quantity}</td>
        <td class=" px-4 ">$${item.price}</td>

        `
        cartContainer.appendChild(row);
        
    }

    
 })

 document.getElementById('continue-shopping')
 .addEventListener('click',function(){
    document.getElementById('cart-modal').classList.add('hidden');
 })

 document.getElementById('checkout').addEventListener("click", function(){
    alert("please go back it is danger zone");
 })
        
        
      

























// const SelectedColorButton = document.querySelector("button.border-purple-600.w-6");
//         // console.log(SelectedColorButton);

//         const selectedColor = SelectedColorButton? SelectedColorButton.id.split("-")[0] : "S";
//         // console.log(selectedColor);

//         const selectedSizeButtons = document.querySelector("button.border-purple-600:not(w-6");
//         // console.log(selectedSizeButtons);

//         const selectedSize=selectedSizeButtons.innerText.split(" ")[0];
//         // console.log(selectedSize);
//         const selectedPrice = selectedSizeButtons.innerText
//         console.log(selectedPrice);
//     //   .split(" ")[1]
//     //   .split("$")[1];
//         // console.log(selectedPrice);
//         cartTtems.push({
//             image:selectedColor + ".png",
//             title:"classs Modern Smart Watch",
//             color:selectedColor,
//             size:selectedSize,
//             quantity:quantity,
//             price:quantity * parseInt(selectedPrice)
//         });
//         console.log(cartTtems);