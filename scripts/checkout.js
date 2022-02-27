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
function address(){
    var first  = document.querySelector("#first").value;
    var last = document.querySelector("#last").value;
    var phone = document.querySelector("#phoneno").value;
    var address = document.querySelector("#add").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("#state").value;
    var pincode = document.querySelector("#pincode").value;
    var error = document.querySelector("#error");
    if(first.length == 0 || last.length == 0 || address.length == 0 || city.length == 0 || state.length == 0 || pincode.length == 0){
        error.textContent = "Please fill all the details";
    }
    else{
        window.location.href="payment.html"
    }
}

    