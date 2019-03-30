
$( function() {
  // document is ready

  // get all the events on toggle buttons and change the corresponding text rendering
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  // get all the click events on the delete buttons and remove the corresponding list item
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  // look for events on the "Add item" button and create a new list item from the text field

  // we don't need to 
  $("#js-shopping-list-form").submit(function(event) {
    console.log(`Caught an event: ${event} on ${this}`);
    let newItemText = $('#shopping-list-entry').val();

    // UGLY but expedient. This makes changing the structure of the list items a maintenance issue, 
    // since it will have to be changed here AND wherever else items are created (like the HTML file)
    $('.shopping-list').prepend(`
      <li>
        <span class="shopping-item">${newItemText}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
    event.preventDefault();
 });
  console.log("setup complete");
});


