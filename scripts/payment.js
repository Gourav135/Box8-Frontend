var getcartitems = async() => {
    try{
        let url = `http://localhost:3010/carts/user/${localStorage.getItem("userId")}`;
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
// var arr = JSON.parse(localStorage.getItem("addedToCart"));

var items = (arr) => {
    var right_div = document.querySelector(".paymentpart");
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

var div222 = document.createElement("div");
div222.setAttribute("class","div222");
var p4 = document.createElement("p");
var p5 = document.createElement("p");
p4.textContent =`Delivery Fee`
p5.textContent =`Rs ${30}`;

div222.append(p4,p5)

var div333 = document.createElement("div");
div333.setAttribute("class","div222");
var p6 = document.createElement("p");
var p7 = document.createElement("p");
p6.textContent =`Packaging Charge`
p7.textContent =`Rs ${20}`;

div333.append(p6,p7)

var div444 = document.createElement("div");
div444.setAttribute("class","div222");
var p8 = document.createElement("p");
var p9 = document.createElement("p");
p8.textContent =`Tips and Taxes`
p9.textContent =`Rs ${Math.ceil(bag*0.05)}`;

div444.append(p8,p9)

var div555 = document.createElement("div");
div555.setAttribute("class","div222");
var p10 = document.createElement("h2");
var p11 = document.createElement("h2");
p10.textContent =`To Pay`
p11.textContent =`Rs ${bag+30+20+(Math.ceil(bag*0.05))}`;
div555.append(p10,p11)



right_div.append(p1,div111,div222,div333,div444,div555)



}
async function payment(){
    var card = document.querySelector("#cardno").value;
    var exp = document.querySelector("#expdate").value;
    var security = document.querySelector("#securitycode").value;
    var fullname = document.querySelector("#fullname").value;
    var error = document.querySelector("#error1");
    if(card.length == 0 || exp.length == 0 || security == 0 || fullname == 0){
        error.textContent ="Please fill all the details";
        error.style.color = "Red";
    }
    else{
        try{
            let url = `http://localhost:3010/carts/user/${localStorage.getItem("userId")}`
            await fetch(url,{method: "DELETE"})
            window.location.href = "order summary.html";
        }
        catch(e){
            console.log(e);
        }
        
    }
}