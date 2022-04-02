// var arr = JSON.parse(localStorage.getItem("addedToCart"));

var getcartitems = async() => {
    try{
        let url = `https://box8.herokuapp.com/carts/user/${localStorage.getItem("userId")}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        var arr = data;
        items(arr);
    }
    catch(e){
        console.log(e);
    }
}
getcartitems();

var items = (arr) => {
    var right_div = document.querySelector(".checkoutpart");
var bag = JSON.parse(localStorage.getItem("bag"));
var p1 = document.createElement("h2");
    p1.textContent = `ORDER SUMMARY | ${arr.length} ITEM(S)`

    var div111 = document.createElement("div");
    div111.setAttribute("id","div111");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    p2.textContent =`Item(s) subtotal`
    p3.textContent =`Rs ${bag}`;


    div111.append(p2,p3)


    var div555 = document.createElement("div");
    div555.setAttribute("class","div222");
    var p10 = document.createElement("h2");
    var p11 = document.createElement("h2");
    p10.textContent =`Order Total`
    p11.textContent =`Rs ${bag+30+20+(Math.ceil(bag*0.05))}`;
    div555.append(p10,p11)

    

    right_div.append(p1,div555)

    var add = JSON.parse(localStorage.getItem("address"));
    var name1 = document.querySelector("#name")
    name1.textContent = `Name: ${add.first} ${add.last}`

    var Phone = document.querySelector("#phoneno");
    Phone.textContent = `Phone Number: ${add.phone}`

    var address = document.querySelector("#address")
    address.textContent = `Address: ${add.address}, ${add.state}, ${add.pincode}`

    document.querySelector("#shopp").addEventListener("click",function(){
        var arr = JSON.parse(localStorage.getItem("addedToCart"))
        var arr =[];
        localStorage.setItem("addedToCart",JSON.stringify(arr));
    })
}