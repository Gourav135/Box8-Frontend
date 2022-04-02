
// var userName = JSON.parse(localStorage.getItem("userdet")) || [];

// function signup() {
//     var name=document.getElementById("name").value
//     var email = document.getElementById("mail").value
//     var pass = document.getElementById("pass").value
    
//     var obj = {
//         name: name,
//         password:pass
//     };

//     userName.push(obj);
//     localStorage.setItem("userdet", JSON.stringify(userName));


//     if (name.length == 0 || email.length == 0 || pass.length == 0) {
//         alert("Fill all Details.....!");
//     }
//     else {
//         alert("Signup Successful...!");
//         window.location.href = "signin.html";
//     }
// }

// --------------------------new code ------------------------------------------------------->
// document.querySelector("#cont").addEventListener("click", signup);

async function signup()
{
    let user_data = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#mail").value,
        password : document.querySelector("#pass").value
    };

    user_data = JSON.stringify(user_data);

    try{
        const register_url = "https://box8.herokuapp.com/register";
        const response = await fetch(register_url, {
            method : "POST", 
            body : user_data,
            headers : {
                "Content-Type" : "application/json"
            }
        });

        const response_data = await response.json();
        console.log(response_data);
        if(response_data == true)
        {
            // validation successful
            window.location.href = "signin.html";
        }

        // validation unsuccessful
        const errors = response_data.map((error) => {
            return error.msg;
        });
        
        document.querySelector("#display_errors").textContent = errors.join(" ");

    }catch(error){
        console.log(error.message);
    }
}