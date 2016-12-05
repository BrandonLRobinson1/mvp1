$( document ).ready(function() {
    
    // console.log( $('body'), "ready!" );
  var addUser = ( user ) => {
    //ajaxcall to add server
    $.ajax({
      url: "http://localhost:3000/user",
      method: "POST",
      data: {user: user},
      dataType: "json",
      success: ( data ) => {
        console.log(data);
        console.log('success')
      },
      error: ( error ) => {
        console.log( error );
      }

    });

  }

  addUser("keith")

});