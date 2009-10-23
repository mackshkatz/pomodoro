jQuery(function () {
  
  $('#add').click(function(e) { 
    var taskItem = $('#tasks ul li:first').clone();
    taskItem.find('form')[0].reset();
    $('#tasks ul').append(taskItem);
    taskItem.find('input[type="text"]:first').focus();
    return false;
  });
  
  $('#add').click().click();

  $('#tasks ul').sortable({handle:".handle"}).disableSelection();
  
  $('#task-footer').bg([0,0,10,10]);

  $('input[type="text"]:first').focus();
  
});