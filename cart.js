// Remove Items From Cart
SR('a.remove').click(function(){
    event.preventDefault();
    SR( this ).parent().parent().parent().hide( 400 );
   
  })
  
  // Just for testing, show all items
    SR('a.btn.continue').click(function(){
      SR('li.items').show(400);
    })