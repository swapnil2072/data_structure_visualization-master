var mode="exploration";
var codetraceColor = 'white';

//codetrace highlight
function highlightLine(lineNumbers) {
	const backgroundColor = '#0C0404';
	const textColor = 'white';
  
	$('#codetrace p')
	  .css({'background-color': colourTheThird, 'color': codetraceColor});
  
	if (Array.isArray(lineNumbers)) {
	  lineNumbers.forEach(number => {
		if (number !== 0) {
		  $(`#code${number}`)
			.css({'background-color': backgroundColor, 'color': textColor});
		}
	  });
	} else if (typeof lineNumbers === 'number') {
	  $(`#code${lineNumbers}`)
		.css({'background-color': backgroundColor, 'color': textColor});
	}
  }
  


var isPlaying = false;
//Opening and closing panels
var isActionsOpen = true;
var isStatusOpen = false;
var isCodetraceOpen = false;


function showActionsPanel() {
	if(!isActionsOpen) {
		if(actionsWidth !== undefined) {
			$('#actions').animate({
				width: "+="+actionsWidth,
			});
		} else {
			console.error('actionsWidth is not defined');
		}
		var actionsHideImg = $('#actions-hide img');
		if(actionsHideImg.length) {
			actionsHideImg.removeClass('rotateLeft').addClass('rotateRight');
		} else {
			console.error('Could not find #actions-hide img element');
		}
		isActionsOpen = true;
	}
}

function hideActionsPanel() {
	if(isActionsOpen) {
		if(actionsWidth !== undefined) {
			$('#actions').animate({
				width: "-="+actionsWidth,
			});
		} else {
			console.error('actionsWidth is not defined');
		}
		var actionsHideImg = $('#actions-hide img');
		if(actionsHideImg.length) {
			actionsHideImg.removeClass('rotateRight').addClass('rotateLeft');
		} else {
			console.error('Could not find #actions-hide img element');
		}
		isActionsOpen = false;
	}
}

function showStatusPanel() {
	if(!isStatusOpen) {
		var statusHideImg = $('#status-hide img');
		if(statusHideImg.length) {
			statusHideImg.removeClass('rotateLeft').addClass('rotateRight');
		} else {
			console.error('Could not find #status-hide img element');
		}
		var currentAction = $('#current-action');
		if(currentAction.length) {
			currentAction.show();
		} else {
			console.error('Could not find #current-action element');
		}
		if(statusCodetraceWidth !== undefined) {
			$('#status').animate({
				width: "+="+statusCodetraceWidth,
			});
		} else {
			console.error('statusCodetraceWidth is not defined');
		}
		isStatusOpen = true;
	}
}

function hideStatusPanel() {
	$('#status-hide img').removeClass('rotateRight').addClass('rotateLeft');
	$('#status').animate({
		width: isStatusOpen ? "-=" + statusCodetraceWidth : 0,
	}, function() {
		$('#current-action').toggle(isStatusOpen);
		isStatusOpen = false;
	});
}

function showCodetracePanel() {
	if(!isCodetraceOpen) {
		const codetraceElem = $('#codetrace');
		if (!codetraceElem.length) {
			console.error('Codetrace element not found in the DOM');
			return;
		}
		if (isNaN(statusCodetraceWidth)) {
			console.error('statusCodetraceWidth is not a valid number');
			return;
		}
		$('#codetrace-hide img').removeClass('rotateLeft').addClass('rotateRight');
		codetraceElem.animate({
			width: "+=" + statusCodetraceWidth,
		});
		isCodetraceOpen = true;
	}
}

function hideCodetracePanel() {
	if(isCodetraceOpen) {
		$('#codetrace-hide img').toggleClass('rotateLeft rotateRight');
		$('#codetrace').animate({ width: "-="+statusCodetraceWidth });
		isCodetraceOpen = false;
	}
}



// function hideCodetracePanel() {
// 	if(isCodetraceOpen) {
// 		$('#codetrace-hide img').removeClass('rotateRight').addClass('rotateLeft');
// 		$('#codetrace').animate({
// 			width: "-="+statusCodetraceWidth,
// 		});
// 		isCodetraceOpen = false;
// 	}
// }


function triggerRightPanels() {
	hideEntireActionsPanel();
	showStatusPanel();
	showCodetracePanel();
}

function extractQnGraph(graph) {
	var vList = graph.internalAdjList;
	var eList = graph.internalEdgeList;
	for(var key in vList) {
		var temp;
		var v = vList[key];
		temp = v.cxPercentage;
		v.cxPercentage = v.cx;
		v.cx = (temp/100)*MAIN_SVG_WIDTH;
		temp = v.cyPercentage;
		v.cyPercentage = v.cy;
		v.cy = (temp/100)*MAIN_SVG_HEIGHT;
	}
	return graph;
}

$( document ).ready(function() {
	var actionsHeight = ($('#actions p').length)*27 + 10;
	$('#actions').css('height', actionsHeight);
	$('#actions').css('width', actionsWidth);
	var actionsHideTop = Math.floor((actionsHeight - 16)/2);
	var actionsHideBottom = (actionsHeight - 16) - actionsHideTop;
	$('#actions-hide').css('padding-top', actionsHideTop);
	$('#actions-hide').css('padding-bottom', actionsHideBottom);
	
	$('#current-action').hide();
	$('#actions-hide img').addClass('rotateRight');
	
	//surpriseColour stuff
	

	$('#progress-bar .ui-slider-range').css("background-color", surpriseColour);
	
	$('#actions').css("background-color", colourTheSecond);
	$('#actions-hide').css("background-color", colourTheSecond);
	$('.action-menu-pullout').css('left', actionsWidth+43+'px');
	$('.action-menu-pullout').children().css('float','left');
	$('.coloured-menu-option').css("background-color", colourTheSecond).css('color','white');
	if(colourTheSecond == '#fec515' || colourTheSecond == '#a7d41e') {
		$('#actions p').css('color', 'black');
		$('#actions p').hover(function() { $(this).css('color', 'white');}, function() {$(this).css('color', 'black');});
		$('.coloured-menu-option').css('color', 'black');
		$('.coloured-menu-option').hover(function() { $(this).css('color', 'white');}, function() {$(this).css('color', 'black');});
		$('#actions-hide img').attr('src', 'img/arrow_black_right.png');
	}
	
	$('#codetrace').css("background-color", colourTheThird);
	$('#codetrace-hide').css("background-color", colourTheThird);
	if(colourTheThird == '#fec515' || colourTheThird == '#a7d41e') {
		$('#codetrace').css('color', 'black');
		$('#codetrace-hide img').attr('src', 'img/arrow_black_right.png');
		codetraceColor = 'black';
	}
	
	$('#status').css("background-color", colourTheFourth);
	$('#status-hide').css("background-color", colourTheFourth);
	if(colourTheFourth == '#fec515' || colourTheFourth == '#a7d41e') {
		$('#status').css('color', 'black');
		$('#status-hide img').attr('src', 'img/arrow_black_right.png');
	}
	
	//arrow buttons to show/hide panels	
	$('#status-hide').click(function() {
		if(isStatusOpen) {
			hideStatusPanel();
		} else {
			showStatusPanel();
		}
	});
	$('#codetrace-hide').click(function() {
		if(isCodetraceOpen) {
			hideCodetracePanel();
		} else {
			showCodetracePanel();
		}
	});
	$('#actions-hide').click(function() {
		if(isActionsOpen) {
			hideEntireActionsPanel(); //must define hideEntireActionsPanel() function in vizname_actions.js file
		} else {
			showActionsPanel();
		}
	});
	

	
});