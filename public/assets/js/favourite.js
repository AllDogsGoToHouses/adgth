$(function(){

  $.get( "/getFavs",{},function( data ,status) {
           console.log(data);
           	loadData(data);
   });

   $('.div_slider').slick({
		 slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		});

function loadData(dogData){

 for(var i = 0; i < dogData.length; i++){

 	var data = dogData[i];

	var divPane = '<div>'+
	      '<div class="row">'+
	        '<div class="col s12 m12">'+
	          '<div class="card">'+
	            '<div class="card-image">'+
	              '<img src="'+data.dog_image_url+'" style="width:100%; height:300px; ">'+
	              '<span class="card-title">'+data.dog_name+'</span>'+
	            '</div>'+
	            '<div class="card-content">'+
	                '<div>'+
	                '<a class="btn-floating  fav_btn waves-effect waves-light green "  name="'+data.dog_name+'" id="'+data.id+'"><i class="material-icons md-48 " >favorite</i></a>'+
	            '</div><br>'+
	               '<div >'+
	                '<div class="row">Age:'+data.age+'</div><div class="row"> Size: Big</div>'+
	                '<div class="row">Activity Level: '+data.activity_level+'</div>'+
	                '<div class="row">Likes: <small>'+data.likes+'</small></div>'+
	                '<div class="row">Dislikes: <small>'+data.dislikes+'</small></div>'+
	                '<p></p>'+
	            '</div>'+
	            '</div>'+
	          '</div>'+
	        '</div>'+
	      '</div>'+
	      '</div>';

         $('.div_slider').slick('slickAdd',divPane);
        
     }

 $(".fav_btn").on("click",function(){
	  	  var id = $(this).prop("id");
	  	  var name = $(this).attr("name");
	  	  
	  	 
	  	  var params = {
	  	  	dog_id:id
	  	  }

	  	  var btn = $(this);

	  	  $.post( "updateFav",params,function( data ,status) {
             if(data.success == 1){
             	 $(btn).removeClass("red");
             	  $(btn).addClass("green");
             	M.toast({html: name+' added to favourite!'});
             	
             }else{
             	$(btn).removeClass("green");
             	 $(btn).addClass("red");
             	M.toast({html: name+' removed in favourite!'});
             }
             location.reload();
          });
	  });
		
	  
	  

  }



});