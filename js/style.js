

// document.getElementsByClassName('startt').onclick= function(){
//     document.button[0].src="img/templatesdrive_Sofa_in_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.webp"
// }




window.addEventListener('load' , function(){
    document.querySelector('.loading').classList.add('loading-Hide')
    document.querySelector('.loading').addEventListener('transitioned', function(){
        document.body.removeChild(document.querySelector('.loading'))
    })
})

// $(window).on('load', function() { 
     
//     $('#loading').fadeOut(); 
//     $('#loadd').delay(350).fadeOut('slow'); 
//     $('body').delay(350).css({'overflow':'visible'});
     
//   });