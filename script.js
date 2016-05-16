var init = () => {
  var $text = $('.big-block');
  var $mainText = $('.main-text');
  // console.log(text);
  var textArr = $text.text().split('');
  //clear text area
  //add first letter
  $text.empty().css('display', 'block');
  $text.append('<span class="pointer">|</span>');
  $text.prepend('<span class="span-text"></span>');
  
  $pointer = $('.pointer');
  setInterval(function() { 
    if (textArr.length > 0) {
      $('.span-text').append(textArr.shift());
    }
  }, 100);
  setInterval(function() {
    if ( $pointer.css('color') === 'rgb(48, 48, 48)') {
      $pointer.css('color', '#fff');
    } else {
      $pointer.css('color', '#303030');
    }
  }, 500);

  $blog = $('.blog');
  $mainText.hide();
  $mainText.fadeIn('slow');
  $blog.hide();
  $blog.fadeIn('slow');

};

$(document).ready(init);