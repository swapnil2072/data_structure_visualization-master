$('#play').hide();

	//this viz-specific code
	var listWidget = new List();
    var gw = listWidget.getGraphWidget();
    listWidget.setActiveStatus("list");
	
	//title changing
	$('#title-LL').click(function() {
		if(isPlaying) {	stop(); }
		hideEntireActionsPanel();
		showActionsPanel();
		displayList();
        changeTextList();
		hideStatusPanel();
		hideCodetracePanel();
		listWidget.setActiveStatus("list");
	});
	$('#title-Stack').click(function() {
		if(isPlaying) {	stop(); }
		hideEntireActionsPanel();
		showActionsPanel();
		displayStack();
        changeTextStack();
		hideStatusPanel();
		hideCodetracePanel();
		listWidget.setActiveStatus("stack");
	});
	$('#title-Queue').click(function() {
		if(isPlaying) {	stop(); }
		hideEntireActionsPanel();
		showActionsPanel();
		displayQueue();
        changeTextQueue();
		hideStatusPanel();
		hideCodetracePanel();
		listWidget.setActiveStatus("queue");
	});
	$('#title-DLL').click(function() {
		if(isPlaying) {	stop(); }
		hideEntireActionsPanel();
		displayList();
        changeTextDoublyList();
		showActionsPanel();
		hideStatusPanel();
		hideCodetracePanel();
        listWidget.setActiveStatus("doublylist");
	});
	$('#title-Deque').click(function() {
		if(isPlaying) {	stop(); }
		hideEntireActionsPanel();
		displayDeque();
        changeTextDeque();
		showActionsPanel();
		hideStatusPanel();
		hideCodetracePanel();
        listWidget.setActiveStatus("deque");
	});



	function displayList(){
        document.getElementById("insert-deque-input").style.display = "none";
        document.getElementById("insert-deque-front").style.display = "none";
        document.getElementById("insert-deque-back").style.display = "none";
        document.getElementById("remove-deque-front").style.display = "none";
        document.getElementById("remove-deque-back").style.display = "none";
        document.getElementById("search-peek-front").style.display = "none";
        document.getElementById("search-peek-back").style.display = "none";
		document.getElementById("enqueueback-input").style.display = "none";
		document.getElementById("enqueueback-go").style.display = "none";
		document.getElementById("pushtop-input").style.display = "none";
		document.getElementById("pushtop-go").style.display = "none";
		document.getElementById("search-input").style.display = "";
		document.getElementById("search-go").style.display = "";
		document.getElementById("insert-head").style.display = "";
		document.getElementById("insert-tail").style.display = "";
		document.getElementById("insert-kth").style.display = "";
		document.getElementById("remove-head").style.display = "";
		document.getElementById("remove-tail").style.display = "";
		document.getElementById("remove-kth").style.display = "";
	}

	function displayStack(){
        document.getElementById("insert-deque-input").style.display = "none";
        document.getElementById("insert-deque-front").style.display = "none";
        document.getElementById("insert-deque-back").style.display = "none";
        document.getElementById("remove-deque-front").style.display = "none";
        document.getElementById("remove-deque-back").style.display = "none";
        document.getElementById("search-peek-front").style.display = "none";
        document.getElementById("search-peek-back").style.display = "none";
		document.getElementById("enqueueback-input").style.display = "none";
		document.getElementById("enqueueback-go").style.display = "none";
		document.getElementById("pushtop-input").style.display = "";
		document.getElementById("pushtop-go").style.display = "";
		document.getElementById("search-input").style.display = "none";
		document.getElementById("search-go").style.display = "none";
		document.getElementById("insert-head").style.display = "none";
		document.getElementById("insert-tail").style.display = "none";
		document.getElementById("insert-kth").style.display = "none";
		document.getElementById("remove-head").style.display = "none";
		document.getElementById("remove-tail").style.display = "none";
		document.getElementById("remove-kth").style.display = "none";
	}

	function displayQueue(){
        document.getElementById("insert-deque-input").style.display = "none";
        document.getElementById("insert-deque-front").style.display = "none";
        document.getElementById("insert-deque-back").style.display = "none";
        document.getElementById("remove-deque-front").style.display = "none";
        document.getElementById("remove-deque-back").style.display = "none";
        document.getElementById("search-peek-front").style.display = "none";
        document.getElementById("search-peek-back").style.display = "none";
		document.getElementById("enqueueback-input").style.display = "";
		document.getElementById("enqueueback-go").style.display = "";
		document.getElementById("pushtop-input").style.display = "none";
		document.getElementById("pushtop-go").style.display = "none";
		document.getElementById("search-input").style.display = "none";
		document.getElementById("search-go").style.display = "none";
		document.getElementById("insert-head").style.display = "none";
		document.getElementById("insert-tail").style.display = "none";
		document.getElementById("insert-kth").style.display = "none";
		document.getElementById("remove-head").style.display = "none";
		document.getElementById("remove-tail").style.display = "none";
		document.getElementById("remove-kth").style.display = "none";		
	}

    function displayDeque(){
        document.getElementById("insert-deque-input").style.display = "";
        document.getElementById("insert-deque-front").style.display = "";
        document.getElementById("insert-deque-back").style.display = "";
        document.getElementById("remove-deque-front").style.display = "";
        document.getElementById("remove-deque-back").style.display = "";
        document.getElementById("search-peek-front").style.display = "";
        document.getElementById("search-peek-back").style.display = "";
        document.getElementById("enqueueback-input").style.display = "none";
        document.getElementById("enqueueback-go").style.display = "none";
        document.getElementById("pushtop-input").style.display = "none";
        document.getElementById("pushtop-go").style.display = "none";
        document.getElementById("search-input").style.display = "none";
        document.getElementById("search-go").style.display = "none";
        document.getElementById("insert-head").style.display = "none";
        document.getElementById("insert-tail").style.display = "none";
        document.getElementById("insert-kth").style.display = "none";
        document.getElementById("remove-head").style.display = "none";
        document.getElementById("remove-tail").style.display = "none";
        document.getElementById("remove-kth").style.display = "none";
    }

	function changeTextList(){
        document.getElementById('list-tutorial-1-text').innerHTML = "Linked list is a data structure consisting of a group of vertices which together represent a sequence. Under the simplest form, each vertex is composed of a data and a reference (in other words, a link) to the next vertex in the sequence.";
		document.getElementById('create').innerHTML = "Create";
		document.getElementById('search').innerHTML = "Search";
		document.getElementById('insert').innerHTML = "Insert";
		document.getElementById('remove').innerHTML = "Remove";
	}

	function changeTextStack(){
         document.getElementById('list-tutorial-1-text').innerHTML = "Stack is a particular kind of abstract data type or collection in which the principal (or only) operations on the collection are the addition of an entity to the collection, known as push and removal of an entity, known as pop. It is known as  Last-In-First-Out (LIFO) data structure.";
		document.getElementById('create').innerHTML = "Create";
		document.getElementById('search').innerHTML = "Peek";
		document.getElementById('insert').innerHTML = "Push";
		document.getElementById('remove').innerHTML = "Pop";
	}

	function changeTextQueue(){
        document.getElementById('list-tutorial-1-text').innerHTML = "Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. It is known as First-In-First-Out (FIFO) data structure.";
		document.getElementById('create').innerHTML = "Create";
		document.getElementById('search').innerHTML = "Peek";
		document.getElementById('insert').innerHTML = "Enqueue";
		document.getElementById('remove').innerHTML = "Dequeue";
	}

    function changeTextDoublyList(){
        document.getElementById('list-tutorial-1-text').innerHTML = "Doubly-linked list is a linked data structure that consists of a set of sequentially linked records called vertices. Each vertex contains two fields, called links, that are references to the previous and to the next vertex in the sequence of vertices.";
        document.getElementById('create').innerHTML = "Create";
        document.getElementById('search').innerHTML = "Search";
        document.getElementById('insert').innerHTML = "Insert";
        document.getElementById('remove').innerHTML = "Remove";
    }

    function changeTextDeque(){
        document.getElementById('list-tutorial-1-text').innerHTML = "Double-ended queue (dequeue, often abbreviated to deque, pronounced deck) is an abstract data type that generalizes a queue, for which elements can be added to or removed from either the front (head) or back (tail).";
        document.getElementById('create').innerHTML = "Create";
        document.getElementById('search').innerHTML = "Peek";
        document.getElementById('insert').innerHTML = "Enqueue";
        document.getElementById('remove').innerHTML = "Dequeue";
    }

	function searchGeneric(){
		if(listWidget.getActiveStatus()=="list"){
            //do nothing
            //open next level option
		}
		else if(listWidget.getActiveStatus()=="stack"){
			peekStack();
		}
		else if(listWidget.getActiveStatus()=="queue"){
			peekQueue();
		}
        else if(listWidget.getActiveStatus()=="doublylist"){
            //do nothing
            //open next level option
        }
        else if(listWidget.getActiveStatus()=="deque"){
           //do nothing
           //open next level option
        }
	}

	function removeGeneric(){
		if(listWidget.getActiveStatus()=="list"){
            //do nothing
            //open next level option
		}
		else if(listWidget.getActiveStatus()=="stack"){
			removeHead();
		}
		else if(listWidget.getActiveStatus()=="queue"){
			removeHead();
		}
        else if(listWidget.getActiveStatus()=="doublylist"){
            //do nothing
            //open next level option
        }
        else if(listWidget.getActiveStatus()=="deque"){
           //do nothing
           //open next level option
        }
	}

	function random() {
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			if((mode=="exploration")&&listWidget.generateRandom()) {
				 $('#progress-bar').slider( "option", "max", 0);
				closeCreate();
				isPlaying = false;
			}
		}, 500)
		hideStatusPanel();
		hideCodetracePanel();
	}

	function randomLL() {
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			if((mode=="exploration")&&listWidget.generateRandomSorted()) {
				 $('#progress-bar').slider( "option", "max", 0);
				closeCreate();
				isPlaying = false;
			}
		}, 500)
		hideStatusPanel();
		hideCodetracePanel();
	}

	function randomFixedSize(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-create-size').val();
			input = parseInt(input);
			if((mode=="exploration")&&listWidget.generateRandomFixedSize(input)) {
				 $('#progress-bar').slider( "option", "max", 0);
				closeCreate();
				isPlaying = false;
			}
		}, 500)
		hideStatusPanel();
		hideCodetracePanel();
	}

	function nonRandom(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-create-arr').val();
			input = input.split(",");
			if((mode=="exploration")&&listWidget.generateUserDefined(input)) {
				 $('#progress-bar').slider( "option", "max", 0);
				closeCreate();
				isPlaying = false;
			}
		}, 500)
		hideStatusPanel();
		hideCodetracePanel();
	}

	 function peekStack(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			if((mode=="exploration")&&listWidget.peek()) {
				$('#current-action').show();
				$('#current-action p').html("Peek Top");
				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
				triggerRightPanels();
				isPlaying = true;
			}
		}, 500)
    }

     function peekQueue(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			if((mode=="exploration")&&listWidget.peek()) {
				$('#current-action').show();
				$('#current-action p').html("Peek Front");
				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
				triggerRightPanels();
				isPlaying = true;
			}
		}, 500)
    }

    function peekDeque(location){
       if(isPlaying) {  stop(); }
        setTimeout( function() {
            if(location == "front"){
                if((mode=="exploration")&&listWidget.peek()) {
                    $('#current-action').show();
                    $('#current-action p').html("Peek Front");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
            else{
                if((mode=="exploration")&&listWidget.peekBack()) {
                    $('#current-action').show();
                    $('#current-action p').html("Peek Back");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
        }, 500)
    }

    function searchVertex(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-search').val();
			input = parseInt(input);
			if((mode=="exploration")&&listWidget.search(input)) {
				$('#current-action').show();
				$('#current-action p').html("Search for "+ input);
				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
				triggerRightPanels();
				isPlaying = true;
			}
		}, 500)
    }

    function pushTop(){
 		if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-push-top-value').val();
			if((mode=="exploration")&&listWidget.insertArrHead(input)) {
				$('#current-action').show();
				$('#current-action p').html("Insert "+ input);
				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
				triggerRightPanels();
				isPlaying = true;
			}	
		}, 500)
    }

    function enqueueBack(){
    	if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-enqueue-back-value').val();
			if((mode=="exploration")&&listWidget.insertArrTail(input)) {
				$('#current-action').show();
				$('#current-action p').html("Insert "+ input);
				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
				triggerRightPanels();
				isPlaying = true;
			}
		}, 500)
    }


 	function insertHead(){
 		if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-insert-head-value').val();
            if(listWidget.getActiveStatus()=="doublylist"){
                if((mode=="exploration")&&listWidget.insertArrHeadDoublyList(input)) {
                    $('#current-action').show();
                    $('#current-action p').html("Insert "+ input);
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }   
            }
            else{
    			if((mode=="exploration")&&listWidget.insertArrHead(input)) {
    				$('#current-action').show();
    				$('#current-action p').html("Insert "+ input);
    				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
    				triggerRightPanels();
    				isPlaying = true;
    			}	
            }
		}, 500)
    }

    function insertTail(){
    	if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-insert-tail-value').val();
            if(listWidget.getActiveStatus()=="doublylist"){
                 if((mode=="exploration")&&listWidget.insertArrTailDoublyList(input)) {
                    $('#current-action').show();
                    $('#current-action p').html("Insert "+ input);
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
            else{
                if((mode=="exploration")&&listWidget.insertArrTail(input)) {
                    $('#current-action').show();
                    $('#current-action p').html("Insert "+ input);
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
			
		}, 500)
    }

    function insertKth(){
    	if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-insert-kth-value').val();
			var index = $('#v-insert-kth').val();
			//input = input.split(",");
             if(listWidget.getActiveStatus()=="doublylist"){
                if((mode=="exploration")&&listWidget.insertArrKthDoublyList(input,index)) {
                    $('#current-action').show();
                    $('#current-action p').html("Insert "+ input);
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
             }
             else{
    			if((mode=="exploration")&&listWidget.insertArrKth(input,index)) {
    				$('#current-action').show();
    				$('#current-action p').html("Insert "+ input);
    				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
    				triggerRightPanels();
    				isPlaying = true;
    			}
            }
		}, 500)
    }

 function insertDeque(location){
       if(isPlaying) {  stop(); }
        setTimeout( function() {
            var input = $('#v-insert-deque-value').val();
            if(location == "front"){
                if((mode=="exploration")&&listWidget.insertArrHeadDoublyList(input)) {
                    $('#current-action').show();
                    $('#current-action p').html("Insert "+ input + " to Front");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }   
            }
            else{
                if((mode=="exploration")&&listWidget.insertArrTailDoublyList(input)) {
                    $('#current-action').show();
                    $('#current-action p').html("Insert "+ input + " to Back");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
        }, 500)
    }


//another stub function created by me
	function removeHead(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
            if(listWidget.getActiveStatus()=="doublylist"){
                if((mode=="exploration")&&listWidget.removeArrHeadDoublyList()) {
                    $('#current-action').show();
                    $('#current-action p').html("Remove head");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
            else{
    			if((mode=="exploration")&&listWidget.removeArrHead()) {
    				$('#current-action').show();
    				$('#current-action p').html("Remove head");
    				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
    				triggerRightPanels();
    				isPlaying = true;
    			}
            }
		}, 500);
    }



    function removeTail(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
             if(listWidget.getActiveStatus()=="doublylist"){
                if((mode=="exploration")&&listWidget.removeArrTailDoublyList()) {
                    $('#current-action').show();
                    $('#current-action p').html("Remove Tail");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
             }
             else{
                if((mode=="exploration")&&listWidget.removeArrTail()) {
                    $('#current-action').show();
                    $('#current-action p').html("Remove Tail");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
             }
			
		}, 500);
    }

	function removeKth(){
		if(isPlaying) {	stop(); }
		setTimeout( function() {
			var input = $('#v-remove-kth').val();
			//input = input.split(",");
             if(listWidget.getActiveStatus()=="doublylist"){
                if((mode=="exploration")&&listWidget.removeArrKthDoublyList(input)) {
                    $('#current-action').show();
                    $('#current-action p').html("Remove "+ input);
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
             }
             else{
    			if((mode=="exploration")&&listWidget.removeArrKth(input)) {
    				$('#current-action').show();
    				$('#current-action p').html("Remove "+ input);
    				$('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
    				triggerRightPanels();
    				isPlaying = true;
    			}
            }
		}, 500);
    }

     function removeDeque(location){
       if(isPlaying) {  stop(); }
        setTimeout( function() {
            if(location == "front"){
                if((mode=="exploration")&&listWidget.removeArrHeadDoublyList()) {
                    $('#current-action').show();
                    $('#current-action p').html("Remove Front");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
            else{
                if((mode=="exploration")&&listWidget.removeArrTailDoublyList()) {
                    $('#current-action').show();
                    $('#current-action p').html("Remove Back");
                    $('#progress-bar').slider( "option", "max", gw.getTotalIteration()-1);
                    triggerRightPanels();
                    isPlaying = true;
                }
            }
        }, 500)
    }

	function createModelingOpen(modelingType)
    {
    	$(".create").css("bottom","114px");
   	 	if (modelingType != "createfixedsize") $('#createfixedsize-input').fadeOut('fast');
    	if (modelingType != "createuserdefined")   $('#createuserdefined-input').fadeOut('fast');
    	$('#' + modelingType + '-input').fadeIn('fast');
    }


	function insertModelingOpen(modelingType)
	{
		$(".insert").css("bottom","60px");
		if (modelingType != "insertkth") $('#insertkth-input').fadeOut('fast');
		if (modelingType != "inserthead")   $('#inserthead-input').fadeOut('fast');
		if (modelingType != "inserttail")  $('#inserttail-input').fadeOut('fast');
		$('#' + modelingType + '-input').fadeIn('fast');
	}

	function removeModelingOpen(modelingType)
	{
		$(".remove").css("bottom","33px");
		$('#' + modelingType + '-input').fadeIn('fast');
	}

	
	//playback controls might fit better in viz.js, but put here in case some viz does not use GraphWidgetNew.js
	var isPaused = false;
	function isAtEnd() {
		return (gw.getCurrentIteration()==(gw.getTotalIteration()-1));
	}
	
	function pause() {
		if(isPlaying) {
			isPaused = true;
			gw.pause();
			$('#play').show();
			$('#pause').hide();
		}
	}
	function play() {
		if(isPlaying) {
			isPaused = false;
			$('#pause').show();
			$('#play').hide();
			if(isAtEnd()) {
				gw.replay();
			} else {
				gw.play();
			}
		}
	}
	function stepForward() {
		if(isPlaying) {
			pause();
			gw.forceNext(250);
		}
	}
	function stepBackward() {
		if(isPlaying) {
			pause();
			gw.forcePrevious(250);	
		}
	}
	function goToBeginning() {
		if(isPlaying) {
			gw.jumpToIteration(0,0);
			pause();
		}
	}
	function goToEnd() {
		if(isPlaying) {
			gw.jumpToIteration(gw.getTotalIteration()-1,0);
			pause();
		}
	}
	function stop() {
		gw.stop();
		isPaused = false;
		isPlaying = false;
		$('#pause').show();
		$('#play').hide();
		$('#current-action').hide();
	}
	
	//shortcut keys for playback controls
	$(document).keydown( function(event) {
		if(event.which == 32) { //spacebar
			if(isPaused) { play(); } else { pause(); }
		} else if(event.which == 37) { //left arrow
			stepBackward();
		} else if(event.which == 39) { //right arrow
			stepForward();
		} else if(event.which == 35) { //end
			stop();
		} else if (event.which == 189) { //minus
			var d = (2200-gw.getAnimationDuration())-100;
			if(d > 0) {
				$("#speed-input").slider("value", d);
			} else {
				$("#speed-input").slider("value", 0);
			}
		} else if (event.which == 187) { //plus
			var d = (2200-gw.getAnimationDuration())+100;
			if(d <= 2000) {
				$("#speed-input").slider("value", d);
			} else {
				$("#speed-input").slider("value", 2000);
			}
		}
	});
	
	//sliders
	$("#speed-input").slider({
		min: 200,
		max: 2000,
		value: 1700,
		change: function(event, ui) {
			gw.setAnimationDuration(2200-ui.value);
		}
	});
	$("#progress-bar").slider({
		range: "min",
		min: 0,
		value: 0,
		slide: function(event, ui) {
			gw.pause();
			gw.jumpToIteration(ui.value,0);
		},
		stop: function(event, ui) {
			if(!isPaused) { setTimeout( function(){gw.play();}, 500) }
		}
	});