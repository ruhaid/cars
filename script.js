
const carData =[
   {img:"https://images.unsplash.com/photo-1706495227612-fde52c357c69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZGElMjBjYXJ8ZW58MHx8MHx8fDA%3D",name:"Honda",discription:"honda is the best car"},
   {img:"https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZGElMjBjYXJzfGVufDB8fDB8fHww",name:"Honda",discription:"honda is the best car"},
   {img:"https://images.unsplash.com/photo-1634737581963-5a22ba471961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9uZGElMjBjYXJzfGVufDB8fDB8fHww",name:"Honda",discription:"honda is the best car"},
   {img:"https://images.unsplash.com/photo-1691978843033-70fbf03e8a85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmRhJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D",name:"Honda",discription:"honda is the best car"},
   {img:"https://images.unsplash.com/photo-1609904403133-c858367c09af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbmRhJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D",name:"Honda",discription:"honda is the best car"},
   {img:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwY2FyfGVufDB8fDB8fHww",name:"BMW",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1622642468182-edd7db43f86e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwY2FyfGVufDB8fDB8fHww",name:"BMW",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJtdyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",name:"BMW",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1624464823981-ae6ef2c9a469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3V6dWtpJTIwY2FyfGVufDB8fDB8fHww",name:"suzuki",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1632414187391-7e4097f0de6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3V6dWtpJTIwY2FyfGVufDB8fDB8fHww",name:"suzuki",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1605270396307-d00ba5cda1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3V6dWtpJTIwY2FyfGVufDB8fDB8fHww",name:"suzuki",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1650356148142-7d78e16df7bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1enVraSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",name:"suzuki",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   {img:"https://images.unsplash.com/photo-1699862489088-7399f22d727b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1enVraSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",name:"suzuki",discription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maiores, distinctio voluptatibus dolor sapiente assumenda consectetur porro aperiam deleniti id?"},
   
];

let carDiv = document.querySelector(".cart-list");
carData.forEach((data)=>{
   let cart = document.createElement("div");
   cart.classList.add('cart');
   cart.innerHTML=` <img src="${data.img}" alt="">
            <h3>${data.name}</h3>
            <p>${data.discription}</p>
            <button>Explore</button>`
   carDiv.appendChild(cart);
   
})
