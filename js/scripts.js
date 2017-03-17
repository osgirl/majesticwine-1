/*-----------------------------------------------------------------/
System:     Custom JS stuff
Version:    1.0
Author:     James Brandon
Project:    Majestic Wines Technical Test
-------------------------------------------------------------------*/

// Applied globally on all textareas with the "auto-expand" class
$(document).on('input.auto-expand', '.auto-expand', function() {

  var minRows = this.getAttribute('data-min-rows')|0,
      rows    = this.value.split("\n").length;
  $this = $(this);
  var rowCount = rows < minRows ? minRows : rows;
  var rowHeight = $this.attr('data-row-height');

  if(!rowHeight) {
    this.rows = rowCount;
    $this.attr('data-row-height', (this.clientHeight  - parseInt($this.css('padding-top')) - parseInt($this.css('padding-bottom')))/ rowCount);
  } else {
    rowCount++;
    this.style.cssText = 'height:' + rowCount * rowHeight + 'px'; 
  }

});

$(document).ready(function(){

  // Just a quick extra touch (could be improved but for demo) lets scroll down to focused comment box
  $('.auto-expand').focus(function() {
    // highlight selected bubble
    $(this).parent('.comment__bubble--write').css('border-color','#D02D7E');
    // scrollto selected bubble    
    $('html, body').animate({
        scrollTop: $(this).offset().top - 36 + 'px'
    }, 1000);
  });

  $('.auto-expand').blur(function() {
    $(this).parent('.comment__bubble--write').css('border-color','');
  });

  // simple like count function for demo
  $('.action-like').on('click tap', function() {
    var currentCount = $(this).data('like-count');
    var newCount = currentCount + 1;
    $(this).data('like-count', newCount);
    $(this).parent().find('.count').html(newCount);

    return false;
  });

});