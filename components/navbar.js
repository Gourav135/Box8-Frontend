function navbar(){
    return` <div class="navbar">
    <div id="left_side">
     <a href="./index.html">
      <img id="box8" src="https://d2pc4443o2qatl.cloudfront.net/20220112094354/assets/images/logo.png"/>
      
     </a>
      <input type="text" id="video" placeholder="🗺️ Enter Delivery Location">
     
    </div>
    <div id="Right_side">
        <div id="eatclub" >
            <img class="icon" id="icon" src="https://d2pc4443o2qatl.cloudfront.net/20220112094354/assets/images/eatclub.svg" alt="">
            <p>Eatclub</p>
        </div>
        <div id="line"></div>
        <div id="deals">
          <img id="icon" src="https://cdn-icons-png.flaticon.com/512/879/879757.png" alt="">
          <p>Deals</p>
          <img id="icon" src="./icons/arrow.png" alt="">
        </div>
        <div id="line"></div>
        <div id="favourites" >
          <img id="icon" src="https://cdn-icons-png.flaticon.com/512/130/130195.png" alt="">
          <p>Favourites</p>
        </div>
        <div id="line"></div>
        <div id="cart">
          <img id="icon" src="https://as1.ftcdn.net/v2/jpg/00/23/29/10/1000_F_23291030_lEJ8Fz8w1gWqJlVbRaNrHWjlYhTGdweF.jpg" alt="">
        <p>Cart</p>
        </div>
        <div id="line"></div>
        <div id="sign" >
          <img id="icon" src="./icons/user.png" alt="">
        <p id="change_name">Profile</p>
        </div>`
}

export default navbar
