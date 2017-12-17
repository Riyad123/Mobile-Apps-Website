$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#loading').hide(); // will first fade out the loading animation 

});



$(document).ready(function(){
    $(".awesome").waypoint(function(){
        $(".aa").addClass("animated fadeInRight");
        $(".bb").addClass("animated fadeInLeft");
    },{
        offset: "50%"
    });
    
    $(".creations").waypoint(function(){
        $(".cc").addClass("animated fadeInUp");
        $(".dd").addClass("animated fadeInLeft");
        $(".ee").addClass("animated fadeInUp");
        $(".ff").addClass("animated fadeInUp");
        $(".gg").addClass("animated fadeInUp");
        $(".hh").addClass("animated fadeIn");
    },{
        offset: "75%"
    });
    
    // Same section
    
     $(".rowOne").waypoint(function(){
        $(".rowOne").addClass("animated fadeInUp");
        $(".ii").addClass("animated fadeInUp");
        $(".jj").addClass("animated fadeInUp");
        $(".kk").addClass("animated fadeInUp");
        $(".ll").addClass("animated fadeInUp");
        $(".mm").addClass("animated fadeInLeftBig");
    },{
        offset: "60%"
    });
    
    $(".rowTwo").waypoint(function(){
        $(".rowTwo").addClass("animated fadeInUp");
        $(".nn").addClass("animated fadeInUp");
        $(".oo").addClass("animated fadeInUp");
        $(".pp").addClass("animated fadeInUp");
    },{
        offset: "80%"
    });
    
    //Approch
     $(".approach").waypoint(function(){
        $(".qq").addClass("animated fadeInUp");
        $(".rr").addClass("animated fadeInUp");
    },{
        offset: "60%"
    });
    
    
     // Same section
    
     $(".rowThree").waypoint(function(){
        $(".rowThree").addClass("animated fadeInUp");
        $(".ss").addClass("animated fadeInUp");
        $(".tt").addClass("animated fadeInUp");
        $(".uu").addClass("animated fadeInUp");
        $(".vv").addClass("animated fadeInUp");
        $(".ww").addClass("animated fadeInLeftBig");
    },{
        offset: "60%"
    });
    
    $(".rowFour").waypoint(function(){
        $(".rowFour").addClass("animated fadeInUp");
        $(".xx").addClass("animated fadeInUp");
        $(".yy").addClass("animated fadeInUp");
        $(".zz").addClass("animated fadeInUp");
    },{
        offset: "75%"
    });
    
    // For Contact 
    
     $(".contact").waypoint(function(){
        $(".aaa").addClass("animated fadeInUp");
        $(".bbb").addClass("animated fadeInLeft");
        $(".ccc").addClass("animated fadeInUp");
        $(".ddd").addClass("animated fadeInLeft");
        $(".eee").addClass("animated fadeInUp");
        $(".fff").addClass("animated fadeInLeft");
        $(".ggg").addClass("animated fadeInUp");
         
        $(".hhh").addClass("animated fadeInRight");
        $(".iii").addClass("animated fadeInRight");
        $(".jjj").addClass("animated fadeInRight");
        $(".kkk").addClass("animated fadeInRight");
        $(".mmm").addClass("animated fadeInUp");
    },{
        offset: "50%"
    });
    
    
    //footer
    
     $(".footer").waypoint(function(){
        $(".nnn").addClass("animated fadeInUp");
        $(".ooo").addClass("animated fadeInUp");
        $(".ppp").addClass("animated fadeInUp");
        $(".qqq").addClass("animated fadeIn");
        $(".rrr").addClass("animated fadeIn");
        $(".sss").addClass("animated fadeIn");
         
        $(".aaaa").addClass("animated fadeIn");
        $(".aaab").addClass("animated fadeIn");
        $(".aaac").addClass("animated fadeIn");
        $(".aaad").addClass("animated fadeIn");
        $(".aaae").addClass("animated fadeIn");
        $(".aaaf").addClass("animated fadeIn");
        $(".aaag").addClass("animated fadeInUp");
    },{
        offset: "50%"
    });
    
    
    
    
})
