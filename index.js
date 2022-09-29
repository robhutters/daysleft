$(document).ready(function(){

  let today = new Date()
  let EndOfYear = new Date('01/01/2023')
 
  // calc time difference

  let time_difference = EndOfYear.getTime() - today.getTime()

  let total_milliseconds_a_day = 1000 * 60 * 60 * 24 

  let days_difference = time_difference / total_milliseconds_a_day
  
  let whole_days = Math.floor(days_difference)

  let string_whole_days = whole_days.toString()
 

  if (whole_days > 99) {
    $('#countdown').css('--value', 99)
    $('#countdown-mark').text('+')
  } else {
    $('#countdown').css('--value', string_whole_days)
    $('#countdown-mark').text('')
  }

  let counter = whole_days
  // create cells
  while (counter > 0) {
    $div = $('<div>').addClass('w-12 p-2 m-1 bg-violet-400 text-center')
 
    $('#root').append($div)
    counter--
  }
 
  

});

