$(window).load(function(){
$('#spnTop').on("click",function(){
	$('html,body').animate({ scrollTop: 0 }, 'slow');
	}); 
});

$(document).ready(function(){

    // Mobile menu toggle
    $("#mobileButtonToggle").click(function(){
        $("#divSpanMobileMenu").slideToggle("slow");
    });


});