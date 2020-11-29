$(document).ready(function(){

       // Page containers content
   function createToggleContainers(){
    var htmlChunk = `
    <div id="homeContent">

          
            
            <div class="cardContainer">
            
                  <div tabindex="1" data-toggle="modal" data-target="#myModal" class="card card-1" id="card1">
                     <img src="images/messageBoardV4-3.png" alt="Programming Showcase">
                     <div class="cardcontainer">
                        <span class="cardSubTitle">Programming Showcase</span>
                        <p>PHP + MySQL + HTML+ CSS + JS/JQUERY</p>
                     </div>
                  </div>           
                  <div tabindex="1" data-toggle="modal" data-target="#myModal2" class="card card-2" id="card2">
                     <img src="images/codedrop_preview.png" alt="Programming Showcase">
                     <div class="cardcontainer">
                        <span class="cardSubTitle">Programming Showcase</span>
                        <p>PHP + MySQL + Bootstrap</p>
                     </div>
                  </div> 
                  <div tabindex="1" data-toggle="modal" data-target="#myModal3" class="card card-3" id="card3">
                     <img src="images/wp_theme_preview_1.png" alt="Theme Showcase">
                     <div class="cardcontainer">
                        <span class="cardSubTitle">Theme Showcase</span>
                        <p>Wordpress + PHP + HTML + CSS</p>
                     </div>
                  </div>
                  <!--- <div tabindex="1" data-toggle="modal" data-target="#myModal7" class="card card-3" id="card7">                    
                     <img src="images/tree_on_cliff_by.png" alt="Graphics Showcase">                    
                     <div class="cardcontainer">                    
                       <span class="cardSubTitle">Graphics Showcase</span>                     
                       <p>Tree</p>                     
                     </div>                    
                  </div>  -->           
               
               </div>

            <a tabindex="1" id="loadMore" class="btn btn-primary cust-button cust-ease">Load More</a>

            <div id="loadMoreContent" class="cardContainer">
                    <div tabindex="1" data-toggle="modal" data-target="#myModal4" class="card card-4" id="card4">
                      <img src="images/wptheme01.png" alt="Theme Showcase">
                      <div class="cardcontainer">
                        <span class="cardSubTitle">Theme Showcase</span> 
                        <p>Joomla CMS Theme</p>                     
                      </div>                    
                    </div>                                   
                    <div tabindex="1" data-toggle="modal" data-target="#myModal5" class="card card-5" id="card5">                    
                      <img src="images/ViewOne.png" alt="Theme Showcase">                    
                      <div class="cardcontainer">                    
                        <span class="cardSubTitle">Theme Showcase</span>                     
                        <p>HTML/CSS Animal Conservation Theme</p>                     
                      </div>                    
                    </div>
                    <div tabindex="1" data-toggle="modal" data-target="#myModal6" class="card card-6" id="card6">                    
                      <img src="images/layout2.png" alt="Theme Showcase">                    
                      <div class="cardcontainer">                    
                        <span class="cardSubTitle">Theme Showcase</span>                     
                        <p>HTMl/CSS Layout</p>                     
                      </div>                    
                    </div>  
            
                    <!--    
                                  
                    <div tabindex="1" data-toggle="modal" data-target="#myModal8" class="card card-8" id="card8">                    
                      <img src="images/projectMovement.png" alt="Game Showcase">                    
                      <div class="cardcontainer">                    
                        <span class="cardSubTitle">Game Showcase</span>                     
                        <p>Game Project Movement</p>                     
                      </div>                    
                    </div>                      
                        
                    <div tabindex="1" data-toggle="modal" data-target="#myModal9" class="card card-9" id="card9">                    
                      <img src="images/abstract.jpg" alt="Graphics Showcase">                    
                      <div class="cardcontainer">                    
                        <span class="cardSubTitle">Graphics Showcase</span>                     
                        <p>3D Abstract Render</p>                     
                      </div>                    
                    </div>                                     
                                    
                    <div tabindex="1" data-toggle="modal" data-target="#myModal10" class="card card-10" id="card10">                    
                      <img src="images/caveRoom.png" alt="Game Showcase">                    
                      <div class="cardcontainer">                    
                        <span class="cardSubTitle">Game Showcase</span>                     
                        <p>Cave Room</p>                     
                      </div>                    
                    </div>                   -->

            </div>
    
            <!-- end -->
         </div>

    <!-- Project 1 Modal -->
    <div id="gamesConent">
    
    <div class="cardContainer">
    
    <!-- <div tabindex="1" class="card card-1" id="pageCard1">
    <img src="images/caveRoom.png" alt="Cave Room">
    <div class="cardcontainer">
    <span class="cardSubTitle">Cave Room</span>
    <p>2D avoider game 
    </p>
    </div>
    </div>
    
    <div tabindex="1" class="card card-2" id="pageCard2">
    <img src="images/projectMovement.png" alt="Cave Room">
    <div class="cardcontainer">
    <span class="cardSubTitle">Project Movement</span>
    <p>An action-rpg game
    </p>
    </div>
    </div>
    
    <div tabindex="1" class="card card-3" id="pageCard3">
    <img src="images/greenSquareWorld.png" alt="Cave Room">
    <div class="cardcontainer">
    <span class="cardSubTitle">Green Block World</span>
    <p>Top-down avoider game
    </p>
    </div>
    </div> --> 
    
    </div>     
   
    
    <!-- end -->
    </div>
    <!-- start -->
    <div id="graphicsContent">   
    
    <div class="cardContainer">
    
    <div tabindex="1" data-toggle="modal" data-target="#myModalIsland" class="card card-1" id="pageCard4">
    <div style="max-width: 325px; max-height: 172px; padding: unset; overflow: hidden;">
    <img style="height: 285px;" src="images/renderB6.png" alt="Floating Island">
    </div>
    
    <div class="cardcontainer">
    <span class="cardSubTitle">Floating Island</span>
    <p>3D blender model + render
    </p>
    </div>
    </div>
    
    <div tabindex="1" data-toggle="modal" data-target="#myModal9" class="card card-2" id="pageCard5">
    <img src="images/abstract.jpg" alt="Abstract Render">
    <div class="cardcontainer">
    <span class="cardSubTitle">Abstract Render</span>
    <p>Cinema 4D abstract render</p>
    </div>
    </div>
    
    <div tabindex="1" data-toggle="modal" data-target="#myModal7" class="card card-3" id="pageCard6">
    <img src="images/tree_on_cliff_by.png" alt="Tree painting">
    <div class="cardcontainer">
    <span class="cardSubTitle">Leaves</span>
    <p>MS Paint of painting of tree
    </p>
    </div>
    </div>

    <div class="sub-space">
    <p>Creative works that are neither web development nor web design related can be found here.</p>
    </div>
    
    </div>   

    

    <!-- end -->
    </div>
    <div id="itContent">
    <!-- start -->
   
    
    <div class="cardContainer">
    
    <div tabindex="1" class="card card-1" id="pageCard7" data-toggle="modal" data-target="#myModal">
    <img src="images/messageBoardV4-3.png" alt="Message Board" >
    <div class="cardcontainer">
    <span class="cardSubTitle">Custom Message Board</span>
    <p>PHP + MySQL + HTML+ CSS + JS/JQUERY
    </p>
    </div>
    </div>
    
    <div tabindex="1" class="card card-2" id="pageCard8" data-toggle="modal" data-target="#myModalCalc">
    <img src="images/calc-preview.png" alt="Calc" >
    <div class="cardcontainer">
    <span class="cardSubTitle">PHP OOP Calc</span>
    <p>PHP
    </p>
    </div>
    </div>

    <div tabindex="1" data-toggle="modal" data-target="#myModal2" class="card card-3" id="pageCard9">
    <img src="images/codedrop_preview.png" alt="Programming Showcase">
    <div class="cardcontainer">
    <span class="cardSubTitle">Programming Showcase</span>
    <p>PHP + MySQL + Bootstrap</p>
    </div>
    </div>
    
    <!--- <div tabindex="1" class="card card-3" id="pageCard9">
    <img src="images/reName.png" alt="Script" >
    <div class="cardcontainer">
    <span class="cardSubTitle">Basic linux script</span>
    <p>Basic Linux command line
    </p>
    </div> 
    </div> -->

    <div class="sub-space">
    <p>Web Development: Programming / script related work. A select few projects will be featured on this page. These are just some examples of creative code related projects I wish to present.</p>
    </div>

    </div>
    

    

    <!-- end -->
    </div>
    <div id="webContent">
    <!-- start -->   
    
    <div class="cardContainer">

        <div tabindex="1" data-toggle="modal" data-target="#myModal3" class="card card-1" id="pageCard09">
        <img src="images/wp_theme_preview_1.png" alt="Theme Showcase">
        <div class="cardcontainer">
        <span class="cardSubTitle">Theme Showcase</span>
        <p>Wordpress CMS Theme</p>
        </div>
        </div>
    
       <div tabindex="1" data-toggle="modal" data-target="#myModal5" class="card card-2" id="pageCard10">
       <img src="images/ViewOne.png" alt="Cave Room">
       <div class="cardcontainer">
       <span class="cardSubTitle">Animal Conservation Theme</span>
       <p>HTML + CSS Theme
       </p>
       </div>
       </div>
    
       <div tabindex="1" data-toggle="modal" data-target="#myModal4" class="card card-3" id="pageCard11">
       <img src="images/wptheme01.png" alt="Cave Room">
       <div class="cardcontainer">
       <span class="cardSubTitle">Joomla CMS Template</span>
       <p>Joomla CMS + HTML + CSS
       </p>
       </div>
       </div>
    
       <!--- <div tabindex="1" data-toggle="modal" data-target="#myModal6" class="card card-3" id="pageCard12">
       <img src="images/layout2.png" alt="Cave Room">
       <div class="cardcontainer">
       <span class="cardSubTitle">Gaming Site Template</span>
       <p>PHP + HTML + CSS 
       </p>
       </div>
       </div> -->

       <div class="sub-space">
       <p>Being the graphics designer and administrator of a gaming website has given me experience in designing simple yet tasteful themes and layouts for various websites and web design projects. In this page a select few will be featured.</p>
       </div>
    
    </div>
    

    
    <div id="webPageContentContainer" style="display:none;">
    
       <div id="card10Link"></div>
       <span class="icysubtitle">Animal Conservation Theme</span><br>
       Normal view of a website on animal conservation. I\'ve made a flexible css web layout for my Web Design class.<br>
       <img class="dispimg" src="images/ViewOne.png" /><br>
       <br><br>
    
       <span class="icysubtitle">Animal Conservation Theme (Flex View)</span><br>
       The flex view hides the menu and re-sizes the text for mobile friendly use.<br>
       <img class="dispimg"  src="images/viewTwo.png" /><br>
       <br><br>
    
       <div id="card11Link"></div>
       <span class="icysubtitle">Joomla! Theme</span><br>
       A hand made Joomla! CMS theme made from the ground up. Supports multiple module placement.<br>
       <img class="dispimg" src="images/wptheme01.png" /><br>
       <br><br>
       <img class="dispimg" src="images/wptheme02.png" /><br>
       <br><br>
    
       <div id="card12Link"></div>
       <span class="icysubtitle">Gaming Site Theme</span><br>
       The below image is taken from a layout I created around 2005 for a website called X3Gen. Again, I made this using Dreamweaver and Photoshop.<br>
       <img class="dispimg" src="images/layout2.png" /><br>
       <br><br>
    
       <span class="icysubtitle">Liquid FX</span><br>
       The image below is taken from a layout I made to sell. The website was a nonexistent "Liquid Fx".<br>
       <img class="dispimg" src="images/layout3.png" /><br>
       <br><br>
       Thank you for looking at my work. Have a good day.<br>
       </p>
    </div>
    <!-- end -->
    </div>
    <div id="skillsContent">
      <div class="cardContainer">
    <!-- start -->
    
    <div class="card card-1 skill-card">
       <p><i class="devicon-cplusplus-line skill-font"></i></p>
       <p>
       C++
       </p>
    </div>
    
    <div class="card card-2 skill-card">
       <p><i class="devicon-java-plain skill-font"></i></p>
       <p>
       Java
       </p>
    </div>
    
    <div class="card card-3 skill-card">
       <p><i class="devicon-php-plain skill-font"></i></p>
       <p>
       PHP
       </p>
    </div>
    
    <div class="card card-4 skill-card">
       <p><i class="devicon-mysql-plain skill-font"></i></p>
       <p>
       MySQL
       </p>
    </div>
    
    <div class="card card-5 skill-card">
       <p><i class="devicon-html5-plain skill-font"></i></p>
       <p>
       HTML
       </p>
    </div>
    
    <div class="card card-6 skill-card">
       <p><i class="devicon-css3-plain skill-font"></i></p>
       <p>
       CSS
       </p>
    </div>
    
    <div class="card card-7 skill-card">
       <p><i class="devicon-javascript-plain skill-font"></i></p>
       <p>
       JavaScript
       </p>
    </div>
    
    <div class="card card-8 skill-card">
       <p><i class="devicon-bootstrap-plain skill-font"></i></p>
       <p>
       Bootstrap
       </p>
    </div>
    
    <div class="card card-9 skill-card">
       <p><i class="devicon-photoshop-plain skill-font"></i></p>
       <p>
       Photoshop
       </p>
    </div>
    
    <div class="card card-10 skill-card">
       <p><i class="devicon-apache-plain skill-font"></i></p>
       <p>
       Apache
       </p>
    </div>
    
    <p>
    
    <span class="icysubtitle">Programming experience</span><br>
    
    - C++, Java, PHP, CFML (Coldfusion), MySQL, HTML, CSS, JS, Linux Command Line, Actionscript, SourceTree, GitKraken, Drupal (Twig) 
    
    <br><br>
    
    <span class="icysubtitle">Graphic experience</span><br>
    
    - Adobe (Photoshop, Dreamweaver, Animate), Blender3D, Cinema 4D, 3DSM 
    
    <br><br>
    
    <span class="icysubtitle">Software experience</span><br>
    
    - IIS (Windows Server), Apache Solr, VM, RemoteDesktop, Windows, Mac, Linux, Ubuntu, MS Office (Project, Word, Excel, Access, Powerpoint), Minitab, Wireshark
    
    <br><br>
    
    <span class="icysubtitle">Other</span><br>
    
    - Typing speed 80WPM
    
    <br><br>
    
    </p>
    
    <!-- end -->
    </div> </div>
    `;
    document.getElementById('appendToggleContainers').innerHTML = htmlChunk;
 };
 createToggleContainers();
 
 // Modal test
 function createModalTest(){
    var htmlChunk = `  
    <!-- Project 1 Modal -->
    <div id="myModal" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Custom Message Board</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch message board built using basic PHP + MySQL</h3>
    <p><ul>
    <li>Allows guests to register as users, post threads, post replies, and report threads</li>
    <li>Each user gets their own profile page with a "Recent Posts" section and "Peronal Note" section</li> 
    <li>Admin can modify and delete any post, whereas user can only modify and delete their own post</li> 
    <li>Admin can also pin/unpin posts, as well as view reported posts</li>     
    </ul></p>
    <p><img class="dispimg" src="images/messageBoardV4-3.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">        
    <a class="btn btn-primary" target="_blank" href="http://eahmed.byethost10.com/boards">Live Demo</a>
    </div>
    </div>
    </div>
    </div>

    <!-- Project 2 Modal -->
    <div id="myModal2" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>CodeDrop Web App</h2>
    </div>
    <div class="modal-body">
    <h3>A pastebin clone built using basic PHP + MySQL + JQuery + Bootstrap</h3>
    <p>
    <ul>
    <li>Built using functions from library of message board project (code refactoring)</li>
    <li>Allows guests to post code and get a random shareable link</li>
    <li>Guests can also optionally register and track their code posts</li>
    </ul>
    </p>
    <p><img class="dispimg" src="images/codedrop_preview_1.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    <a class="btn btn-primary" target="_blank" href="http://eahmed.byethost10.com/codedrop">Live Demo</a>        
    </div>
    </div>
    </div>
    </div>

    <!-- Project 3 Modal -->
    <div id="myModal3" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Wordpress Theme</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch theme using basic HTML + CSS</h3>
    <p><ul>
    <li>Dynamically generates navigation (e.g. see About page) and shows child pages</li>
    <li>Fully responsive for desktop, tablet, and mobile viewport resolutions</li>
    <li>Uses custom template for home and sub-pages</li>
    </ul></p>
    <p><img class="dispimg" src="images/wp_theme_preview_1.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    <a class="btn btn-primary" target="_blank" href="http://eahmed.byethost10.com/wp">Live Demo</a>     
    </div>
    </div>
    </div>
    </div>

    <!-- Project 4 Modal -->
    <div id="myModal4" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Joomla CMS Theme</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch theme using basic HTML + CSS</h3>
    <p><ul>
    <li>Dynamically generates navigation</li>
    <li>Fully responsive for desktop, tablet, and mobile viewport resolutions</li>
    <li>Completely original theme built from scatch</li>
    <li>Contains members only area, shopping cart, blog, and gallery components</li>
    </ul></p>
    <p><img class="dispimg" src="images/wptheme01.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">   
    
    </div>
    </div>
    </div>
    </div>

    <!-- Project 5 Modal -->
    <div id="myModal5" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Animal Convervation Theme</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch theme using basic HTML + CSS</h3>
    <p><ul>
    <li>Fully responsive for desktop, tablet, and mobile viewport resolutions</li>
    <li>Completely custom built from scatch template</li>
    </ul></p>
    <p><img class="dispimg" src="images/ViewOne.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    </div>
    </div>
    </div>
    </div>

    <!-- Project 6 Modal -->
    <div id="myModal6" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Photoshop Theme</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch theme using basic Adobe Photoshop, HTML + CSS</h3>
    <p><ul>
    <li>Dynamically generates navigation using PHP</li>
    <li>Layout created in Adobe Photoshop, spliced and converted into HTML/CSS</li>
    <li>Dynamic inclusions for menu and page content</li>
    </ul></p>
    <p><img class="dispimg limit-width" src="images/layout2.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    </div>
    </div>
    </div>
    </div>

    <!-- Project 7 Modal -->
    <div id="myModal7" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Graphics Showcase</h2>
    </div>
    <div class="modal-body">
    <h3>An original graphics design created in MS Paint</h3>
    <p><ul>
    <li>Created using simple tools</li>
    <li>Simple bright colors</li>
    <li>Wind causes leaves to scatter</li>
    </ul></p>
    <p><img class="dispimg" src="images/tree_on_cliff_by.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    </div>
    </div>
    </div>
    </div>

    <!-- Project 8 Modal -->
    <div id="myModal8" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Game Showcase</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch theme using basic HTML + CSS</h3>
    <p><ul>
    <li>Dynamically generates navigation (e.g. see About page) and shows child pages</li>
    <li>Fully responsive for desktop, tablet, and mobile viewport resolutions</li>
    <li>Uses custom template for home and sub-pages</li>
    </ul></p>
    <p><img class="dispimg limit-width" src="images/projectMovement.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    </div>
    </div>
    </div>
    </div>

    <!-- Project 9 Modal -->
    <div id="myModal9" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>3D Abstract Render</h2>
    </div>
    <div class="modal-body">
    <h3>An abstract 3D render made from deforming a sphere</h3>
    <p><ul>
    <li>First a sphere was stretched out</li>
    <li>Then a deformer was applied</li>
    <li>The rendering was slightly touched up in Photoshop</li>
    </ul></p>
    <p><img class="dispimg limit-width" src="images/abstract.jpg" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">
    </div>
    </div>
    </div>
    </div>

    <!-- Project 10 Modal -->
    <div id="myModal10" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>Wordpress Theme</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch theme using basic HTML + CSS</h3>
    <p><ul>
    <li>Dynamically generates navigation (e.g. see About page) and shows child pages</li>
    <li>Fully responsive for desktop, tablet, and mobile viewport resolutions</li>
    <li>Uses custom template for home and sub-pages</li>
    </ul></p>
    <p><img class="dispimg limit-width" src="images/caveRoom.png" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">   
    </div>
    </div>
    </div>
    </div>

    <!-- Project Calc Modal -->
    <div id="myModalCalc" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>PHP Calc</h2>
    </div>
    <div class="modal-body">
    <h3>A basic PHP OOP calculator that accepts parameters and outputs results</h3>
    <p><ul>
    <li>The calculator class is defined and contains some defintions that can be extended</li>
    <li>It is later constructed as a new calculator(), the input is split by spaces using PHP's built in preg_split</li>
    <li>preg_split("/[\s,]+/", $input) then stores all input into an array</li>
    <li>The $cal->getresult function is called, which then calls the checkoperation function</li>
    <li>checkoperation accepts add, concat or sotas followed by numebrs (e.g. add 5 10 15) and returns calculation (e.g. 30)</li>
    </ul></p>
    <p><img class="dispimg limit-width" src="images/calc-preview.png" alt="image preview of the calculator class" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">   
    </div>
    </div>
    </div>
    </div>

    <!-- Project Island Modal -->
    <div id="myModalIsland" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content modal-dialog-centered ">
    <div class="modal-header cust-modal-header">
    <button type="button" class="btn close" data-dismiss="modal">&times;</button>
    <h2>3D Island</h2>
    </div>
    <div class="modal-body">
    <h3>A built-from-scratch 3D model created in Blender3D</h3>
    <p><ul>
    <li>3D model was first created </li>
    <li>It was then textured</li>
    <li>It was then slightly touched up in Photoshop</li>
    </ul></p>
    <p><img class="dispimg limit-width" src="images/renderB6.png" alt="image preview of render of 3D island" width="700px" /></p>
    <p>
    </p>
    </div>
    <div class="modal-footer">   
    </div>
    </div>
    </div>
    </div>

    `;
    document.getElementById('appendModals').innerHTML = htmlChunk;
 }
 createModalTest();
 
});