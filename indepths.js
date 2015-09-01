console.log("test2");

$("#indepths_container").waypoint(function(direction){
	console.log(direction);
	
	if(direction=='down'){
		
		$("#indepths_head").removeClass("animate2");
		
		
		$("#indepths_head").addClass("animate");
	}
	
	if(direction=='up'){
		$("#indepths_head").removeClass("animate");
		
		
		$("#indepths_head").addClass("animate2");
		
		
	}
},{offset: '-25'});

