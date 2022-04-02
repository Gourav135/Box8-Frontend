// sidebar stuffs ---------------------------------------------------------------------->
let sidebar_anchor = document.querySelectorAll(".sidebar_anchor");
for(let i = 0; i < sidebar_anchor.length; i++)
{
    sidebar_anchor[i].addEventListener("focus", (event_obj) => {
        console.log(event_obj.target);

        let span1 = event_obj.target.lastElementChild.firstElementChild;

        span1.style.color = "#ed0331";
        span1.style.fontWeight = "bold";
        event_obj.target.style.borderLeft = "2px solid red";
    })
} 

// ------------------------------------------------------------------------------------------------->
 
// generating random number for price of the meal ------------------------------------------>
function generatePrice()
{
    let random = Math.random();
    let ceil = Math.ceil(random * 10);
    return (ceil * 100);
}
// -------------------------------------->
change_cartBtn_color();



// for making api call and appending meals ---------------------------------------------------->
async function getMealsByCategory(cat)
{
    try{
            // let category_url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`;
            let search_url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${cat}`;
            let response = await fetch(search_url);
            let response_data = await response.json();
            // console.log(response_data.meals);
            let meals = response_data.meals;
            document.getElementById(cat).innerHTML = "";
            meals.forEach(appendMeals);
        }
        catch(error){
            console.log(error);
        }
}


function appendMeals(meal)
{
    // console.log(meal);
    let veg_src = "https://d2pc4443o2qatl.cloudfront.net/20220112094354/veg.png";
    let nonVeg_src = "https://d2pc4443o2qatl.cloudfront.net/20220112094354/non-veg.png";

    // ------------------------------------>

    let main_div = document.createElement("div");
    main_div.id = "a" + meal.idMeal;

    // ------------------------------------>

    let thumb = document.createElement("img");
    thumb.src = meal.strMealThumb;
    thumb.addEventListener("click", storeSelectedMeal);

    // ------------------------------------>
    
    let div1 = document.createElement("div");
    div1.id = "mealName_box"
    let icon = document.createElement("img");
    if(meal.strCategory == "Vegetarian" || meal.strCategory == "Vegan")
    {
        icon.src = veg_src;
    }
    else
    {
        icon.src = nonVeg_src;
    }
    let h4 = document.createElement("h4");
    h4.textContent = meal.strMeal;
    h4.addEventListener("click", storeSelectedMeal);

    div1.append(icon, h4);
    //----------------------------------------->

    let priceAndArea = document.createElement("div");
    priceAndArea.id = "priceAndArea"

    let div2 = document.createElement("div");
    div2.id = "mealPrice_box"
    
    let price_tag = document.createElement("span");
    price_tag.textContent = "Rs";

    let price = document.createElement("span");
    price.textContent = generatePrice();

    div2.append(price_tag, price);

    let area = document.createElement("span");
    area.id = "area";
    area.textContent = meal.strArea;

    priceAndArea.append(div2, area);

    // ---------------------------------------->

    let favQty_box = document.createElement("div");
    favQty_box.id = "favQty_box";

    let fav = document.createElement("div");
    fav.id = "fav";
    fav.addEventListener("click", addToFavourite);

    let div3 = document.createElement("div");
    div3.id = "qty_box";
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    span1.textContent = "-";
    span1.id = "qty_decrement";
    span1.addEventListener("click", decreaseQty);

    span2.textContent = "1";
    span2.id = "qty_count";

    span3.textContent = "+";
    span3.id = "qty_increment";
    span3.addEventListener("click", increaseQty);

    div3.append(span1, span2, span3);
    favQty_box.append(fav, div3);
    // ---------------------------------------->

    let cart_btn = document.createElement("div");
    cart_btn.id = "cart_btn";
    // cart_btn.class = meal.strMealThumb;
    cart_btn.textContent = "Add To Cart";
    cart_btn.addEventListener("click", addToCart);
    // ---------------------------------------->

    main_div.append(thumb, div1, priceAndArea, favQty_box, cart_btn);

    document.getElementById(meal.strCategory).append(main_div);
}

// API calls for each category of meals 
getMealsByCategory("Beef");
getMealsByCategory("Chicken");
getMealsByCategory("Goat");
getMealsByCategory("Lamb");
getMealsByCategory("Pork");
getMealsByCategory("Seafood");
getMealsByCategory("Vegan");
getMealsByCategory("Vegetarian");
getMealsByCategory("Breakfast");

// ------------------------------------------------------------------------------------->

function decreaseQty(event_obj)
{
    let qty_count = event_obj.target.nextElementSibling;
    let count = Number(qty_count.textContent);
    if(count > 1)
    {
        qty_count.textContent = count - 1;
    }
}

function increaseQty(event_obj)
{
    let qty_count = event_obj.target.previousElementSibling;
    let count = Number(qty_count.textContent);
    if(count < 5)
    {
        qty_count.textContent = count + 1;
    }
}

// ------------------------------------------------------------------------------------->
// let addedToCart = JSON.parse(localStorage.getItem("addedToCart")) || [];

// function addToCart(event_obj)
// {
//     if(addedToCart.length == 0)
//     {
//         addedToCart.push(makeCart(event_obj));
//         localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
//         event_obj.target.textContent = "Added To Cart";
//         event_obj.target.style.backgroundColor = "black";
//     }
//     else
//     {
//         let isPresent = false;
//         // loop to find already added or not 
//        for(let i = 0; i < addedToCart.length; i++)
//        {
//            if(event_obj.target.parentElement.id == addedToCart[i].mealId) // meal is already present in cart
//            {
//                isPresent = true;
//                if(event_obj.target.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling.textContent == addedToCart[i].mealQty) // qty matched  // so remove from cart
//                {
//                    addedToCart.splice(i, 1);
//                    localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
//                    event_obj.target.textContent = "Add To Cart";
//                    event_obj.target.style.backgroundColor = "#ed0331";
//                }
//                else
//                {
//                    addedToCart[i].mealQty = event_obj.target.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling.textContent;
//                    localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
//                    event_obj.target.textContent = "Added To Cart";
//                    event_obj.target.style.backgroundColor = "black";
//                }
//                break;
//            }
//        }
//         if(!isPresent)  // not present
//         {
//             addedToCart.push(makeCart(event_obj));
//             localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
//             event_obj.target.textContent = "Added To Cart";
//             event_obj.target.style.backgroundColor = "black";
//         }
//     }
// }

// async function cart(event_obj)
// {
//     const mealId = event_obj.target.parentElement.getAttribute("id");

//     try{
//         const get_cart_url = `http://localhost:3010/carts/meal/${mealId}`;

//         const response = await fetch(get_cart_url, {method : "GET"});
//         const response_data = await response.json();

//         if(response_data)
//         {
//            // meal present in db // so remove meal from cart
//             const del_cart_url = `http://localhost:3010/carts/${mealId}`;

//             const res = await fetch(del_cart_url, {method : "DELETE"});
//             return change_cartBtn_color();
//         }

//         // meal is not present in cart in db
//         addToCart(event_obj);

//     }catch(error){
//         console.log(error.message);
//     }
// }

async function addToCart(event_obj)
{
    let cart = makeCart(event_obj);
    // console.log(cart);
    cart = JSON.stringify(cart);

    try{
        const cart_url = "https://box8.herokuapp.com/carts";
        const response = await fetch(cart_url, {
            method : "POST", 
            body : cart,
            headers : {
                "Content-Type" : "application/json"
            }
        });

        change_cartBtn_color();

    }catch(error){
        console.log(error.message);
    }
}


async function change_cartBtn_color(){
    try{
        const cart_url = `https://box8.herokuapp.com/carts/user/${localStorage.getItem("userId")}`;
        const response = await fetch(cart_url, {
            method : "GET"
        });

        const response_data = await response.json();

        // console.log(response_data);

        // changing color of cart buttons of all the meals added to cart
        if(response_data.length > 0)
        {
            response_data.forEach((cart) => {
                let cart_btn = document.getElementById(cart.mealId).lastElementChild;
                cart_btn.style.backgroundColor = "black";
                cart_btn.textContent = "Added To Cart";
            });
        }

    }catch(error){
        console.log(error.message);
    }
}

function makeCart(event_obj)
{
    let meal_category = event_obj.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.src;
    if(meal_category.includes("non-veg"))
    {
        meal_category = "non-veg";
    }
    else
    {
        meal_category = "veg";
    }
    let cart = {
        mealId : event_obj.target.parentElement.id,
        mealThumb : event_obj.target.parentElement.firstElementChild.src,
        mealCategory : meal_category,
        meal : event_obj.target.parentElement.firstElementChild.nextElementSibling.lastElementChild.textContent,
        mealPrice : event_obj.target.previousElementSibling.previousElementSibling.firstElementChild.lastElementChild.textContent,
        mealArea : event_obj.target.previousElementSibling.previousElementSibling.lastElementChild.textContent,
        mealQty : event_obj.target.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling.textContent,
        userId : localStorage.getItem("userId")
    };
    return cart;
}

// ------------------------------------------------------------------------------------------>

function storeSelectedMeal(event_obj)
{
    let target = event_obj.target; 
    let selectedMeal;
    if(target.hasAttribute("src") == true)
    {
        // for img // mealThumb
        selectedMeal = target.parentElement.id;
    }
    else
    {
        // for h4 // mealName
        selectedMeal = target.parentElement.parentElement.id;
    }
    localStorage.setItem("selectedMeal", JSON.stringify(selectedMeal));
}

// ------------------------------------------------------------------------------------------>
let addedToFavourite = JSON.parse(localStorage.getItem("addedToFavourite")) || [];
// let favMeals = JSON.parse(localStorage.getItem("favMeals")) || [];

// changeFavColor();

function addToFavourite(event_obj)
{
    if(addedToFavourite.length == 0)
    {
        addedToFavourite.push(makeFav(event_obj));
        localStorage.setItem("addedToFavourite", JSON.stringify(addedToFavourite));
        event_obj.target.style.backgroundColor = "#ed0331";
    }
    else
    {
        var doesExist = false;
        for(let i = 0; i < addedToFavourite.length; i++)
        {
            if(addedToFavourite[i].mealId == event_obj.target.parentElement.parentElement.id)
            {
                doesExist = true;
                addedToFavourite.splice(i, 1);
                localStorage.setItem("addedToFavourite", JSON.stringify(addedToFavourite));
                event_obj.target.style.backgroundColor = "#fedfe5";
                break;
            }
        }
        if(!doesExist)
        {
            addedToFavourite.push(makeFav(event_obj));
            localStorage.setItem("addedToFavourite", JSON.stringify(addedToFavourite));
            event_obj.target.style.backgroundColor = "#ed0331";
        }
    }
    // changeFavColor();
}

function makeFav(event_obj)
{
    let meal_cat = event_obj.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src;
        if(meal_cat.includes("non-veg"))
        {
            meal_cat = "non-veg"
        }
        else
        {
            meal_cat = "veg";
        }
        let fav = {
            mealThumb : event_obj.target.parentElement.parentElement.firstElementChild.src,
            mealCategory : meal_cat,
            meal : event_obj.target.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.textContent,
            mealPrice : event_obj.target.parentElement.previousElementSibling.firstElementChild.lastElementChild.textContent,
            mealArea : event_obj.target.parentElement.previousElementSibling.lastElementChild.textContent,
            mealId : event_obj.target.parentElement.parentElement.id,
        };
        return fav;
}

// ------------------------------------------------------------------------------------------>
// adding eventListener to Sidebar anchor tags
document.querySelectorAll(`a[href="#"]`).forEach((anchor) => {
    anchor.addEventListener("click", function (event_obj){
        event_obj.preventDefault();
        // console.log(event_obj);
        document.qureySelecotr(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth" 
        });
    })
})
// ------------------------------------------------------------------------------------------>