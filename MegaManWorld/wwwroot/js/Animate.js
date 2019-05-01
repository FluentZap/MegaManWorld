// ﻿$(function () {
// 	$('#buy').click(function () {
// 		$.post("/adventurebuy",
// 		{
// 			name: "Donald Duck",
// 			city: "Duckburg"
// 		}, function () {
// 			$("#shopList").load("/adventuregetlist");
// 		});
// 	});
// 	//$("#shopList").
// });



var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 0; //start position for the image slicer
  const interval = 500; //100 ms of interval for the setInterval()
  const diff = 49; //diff as a variable for position offset

  tID = setInterval(() => {

    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"

    if (position < 392) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 0;
    }
    //reset the position to 256px, once position exceeds 1536px

  }, interval); //end of setInterval
} //end of animateScript()
