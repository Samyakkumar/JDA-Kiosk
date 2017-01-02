document.addEventListener("DOMContentLoaded", function(event){
	function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
	// <img src="test.png" id="image" alt="" width="800px">
	document.querySelector("#submit").addEventListener("click", function(event){
			var namefile = document.querySelector("#name").value;
			var imgattr = "<img src='" + namefile + "' id='image' width='800px' height='800px'>";
			console.log(imgattr);
			$("#addstuff").html(imgattr);
			function apply(image){
				Caman.remoteProxy = Caman.IO.useProxy('php');
				Caman("#image", function(){
					this.contrast(50).brightness(-10).exposure(5).greyscale().render();
				})
			}
			var image = document.querySelector("#image");
			apply(image);
			console.log(image);
			setTimeout(function(){getOCR(image);} , 3000);

		    function getOCR(image){
		    		$("#image").addClass(" hidden");
		    		$(".label").removeClass("hidden");
		    		$(".progress").removeClass("hidden");
		    		console.log("GOT CALLED")
		    		 var circle = new ProgressBar.Circle('.progress', {
			        color: '#555',
			        trailColor: '#eee',
			        strokeWidth: 10,
			        duration: 2500,
			        easing: 'easeInOut'
			    });

    				circle.set(0.00);
					Tesseract.recognize(image,
					{
						lang:'eng'
					})
					.progress(function  (p) { console.log('progress', p);  if(p.progress != 1){var stat = "<h4>" + p.status + "</h4>";}else{stat = "<h4>Complete!</h4>"}; circle.animate(p.progress); $(".label").html(stat); })
					.then(
						function(result){
							$("#result").removeClass("hidden");
							console.log(result);
							document.querySelector("#result").innerHTML = result.text;
							var searchquery = "exp";
							var searchstr = result.text
							var index = searchstr.indexOf("EXP");
							if(index > -1){
								var init = index;
								var exp = "";
								while(init < searchstr.length){
									var curr = searchstr[init];
									if(isNumeric(curr)){
										exp += curr;
										console.log("GOT ONE")
										console.log(exp);
									}
									init += 1;
								}
								var print= "Expiry: " + exp;
								$("#result").append("Success");
								$("#result").append(print);
								$("#result").append("<br><br><br>")
								
							}
							setTimeout(function(){$(".progress").empty()} , 2000)
						}
						)
		}
	});
});