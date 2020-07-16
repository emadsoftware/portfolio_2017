$(document).ready(function(){
   
   var speed = "fast";
   var enterButton = 5+7+1;

   // Cookie
   if (!!localStorage.getItem("cookieconsent")) {

      document.body.classList.add("cookieconsent")
   } 
   else {
         $("button").click(function() {
            localStorage.setItem("cookieconsent", "ok")
            $(".cookie").fadeOut();
         });
   }
   
   // Mobile menu toggle
   $('#mobileButtonToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {   
         if ($("#nav").css('display') == 'none'){                 
            $("#nav").addClass("show-grid");
         } else {
            $("#nav").removeClass("show-grid");          
         }
      }
   });     

   $('#spnTop').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
         $('html,body').animate({ scrollTop: 0 }, speed);
      }
    });
   
   var closePageContainers = function(){
      $('#loadMore').show(speed); 
      $('#loadMore').addClass('cust-ease');
      $('#loadMoreContent').fadeOut(speed); 
      $("#pageContentContainer").fadeOut(speed);
      $("#graphicsPageContentContainer").fadeOut(speed);
      $("#itPageContentContainer").fadeOut(speed);
      $("#webPageContentContainer").fadeOut(speed);
   }   

   // Navigation > Home
   $('#homeToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      $('#homeContent').slideDown(speed);
      $('#gamesConent').slideUp(speed);
      $('#graphicsContent').slideUp(speed);         
      $('#itContent').slideUp(speed);         
      $('#webContent').slideUp(speed);         
      $('#skillsContent').slideUp(speed);        
              
      
      $('#homeToggle').addClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
      closePageContainers();
      }
   });
   
   // Navigation > Games
   $('#gamesToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      $('#homeContent').slideUp(speed);
      $('#gamesConent').slideDown(speed);
      $('#graphicsContent').slideDown(speed);
      $('#itContent').slideUp(speed);         
      $('#webContent').slideUp(speed);         
      $('#skillsContent').slideUp(speed); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').addClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');      
      closePageContainers();
      }
   });
   
   // Navigation > Graphics
   $('#graphicsToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      $('#homeContent').slideUp(speed);
      $('#gamesConent').slideUp(speed);
      $('#graphicsContent').slideDown(speed);
      $('#itContent').slideUp(speed);         
      $('#webContent').slideUp(speed);         
      $('#skillsContent').slideUp(speed); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').addClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
      closePageContainers();
      }
   });

   // Navigation > IT
   $('#itToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      $('#homeContent').slideUp(speed);
      $('#gamesConent').slideUp(speed);
      $('#graphicsContent').slideUp(speed);
      $('#itContent').slideDown(speed);         
      $('#webContent').slideUp(speed);         
      $('#skillsContent').slideUp(speed); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').addClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').removeClass('lighten');
      closePageContainers();
      }
   });
   
   // Skills button
   $('#skillLink').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
         $('#skillsToggle').click();
      }
   });

   $('#webToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      $('#homeContent').slideUp(speed);
      $('#gamesConent').slideUp(speed);
      $('#graphicsContent').slideUp(speed);
      $('#itContent').slideUp(speed);         
      $('#webContent').slideDown(speed);         
      $('#skillsContent').slideUp(speed); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').addClass('lighten');
      $('#skillsToggle').removeClass('lighten');
      closePageContainers();
      }
   });

   // Navigation > Skills
   $('#skillsToggle').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      $('#homeContent').slideUp(speed);
      $('#gamesConent').slideUp(speed);
      $('#graphicsContent').slideUp(speed);
      $('#itContent').slideUp(speed);         
      $('#webContent').slideUp(speed);         
      $('#skillsContent').slideDown(speed); 
      
      $('#homeToggle').removeClass('lighten');
      $('#gamesToggle').removeClass('lighten');
      $('#graphicsToggle').removeClass('lighten');
      $('#itToggle').removeClass('lighten');
      $('#webToggle').removeClass('lighten');
      $('#skillsToggle').addClass('lighten');
      closePageContainers();
      }
   });
   
   // Modal stuff
   $('#loadMore').on('keypress click', function(e){      
      if (e.which === enterButton || e.type === 'click') {
      //  $('#loadMore').addClass('fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom');
      $('#loadMoreContent').slideToggle();
      $('#loadMore').toggleClass('cust-ease');
      $('#loadMore').slideToggle();      
      $('html, body').animate({
         scrollTop: $("#loadMoreContent").offset().top
      }, 1000);
      }
   })
   
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

   $("#card1").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#card2").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#card3").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#card4").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#card5").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#card6").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });   

   $("#pageCard1").on('keypress', function(e){     
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard2").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard3").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard4").on('keypress', function(e){     
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard5").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard6").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard7").on('keypress', function(e){     
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard8").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard9").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard10").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard11").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   $("#pageCard12").on('keypress', function(e){      
      if (e.which === enterButton) {this.click();}
   });
   
   $('#spnTop').slideUp();
   $(window).scroll(function() {
      if($(window).scrollTop() > 410){
         $('#spnTop').slideDown(speed);
         // $('#spnTop').addClass('cust-ease');
      } else {
         // $('#spnTop').removeClass('cust-ease');
         $('#spnTop').slideUp(speed);
      }
   });
   
});