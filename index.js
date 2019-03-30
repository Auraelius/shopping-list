
$( function() {
  // document is ready

    // get all the events on toggle buttons and change the corresponding text rendering
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    console.log(`Caught an event: ${event} on ${this}`);
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

    // get all the click events on the delete buttons and remove the corresponding list item
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    console.log(`Caught an event: ${event} on ${this}`);
    $(this).closest('li').remove();
  });

  // look for events on the "Add item" button and create a new list item from the text field
  console.log("setup complete");
});


