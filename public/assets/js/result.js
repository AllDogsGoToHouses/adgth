$(function(){


  var data = getUrlVars(window.location.href);
  var params = {};

  if(data.age != null){
  	age =  decodeURIComponent( data.age.replace(/\+/g, '%20') );
  	if(age == "Over 1 Year"){
  		//params.age = "{[Op.gt]: 1}"
  	}else{
       //   params.age = "{[Op.lte]: 1}"
  	}
  }

  if(data.activity_level != null){
  	params.activity_level =  decodeURIComponent( data.activity_level.replace(/\+/g, '%20') );
  }

  if(data.dog_size != null){
  	params.dog_size = decodeURIComponent( data.dog_size.replace(/\+/g, '%20') );
  }

  if(data.gender != null){
  	params.gender = decodeURIComponent( data.gender.replace(/\+/g, '%20') );
  }


 // alert(JSON.stringify(params))

  $.get( "/api/dogs",params,function( data ,status) {
           //console.log(data);
           	loadData(data);
   });

function loadData(dogData){

 for(var i = 0; i < dogData.length; i++){

 	var data = dogData[i];

	var divPane = '<div>'+
	      '<div class="row">'+
	        '<div class="col s12 m12">'+
	          '<div class="card">'+
	            '<div class="card-image">'+
	              '<img src="'+data.dog_image_url+'" style="width:400px; height:300px;  vertical-align: middle;">'+
	              '<span class="card-title">'+data.dog_name+'</span>'+
	            '</div>'+
	            '<div class="card-content">'+
	                '<div>'+
	                '<a class="btn-floating  waves-effect waves-light red  fav_btn" name="'+data.dog_name+'" id="'+data.id+'" ><i class="material-icons md-48 icon" >favorite_border</i></a>'+
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

         $('#div_slider').slick('slickAdd',divPane);


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
          });
	  });
  }


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

});