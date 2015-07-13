
var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}

var timeouts ={}

$(document).on("ready", function (){
  
//update time
  var updateTime = function(){
    var currentTime = moment().format('hh:mm:ss');
      $(".clock").text(currentTime)
  }
  
    timeouts.clock = setInterval(updateTime, 1000);
 
  //color code 
  var RGBToHex = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
      return (function(h){
      return new Array(7-h.length).join("0")+h
   })
    (bin.toString(16).toUpperCase())}

  var currentColor = function(){
  var r = convertTimeframe(moment().format('hh'), "hours") 
  var g = convertTimeframe(moment().format('mm'), "minutes")
  var b = convertTimeframe(moment().format('ss'), "seconds")

  $(".container").css("background-color", "rgb(" + r + "," + g + "," + b + ")") 
   $(".hextext").text(RGBToHex(r).substring(0,2) + RGBToHex(g).substring(0,2) +  RGBToHex(b).substring(0,2))
  }

  timeouts.container = setInterval(currentColor, 1000);

  timeouts.hextext = setInterval(currentColor, 1000);

  // toggle the time and color 

  var moments = (moment().format('ss'),"seconds")
  var borderTwerk = function(){
      var border = $(".clock").css("border-bottom", "width").moments
  }
 
  $(".clock").on("click", function (){
     $(".clock").slideToggle("hidden")
    $(".hextext").slideToggle("hidden")
    })

 $(".hextext").on("click", function (){
     $(this).slideToggle("hidden")
     $(".clock").slideToggle("hidden")    
    })

 

})

  


