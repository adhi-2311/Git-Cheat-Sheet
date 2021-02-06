
		var counter = 0;
		$(".command-thumbnail").click(function(){
			$("#view").html(
				$(this).html());
			var id = $(this).attr("id");
			if(counter<10)
			counter = parseInt(id.slice(-1));
		    else
		    counter= parseInt(id.slice(-2));

		});

		$("#command"+counter).click();
		$("#view").click(function (event)
		{
			if(event.offsetX< $(this).width()*0.3)
			counter-=1;
			else
			counter+= 1;
			if(counter< 0){
			counter =  0;
		}

		if(counter >=$(".command-thumbnail").length)
		{
		counter =x$(".command-thumbnail").length-1;
		}
			$("#command"+counter).click();
		});

