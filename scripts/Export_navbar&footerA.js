function navbar() {
  return `<nav>
  <div id="navbar">
          <img src="./media/last edit.png" id='logo' class="logo" />
          <img src="" alt="" id="logo2" class="logo">

          <ul>
            <li id="register"><a href="#">Register</a></li>
            <li id="login"><a href="#">Sign In</a></li>
            <li><a href=""><img src="https://img.icons8.com/ios/344/search--v1.png" id='srch_lv'></a></li>
            <li id="menubtn">&#8803; <div id="smallscr">


              </div>
            </li>

          </ul>

        <div id="extra_nav" class="notdisplay">
          <p id="register1"><a href="#">Register</a></p>
          <p id="login1"><a href="#">Sign In</a></p>
        </div>
    
  
</div>
  
</nav>
`
}

function footer() {
  return `<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-2">
      <p class="lead">ABOUT</p>
      <p><a href="./about us page/index.html" title="About us">About us</a></p>
      <p><a href="./Contact-us-Page-main/contact.html" title="Contact">Contact</a></p>
    </div>
    <div class="col-xs-12 col-sm-2">
    </div>

    <div class="col-xs-12 col-sm-2">
      <p class="lead">LEGAL</p>
      <p><a href="#" title="Terms of Service">Terms of Service</a></p>
      <p><a href="#" title="Privacy">Privacy</a></p>
    </div>
    
    <div class="col-xs-12 col-sm-2">
    </div>
    <div class="col-xs-12 col-sm-2">
      <p class="lead">LANGUAGE</p>
      <p><a href="#">English(Ind)</a></p>
    </div>
  </div>

  <hr />
  <div>
  <p><center>"Don't Make Excuses, Make Result"</center> <p>
  
</div>`
}


export { navbar, footer } 