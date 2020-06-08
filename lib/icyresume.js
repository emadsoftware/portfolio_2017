$(document).ready(function(){
   
   // Mobile menu toggle
   $("#mobileButtonToggle").click(function(){
      $("#divSpanMobileMenu").slideToggle("slow");
   });
   
   $('#spnTop').on("click",function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');
   });  
   
   // Navigation > Home
   $('#homeToggle').on("click", function(){
      $('#homeContent').slideDown();
      $('#gamesConent').slideUp();
      $('#graphicsContent').slideUp();         
      $('#itContent').slideUp();         
      $('#webContent').slideUp();         
      $('#skillsContent').slideUp();         
      
      $('#homeToggle').addClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
   });
   
   // Navigation > Games
   $('#gamesToggle').on("click", function(){
      $('#homeContent').slideUp();
      $('#gamesConent').slideDown();
      $('#graphicsContent').slideUp();
      $('#itContent').slideUp();         
      $('#webContent').slideUp();         
      $('#skillsContent').slideUp(); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').addClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
   });
   
   // Navigation > Graphics
   $('#graphicsToggle').on("click", function(){
      $('#homeContent').slideUp();
      $('#gamesConent').slideUp();
      $('#graphicsContent').slideDown();
      $('#itContent').slideUp();         
      $('#webContent').slideUp();         
      $('#skillsContent').slideUp(); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').addClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
   });

   // Navigation > IT
   $('#itToggle').on("click", function(){
      $('#homeContent').slideUp();
      $('#gamesConent').slideUp();
      $('#graphicsContent').slideUp();
      $('#itContent').slideDown();         
      $('#webContent').slideUp();         
      $('#skillsContent').slideUp(); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').addClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
   });
   
   // Navigation > Web
   $('#webToggle').on("click", function(){
      $('#homeContent').slideUp();
      $('#gamesConent').slideUp();
      $('#graphicsContent').slideUp();
      $('#itContent').slideUp();         
      $('#webContent').slideDown();         
      $('#skillsContent').slideUp(); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').addClass('lighten');
      $('#skillsToggle').removeClass('lighten');
   });

   // Navigation > Skills
   $('#skillsToggle').on("click", function(){
      $('#homeContent').slideUp();
      $('#gamesConent').slideUp();
      $('#graphicsContent').slideUp();
      $('#itContent').slideUp();         
      $('#webContent').slideUp();         
      $('#skillsContent').slideDown(); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').addClass('lighten');
   });
   
   // Modal stuff
   $('#loadMore').on("click", function(){
      //  $('#loadMore').addClass('fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom');
      $('#loadMoreContent').slideToggle();
      $('#loadMore').toggleClass('cust-ease');
      $('#loadMore').slideToggle();      
      $('html, body').animate({
         scrollTop: $("#loadMoreContent").offset().top
      }, 1000);
   })
   
   // Page containers content
   function createToggleContainers(){
      var htmlChunk = `  
      <!-- Project 1 Modal -->
      <div id="gamesConent">
      <p>
      
      <span style="font-size:28px; color:#5e7ed7;" class="fa fa-arrow-circle-right"></span><span id="icybreadcrumbtext">GAMES DEVELOPMENT</span>
      
      <hr></p>
      
      <div class="cardContainer">
      
      <div class="card" id="pageCard1">
      <img src="images/caveRoom.png" alt="Cave Room">
      <div class="cardcontainer">
      <span class="cardSubTitle">Cave Room</span>
      <p>2D avoider game 
      </p>
      </div>
      </div>
      
      <div class="card" id="pageCard2">
      <img src="images/projectMovement.png" alt="Cave Room">
      <div class="cardcontainer">
      <span class="cardSubTitle">Project Movement</span>
      <p>An action-rpg game
      </p>
      </div>
      </div>
      
      <div class="card" id="pageCard3">
      <img src="images/greenSquareWorld.png" alt="Cave Room">
      <div class="cardcontainer">
      <span class="cardSubTitle">Green Block World</span>
      <p>Top-down avoider game
      </p>
      </div>
      </div>
      
      </div>
      
      <p>Although I no longer have time to work on games, in the past I've worked on making small interactive games. These games were created using Macromedia Flash 8 (now called Adobe Animate) and programmed via Actionscript 2.0 which is based on Javascript. In the future, I hope to learn either mobile or PC game development, given the rise in mobile-friendly gaming engines such as Unity and console-optimized gaming engine Unreal. <br><br>Click on a project to learn more...
      </p>
      
      
      <br><br><br>
      
      <div id="pageContentContainer" style="display:none;">
      <p>
      <div id="card1Link"></div>
      <span id="icysubtitle">Cave World</span><br>An avoider game with high-score API implementation, "cave room", playable <a href="http://www.kongregate.com/games/icyrealm/cave-room"> here</a>. The player is a green square that must avoid the falling spikes (triangles) and get the green, blue and yellow squares. The green squares extend the players health bar, the blue squares add points, and the yellow squares slow down the time.<br>
      <img src="images/caveRoom.png" width="500px" class="dispimg">
      <br><br><br>
      
      <div id="card2Link"></div>
      <span id="icysubtitle">Project Movement</span><br>
      This game was developed as the "main" game. In it, the player is an orange sphere that can move between multiple areas. There are obstacles to get through. Each area had a theme, a forest area, a cave area, a snowy area, and a volcanic area. The game is to date incomplete because the time needed to complete development was too much. Again, a working copy of the game can be provided upon request.<br>
      <img src="images/projectMovement.png" width="500px" class="dispimg">
      <br><br><br>
      
      <div id="card3Link"></div>
      <span id="icysubtitle">Green Block World</span><br>
      The player is the small green square and has to collect as many blue squares as possible. Meanwhile, a black square moves towards the player. If the that square gets close enough, the health bar starts going down. Keep moving!<br>
      <img src="images/greenSquareWorld.png" width="500px" class="dispimg">
      <br><br><br>
      </p>
      </div>
      
      <!-- end -->
      </div>
      <!-- start -->
      <div id="graphicsContent">
      <p>
      
      <span style="font-size:28px; color:#5e7ed7;" class="fa fa-arrow-circle-right"></span><span id="icybreadcrumbtext">GRAPHICS DEVELOPMENT</span>
      
      <hr></p>
      
      <div class="cardContainer">
      
      <div class="card" id="pageCard4">
      <div style="max-width: 325px; max-height: 182px; padding: unset; overflow: hidden;">
      <img style="height: 285px;" src="images/renderB6.png" alt="Floating Island">
      </div>
      
      <div class="cardcontainer">
      <span class="cardSubTitle">Floating Island</span>
      <p>3D blender model + render
      </p>
      </div>
      </div>
      
      <div class="card" id="pageCard5">
      <img src="images/abstract.jpg" alt="Abstract Render">
      <div class="cardcontainer">
      <span class="cardSubTitle">Abstract Render</span>
      <p>Cinema 4D abstract render</p>
      </div>
      </div>
      
      <div class="card" id="pageCard6">
      <img src="images/tree_on_cliff_by.png" alt="Tree painting">
      <div class="cardcontainer">
      <span class="cardSubTitle">Leaves</span>
      <p>MS Paint of painting of tree
      </p>
      </div>
      </div>
      
      </div>
      
      <p>Using Photoshop, Blender 3D, among others, and quickly learning new and different softwares, I was able to produce the following works. Progress is slow, but there is always something in my deviantart portfolios as well. I will feature select few on here from there. Examples of my work:
      
      <br><br><br>
      
      
      <div id="graphicsPageContentContainer" style="display:none;">
      
      <div id="card4Link"></div>
      <span id="icysubtitle">Floating Island</span><br> By quickly learning the free open-source software "Blender", I was able to quickly produce this work. The purpose of this is to demonstrate to potential employers of my quick learning ability.<br>
      <img src="images/renderB6.png" width="492px" class="dispimg" /><br>
      <br><br><br>
      
      <div id="card5Link"></div>
      <span id="icysubtitle">Abstract</span><br> By quickly learning the software "Cinema 4D", I was able to produce the following abstract work. By applying the appropriate mesh modifiders, I was able to create the work.<br>
      <img src="images/abstract.jpg" width="492px" class="dispimg" />
      <br><br><br>
      
      <div id="card6Link"></div>
      <span id="icysubtitle">Leaves</span><br>By using different brush styles provided in the excellent and free MS Paint, the following work was produced.<br>
      <img src="images/tree_on_cliff_by.png" width="492px" class="dispimg" />
      <br><br><br>
      
      Thank you for looking at my work. Have a good day.<br></p>
      
      </div>
      <!-- end -->
      </div>
      <div id="itContent">
      <!-- start -->
      <p>				
      <span style="font-size:28px; color:#5e7ed7;" class="fa fa-arrow-circle-right"></span><span id="icybreadcrumbtext">IT DEVELOPMENT</span>
      
      <hr></p>
      
      <div class="cardContainer">
      
      <div class="card" id="pageCard7">
      <img src="images/messageBoardV4-3.png" alt="Message Board" >
      <div class="cardcontainer">
      <span class="cardSubTitle">Custom Message Board</span>
      <p>Custom PHP + mySQL message board
      </p>
      </div>
      </div>
      
      <div class="card" id="pageCard8">
      <img src="images/phpCalc1.png" alt="Calc" >
      <div class="cardcontainer">
      <span class="cardSubTitle">PHP OOP Calc</span>
      <p>PHP OOP based calc
      </p>
      </div>
      </div>
      
      <div class="card" id="pageCard9">
      <img src="images/reName.png" alt="Script" >
      <div class="cardcontainer">
      <span class="cardSubTitle">Basic linux script</span>
      <p>Basic Linux command line
      </p>
      </div>
      </div>
      
      </div>
      
      <p>IT Development: Programming / script related work. A select few projects will be featured on this page. These are just some examples of creative code related projects I wish to present.</p>
      <br><br><br>
      
      <div id="itPageContentContainer" style="display:none;">
      <p>
      <div id="card7Link"></div>
      <span id="icysubtitle">Custom Message Board</span><br>
      View: <a href="http://eahmed.byethost10.com/boards">Here.</a> Although having a good background with C++, Java, and PHP, I had to quickly learn mySQL while at an internship. I  quickly taught myself mySQL, and made progress towards a mySQL database + PHP based user register and login system. A good learning process, the project shall be an educational message board.<br>
      <img class="dispimg" src="images/messageBoardV4-3.png" width="700px" />
      
      <br><br><br>						
      <div id="card8Link"></div>
      <span id="icysubtitle">PHP OOP Calc</span><br>
      Viewable <a href="processOOP.php">here</a> is a simple little PHP OOP based calculator that can perform basic functions. Didn\'t take long to code and is written in objective php.<br>
      <img class="dispimg" src="images/phpCalc1.png" alt="image preview of the calculator class" width="360px"/>
      
      <br><br><br>						
      <div id="card9Link"></div>
      <span id="icysubtitle">Linux Script</span><br>
      By quickly learning Linux command line as admin via the shell, I developed a custom script that addresses a problem a linux admin might face: Having to rename many files at once. By automation of such task, one Linux Admin can control many users and files.<br>
      <img class="dispimg" src="images/reName.png" />
      
      <br><br><br>						
      Thank you for looking at my work. Have a good day.<br>
      </p>					
      </div>
      <!-- end -->
      </div>
      <div id="webContent">
      <!-- start -->
      <p>
      
      <span style="font-size:28px; color:#5e7ed7;" class="fa fa-arrow-circle-right"></span><span id="icybreadcrumbtext">THEME DEVELOPMENT</span>
      
      <hr></p>
      
      <div class="cardContainer">
      
         <div class="card" id="pageCard10">
         <img src="images/ViewOne.png" alt="Cave Room">
         <div class="cardcontainer">
         <span class="cardSubTitle">Animal Conservation Theme</span>
         <p>HTML + CSS Theme
         </p>
         </div>
         </div>
      
         <div class="card" id="pageCard11">
         <img src="images/wptheme01.png" alt="Cave Room">
         <div class="cardcontainer">
         <span class="cardSubTitle">Joomla CMS Template</span>
         <p>Joomla CMS + HTML + CSS
         </p>
         </div>
         </div>
      
         <div class="card" id="pageCard12">
         <img src="images/layout2.png" alt="Cave Room">
         <div class="cardcontainer">
         <span class="cardSubTitle">Gaming Site Template</span>
         <p>PHP + HTML + CSS 
         </p>
         </div>
         </div>
      
      </div>
      
      <p>Being the graphics designer and administrator of a gaming website has given me experience in designing simple yet tasteful themes and layouts for various websites and web design projects. In this page a select few will be featured. 
      
      <br><br><br>
      
      
      <div id="webPageContentContainer" style="display:none;">
      
         <div id="card10Link"></div>
         <span id="icysubtitle">Animal Conservation Theme</span><br>
         Normal view of a website on animal conservation. I\'ve made a flexible css web layout for my Web Design class.<br>
         <img class="dispimg" src="images/ViewOne.png" /><br>
         <br><br>
      
         <span id="icysubtitle">Animal Conservation Theme (Flex View)</span><br>
         The flex view hides the menu and re-sizes the text for mobile friendly use.<br>
         <img class="dispimg"  src="images/viewTwo.png" /><br>
         <br><br>
      
         <div id="card11Link"></div>
         <span id="icysubtitle">Joomla! Theme</span><br>
         A hand made Joomla! CMS theme made from the ground up. Supports multiple module placement.<br>
         <img class="dispimg" src="images/wptheme01.png" /><br>
         <br><br>
         <img class="dispimg" src="images/wptheme02.png" /><br>
         <br><br>
      
         <div id="card12Link"></div>
         <span id="icysubtitle">Gaming Site Theme</span><br>
         The below image is taken from a layout I created around 2005 for a website called X3Gen. Again, I made this using Dreamweaver and Photoshop.<br>
         <img class="dispimg" src="images/layout2.png" /><br>
         <br><br>
      
         <span id="icysubtitle">Liquid FX</span><br>
         The image below is taken from a layout I made to sell. The website was a nonexistent "Liquid Fx".<br>
         <img class="dispimg" src="images/layout3.png" /><br>
         <br><br>
         Thank you for looking at my work. Have a good day.<br>
         </p>
      </div>
      <!-- end -->
      </div>
      <div id="skillsContent">
      <!-- start --><p>
      
      <span style="font-size:28px; color:#5e7ed7;" class="fa fa-arrow-circle-right"></span><span id="icybreadcrumbtext">SKILLS</span>
      
      <hr></p>
      
      <div class="card skill-card">
         <p><i class="devicon-cplusplus-line skill-font"></i></p>
         <p>
         C++
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-java-plain skill-font"></i></p>
         <p>
         Java
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-php-plain skill-font"></i></p>
         <p>
         PHP
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-mysql-plain skill-font"></i></p>
         <p>
         MySQL
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-html5-plain skill-font"></i></p>
         <p>
         HTML
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-css3-plain skill-font"></i></p>
         <p>
         CSS
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-javascript-plain skill-font"></i></p>
         <p>
         JavaScript
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-bootstrap-plain skill-font"></i></p>
         <p>
         Bootstrap
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-photoshop-plain skill-font"></i></p>
         <p>
         Photoshop
         </p>
      </div>
      
      <div class="card skill-card">
         <p><i class="devicon-apache-plain skill-font"></i></p>
         <p>
         Apache
         </p>
      </div>
      
      <p>
      
      <span id="icysubtitle">Programming experience</span><br>
      
      - C++, Java, PHP, CFML (Coldfusion), MySQL, HTML, CSS, JS, Linux Command Line, Actionscript, SourceTree, GitKraken, Drupal (Twig) 
      
      <br><br>
      
      <span id="icysubtitle">Graphic experience</span><br>
      
      - Adobe (Photoshop, Dreamweaver, Animate), Blender3D, Cinema 4D, 3DSM 
      
      <br><br>
      
      <span id="icysubtitle">Software experience</span><br>
      
      - IIS (Windows Server), Apache Solr, VM, RemoteDesktop, Windows, Mac, Linux, Ubuntu, MS Office (Project, Word, Excel, Access, Powerpoint), Minitab, Wireshark
      
      <br><br>
      
      <span id="icysubtitle">Other</span><br>
      
      - Typing speed 80WPM
      
      <br><br>
      
      </p>
      
      <!-- end -->
      </div>
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
      <h3>A built-from-scratch message board built using basic PHP + MySQL.</h3>
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
      
      <a class="btn btn-warning" target="_blank" href="http://eahmed.byethost10.com/boards">Live Demo</a>
      
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
      <h3>A built-from-scratch pastebin clone built using basic PHP + MySQL.</h3>
      <p>
      <ul>
      <li>Built using the same library as the custom message board project, except simplified</li>
      <li>Allows guests to post code and get a random shareable link</li>
      <li>Guests can also register and track their code posts</li>
      </ul>
      </p>
      <p><img class="dispimg" src="images/codedrop_preview_1.png" width="700px" /></p>
      <p>
      </p>
      </div>
      <div class="modal-footer">
      
      <a class="btn btn-warning" target="_blank" href="http://eahmed.byethost10.com/codedrop">Live Demo</a>        
      
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
      <h3>A built-from-scratch theme using basic HTML + CSS..</h3>
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
      
      <a class="btn btn-warning" target="_blank" href="http://eahmed.byethost10.com/wp">Live Demo</a>     
      
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
      <h3>A built-from-scratch theme using basic HTML + CSS..</h3>
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
      <a class="btn btn-warning" target="_blank" href="#">Learn More</a>
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
      <h3>A built-from-scratch theme using basic HTML + CSS..</h3>
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
      <h3>A built-from-scratch theme using basic Adobe Photoshop, HTML + CSS..</h3>
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
      <h3>An original graphics design created in MS Paint!</h3>
      <p><ul>
      <li>Could be used for business logo</li>
      <li>Simple bright colors to catch users attention</li>
      <li>Could also be used for marketing graphics</li>
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
      <h3>A built-from-scratch theme using basic HTML + CSS..</h3>
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
      <h2>Wordpress Theme</h2>
      </div>
      <div class="modal-body">
      <h3>A built-from-scratch theme using basic HTML + CSS..</h3>
      <p><ul>
      <li>Dynamically generates navigation (e.g. see About page) and shows child pages</li>
      <li>Fully responsive for desktop, tablet, and mobile viewport resolutions</li>
      <li>Uses custom template for home and sub-pages</li>
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
      <h3>A built-from-scratch theme using basic HTML + CSS..</h3>
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
      `;
      document.getElementById('appendModals').innerHTML = htmlChunk;
   }
   createModalTest();
   
   $(".modal-header").on("mousedown", function(mousedownEvt) {
      var $draggable = $(this);
      var x = mousedownEvt.pageX - $draggable.offset().left,
      y = mousedownEvt.pageY - $draggable.offset().top;
      $("body").on("mousemove.draggable", function(mousemoveEvt) {
         $draggable.closest(".modal-dialog").offset({
            "left": mousemoveEvt.pageX - x,
            "top": mousemoveEvt.pageY - y
         });
      });
      $("body").one("mouseup", function() {
         $("body").off("mousemove.draggable");
      });
      $draggable.closest(".modal").one("bs.modal.hide", function() {
         $("body").off("mousemove.draggable");
      });
   });
   
   // Games cards
   $("#pageCard1").click(function() {
      $("#pageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card1Link").offset().top
      }, 1000);
   });
   $("#pageCard2").click(function() {
      $("#pageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card2Link").offset().top
      }, 1000);
   });
   $("#pageCard3").click(function() {
      $("#pageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card3Link").offset().top
      }, 1000);
   });
   
   // Graphics cards
   $("#pageCard4").click(function() {
      $("#graphicsPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card4Link").offset().top
      }, 1000);
   });
   $("#pageCard5").click(function() {
      $("#graphicsPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card5Link").offset().top
      }, 1000);
   });
   $("#pageCard6").click(function() {
      $("#graphicsPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card6Link").offset().top
      }, 1000);
   });

   // IT cards
   $("#pageCard7").click(function() {
      $("#itPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card7Link").offset().top
      }, 1000);
   });
   $("#pageCard8").click(function() {
      $("#itPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card8Link").offset().top
      }, 1000);
   });
   $("#pageCard9").click(function() {
      $("#itPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card9Link").offset().top
      }, 1000);
   });

   // Web cards
   $("#pageCard10").click(function() {
      $("#webPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card10Link").offset().top
      }, 1000);
   });
   $("#pageCard11").click(function() {
      $("#webPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card11Link").offset().top
      }, 1000);
   });
   $("#pageCard12").click(function() {
      $("#webPageContentContainer").fadeIn();
      $('html, body').animate({
         scrollTop: $("#card12Link").offset().top
      }, 1000);
   });
   
   $('#spnTop').slideUp();
   $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
         console.log("near bottom " + $(window).scrollTop());
      }
      if($(window).scrollTop() > 450){
         $('#spnTop').slideDown();
         // $('#spnTop').addClass('cust-ease');
      } else {
         // $('#spnTop').removeClass('cust-ease');
         $('#spnTop').slideUp();
      }
   });
   
});