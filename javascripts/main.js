<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script>
jQuery(document).ready(function($) {
  $.ajax({
  	url : "http://api.wunderground.com/api/82a7ed9ddedf3fae/geolookup/conditions/q/TX/Richardson.json",
  	dataType : "jsonp",
  
  	success : function(parsed_json) {
  		var location = parsed_json['location']['city'];
  		var temp_f = parsed_json['current_observation']['temp_f'];
  		alert("Current temperature in " + location + " is: " + temp_f);
 	}
  
  	url : "http://api.wunderground.com/api/82a7ed9ddedf3fae/hourly/q/TX/Richardson.json",
  	dataType : "jsonp",

  	/*success : function(parsed_json) {
  		var condition = parsed_json['hour', 'condition'];
  		alert(condition);
  	}*/

 });
});
</script>
