$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function(){
        let position=$(this).scrollTop();
        if(position>=200){
            $('.nav-menu').addClass('custom-navbar');
        }
        else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        console.log(position);
        if(position>=650){
            $('.camera-img').addClass('fromleft');
            $('.mission-text').addClass('fromright');            
        }
        else{
            $('.camera-img').removeClass('fromleft');
            $('.mission-text').removeClass('fromright');     
        }
    });  
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        console.log(position);
        if(position>=4300){
            $('.card-1').addClass('ml');
            $('.card-2').addClass('mb');            
            $('.card-3').addClass('mr');            
        }
        else{
            $('.card-1').removeClass('ml');
            $('.card-2').removeClass('mb');
            $('.card-3').removeClass('mr');
        }
    });    


    $('.gallery-list-item').click(function(){
        let value=$(this).attr('data-filter');
        if(value=='all'){
            $('.filter').show(500);
        }
         else{
         $('.filter').not('.' +value).hide(500);
         $('.filter').filter('.'+value).show(500);
         }

    });



    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

});