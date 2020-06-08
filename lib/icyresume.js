
$(document).ready(function(){

    // Mobile menu toggle
    $("#mobileButtonToggle").click(function(){
        $("#divSpanMobileMenu").slideToggle("slow");
    });

    $('#spnTop').on("click",function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      });  

    $('#loadMore').on("click", function(){
      //  $('#loadMore').addClass('fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom');
      $('#loadMoreContent').slideToggle();
      $('#loadMore').removeClass('cust-ease');
      $('#loadMore').slideToggle();
      $('#loadMoreContent').scrollIntoView({behavior: "smooth"});
    })

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

});