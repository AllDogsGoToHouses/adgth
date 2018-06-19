$(document).ready(function(){

   $('.modal').modal();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();

    $.get( "/api/shelter",{},function( data ,status) {
      
       for (var u = 0; u < data.length; u++) {
          var obj = data[u];
          var id = obj.id;
          var name = obj.shelter_name;
          $("#select_shelter").append("<option value="+id+" id="+id+">"+name+"</option>");
       }
      
    });

    

    $("#add-dog-button").on("click",function(e){



        var dog_name = $("#dog_name").val();
        var dog_img_url = $("#dog_img_url").val();
        var breed = $("#breed").val();
        var dog_size = $("#dog_size").val();
        var gender = $("#gender").val();
        var age = $("#age").val();
         var activity_level = $("#activity").val();
         var shelter_id =  $( "#select_shelter" ).val();
         var likes = $("#like_1").val()+","+$("#like_2").val()+","+$("#like_3").val();
         var dislikes =  $("#dislike_1").val()+","+$("#dislike_2").val()+","+$("#dislike_3").val();

       
        var data = {
          dog_name: dog_name,
          dog_image: dog_img_url,
          dog_size: dog_size,
          age: age,
          activity_level: activity_level,
          gender: gender,
          breed: breed,
          likes: likes,
          dislikes: dislikes,
           shelter_id:shelter_id
      }
      
       alert(JSON.stringify(data))

      $.post( "/api/dogs",data,function( data ,status){
            alert("Added !");
            $("#dog_name").val("");
            $("#dog_img_url").val("");
            $("#breed").val(""); 
            $("#dog_size").val(""); 
            $("#gender").val("");
            $("#age").val("");
            $(".likes").val(""); 
            $(".dislikes").val(""); 
        
            location.reload();
        });

   


    });

    
 $("#shelter_add_form").on("submit",function(e){

       e.preventDefault();

      var shelter_name = $("#shelter_name").val();
       var shelter_phone = $("#shelter_phone").val();
        var shelter_manager = $("#manager").val(); 
        var shelter_email = $("#shelter_email").val(); 
        
        var data = {
           shelter_name:shelter_name,
           shelter_number:shelter_phone,
           shelter_email:shelter_email,
           shelter_manager:shelter_manager,
        }
        
        $.post( "/api/shelter",data,function( data ,status){
            alert("Added !");
            $("#shelter_name").val("");
            $("#shelter_phone").val("");
            $("#manager").val(""); 
            $("#shelter_email").val(""); 
        
            location.reload();
        });

       
      });

  });
