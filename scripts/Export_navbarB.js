export const NavB = () => {
    return ` <!-- main nav -->
    <nav>
        <!-- logo -->
        <div id="logo_c">
            <a>
                <img src="./media/last edit.png" class="large_dis1">
                <img src="./media/last edit.png" class="small_dis1">
            </a>
        </div>

        <!-- naviagation tabs -->
        <div id="nav_tabsA" class="large_dis">
            <div class="navtabA"></div>
            <div class="navtabA">Calculators</div>
            <div class="navtabA">Exercise plans</div>
            <div class="navtabA">My personal Trainer</div>
            <div class="navtabA" id="prof_name">
                <p>Profile Is Incomplete</p><span id="dropArrow"></span>
            </div>
            <div class="navtabA"><i class="fa fa-search" aria-hidden="true"></i></div>
        </div>

        <!-- responsive bar -->
        <div id="nav_tabsB" class="small_dis">
            <div class="navtabB"><i class="fa fa-plus filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-comments filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-search filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-cog filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-bars filt-invert" aria-hidden="true"></i></div>
        </div>
    </nav>`
}

function navbar() {
    return ` <div id="container">
    <div id="left_nav">
        <a href="#"><img src="./media/last edit.png" alt=""></a>
    </div>
    <div id="right_nav">
        <a href="">
            <p>   </p>
        </a>
        <a href="./bmi-calculator-javascript/index.html">
            <p>Calculator</p>
        </a>
        <a href="./exercise-list.html">
            <p>Exercises and plans</p>
        </a>
        <a href="./trainer.html">
            <p>My personal trainer</p>
        </a>
        
        <!-- Ram's change -->
        
        <a  class="dropdown" >
        <p style="display:inline-flex" id="profile_tab">
            <i   class="fa fa-user" aria-hidden="true"></i>
            <p style="display:inline" id="user_nameOremail">
            </p> 
            <i  class="fa fa-caret-down" aria-hidden="true">  </i>
        </p>
            <div id="logout_container" class="dropdown-content">
               <ul>
                <li class="menu_edit">Edit Profile</li>
                <li class="menu_line"></li>
                <li class="menu_language">Language</li>
                <li>In English</li>
                <li class="menu_line"></li>
                <li class="menu_logout" >Logout</li>
               </ul>
                
            </div>
        
             
    </a>



        <!--  -->

    </div>
</div>`
}

export default navbar;