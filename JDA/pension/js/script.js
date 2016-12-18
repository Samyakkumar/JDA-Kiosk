var reply_gender_yes, reply_gender_no, reply_gender_male, reply_gender_female, age;
$(function(){
	$.backstretch([
      "images/12_1.jpg",
      "images/12_2.jpg",
      "images/12_3.jpg",
      "images/12_4.jpg"
  ], {duration: 5000, fade: 750});
});
document.addEventListener("DOMContentLoaded", function(event){
	document.addEventListener("click", function(event){
			age = document.querySelector("#age").value;
			age = parseInt(age);
			reply_bpl_no = document.querySelector("#no_bpl").checked;
			reply_bpl_yes = document.querySelector("#yes_bpl").checked;
			reply_gender_female = document.querySelector("#Female").checked;
			reply_gender_male = document.querySelector("#Male").checked;
		});

	document.querySelector("#Male").addEventListener("click", function(event){
		if (reply_gender_male === true || !reply_gender_male){
			$('input[id=Female]').attr('checked', false);
		}
		else{
			$('input[id=Male]').attr('checked', true);
		}
	});

	document.querySelector("#Female").addEventListener("click", function(event){
		if (reply_gender_female === true || !reply_gender_female){
			$('input[id=Male]').attr('checked', false);
		}
		else{
			$('input[id=Female]').attr('checked', true);
		}
	});

	document.querySelector("#no_bpl").addEventListener("click", function(event){
				if (reply_bpl_yes === true){
					$('input[id=yes_bpl]').attr('checked', false);
				}
				else{
					$('input[id=no_bpl]').attr('checked', true);
				}
			});

	document.querySelector("#yes_bpl").addEventListener("click", function(event){
				if (reply_bpl_no === true){
					$('input[id=no_bpl]').attr('checked', false);
				}
				else{
					$('input[id=yes_bpl]').attr('checked', true);
				}
			});
	document.querySelector("#submit").addEventListener("click", function(event){
		var result = "";
		console.log(reply_gender_male);
		console.log(reply_bpl_no);
		console.log(reply_bpl_yes);
		console.log(reply_gender_female);
		console.log(age);
		$(".result").removeClass("hidden");
		$(".result").addClass(" divopacity");
		$(".contact").addClass(" divopacity");
		if (reply_gender_male === true && reply_bpl_yes === true){
			if(age >= 60){
				result += "<h1> You are eligible for the following schemes : </h1> <br>";
				var message = "<table> <tr><th>Name of Scheme</th> <th>Annual Income Limit</th> </tr> <tr><td>Virdhavasta Pension Yojana</td> <td>As mentioned in the BPL Scheme of the Central Government</td></tr> <tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Vridhjan Samman Yojna</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr></table>";
				result += message;

			}
		}
		 if(reply_gender_male === true && reply_bpl_no === true){
			if(age >= 58){
				result += "<h1> You are eligible for the following schemes : </h1> <br>";
				var message = "<table> <tr><th>Name of Scheme</th> <th>Annual Income Limit</th> </tr> <tr><td>Vridhjan Samman Yojna</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr></table>";
				result += message;
			}
		}
		 if(reply_gender_male === true && reply_bpl_yes === true && age == 59){
			console.log("I was here");
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table> <tr><th>Name of Scheme</th> <th>Annual Income Limit</th> <tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Vridhjan Samman Yojna</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> </table>";
			result += message;
		}
		 if (reply_gender_male === true && reply_bpl_yes === true){
			if (age >=18 && age < 58){
				result += "<h1> You are eligible for the following schemes : </h1> <br>";
				var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th></tr> <tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr></table>";
				result += message;
			}
		}
		 if (reply_gender_male === true && reply_bpl_no === true){
			if(age < 58){
				result += "<h1> You are eligible for the following schemes : </h1> <br>";
				var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> </table>";
				result += message;
			}
		}
		 if(reply_gender_female === true && reply_bpl_yes === true && age >= 60){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th> </tr> <tr><td>Virdhavasta Pension Yojana</td> <td>As mentioned in the BPL Scheme of the Central Government</td></tr> <tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Vidhwa Pension Yojana(For widowed women)</td> <td>As mentioned in the BPL scheme of the Central Government</td></tr> <tr><td>Vridhjan Samman Yojna</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> <tr><td>Ekalnaari Samaan Yojna(For divorced/widowed women)</td> <td>Rs. 48000</td></tr> </table>";
			result += message;
		}
		 if (reply_gender_female === true && reply_bpl_yes === true && age >55 && age < 60){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th> </tr><tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Vidhwa Pension Yojana(For widowed women)</td> <td>As mentioned in the BPL scheme of the Central Government</td></tr> <tr><td>Vridhjan Samman Yojna</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> <tr><td>Ekalnaari Samaan Yojna(For divorced/widowed women)</td> <td>Rs. 48000</td></tr> </table>";
			result += message;
		}
		 if (reply_gender_female === true && reply_bpl_no === true && age >= 55){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table> <tr><th>Name of Scheme</th> <th>Annual Income Limit</th> </tr> <tr><td>Vridhjan Samman Yojna</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> <tr><td>Ekalnaari Samaan Yojna(For divorced/widowed women)</td> <td>Rs. 48000</td></tr></table>";
			result += message;
		}
		 if(reply_gender_female === true && reply_bpl_yes === true && age >=40 && age < 55){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th> </tr>  <tr><td>Vidhwa Pension Yojana(For widowed women)</td> <td>As mentioned in the BPL scheme of the Central Government</td></tr> <tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Ekalnaari Samaan Yojna(For divorced/widowed women)</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr></table>";
			result += message;
		}
		 if(reply_gender_female === true && reply_bpl_yes === true && age >=18 && age < 40){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th></tr> <tr><td>Nishakt Pension Yojana (For specially abled people with greater than 80% disablitiy)</td> <td>	As mentioned in the BPL Scheme of the Central Government</td> </tr> <tr><td>Ekalnaari Samaan Yojna(For divorced/widowed women)</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> </table>";
			result += message;
		}
		 if (reply_gender_female === true && reply_bpl_no === true && age >= 18 && age < 55){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th></tr> <tr><td>Ekalnaari Samaan Yojna(For divorced/widowed women)</td> <td>Rs. 48000</td></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr> </table>"
			result += message;
		}
		 if (reply_gender_female === true && age < 18){
			result += "<h1> You are eligible for the following schemes : </h1> <br>";
			var message = "<table><tr><th>Name of Scheme</th> <th>Annual Income Limit</th></tr> <tr><td>Vishesh yogya jan Samman Yojna(Specially abled with greater than 40% disablity)</td> <td>Rs. 60000</td></tr></table>";
			result += message;
		}

	document.querySelector(".result").innerHTML = result;
	$("td").addClass(" scheme");
	$("td:odd").addClass(" odd");
	$("td:even").addClass(" even");
	$("th").addClass(" scheme");
	$("th").addClass(" heading");
	});
		

	});
