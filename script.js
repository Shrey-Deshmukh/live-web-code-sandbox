function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");//an inline html page should be created. Put all these things in the htmlPanel and get whatever is in the css panel by $("#cssPanel").val()

  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
  //special command needs to be used for javascript as you dont want any normal person to get access to the packed of your browser
}

  $(".toggleButton").hover(function() {//when you hover on any toggle button, turn the background slightly darker
    $(this).addClass("highlightedButton");//whatever toggleButton you are hovering over, call class highlightedButton
  }, function() {//when you dont hover on the toggleButton, remove class highlightedButton and retains whatever style it had before
    $(this).removeClass("highlightedButton");
  });

  $(".toggleButton").click(function() {
    $(this).toggleClass("active"); //when you click on any toggleButton,add the class .active if its not there but remove it if its there
    $(this).removeClass("highlightedButton"); //so we can see it is selected while it is still hovering
    var panelId = $(this).attr("id") + "Panel"; //to get id of what is clicked. (It will get either 'html' or 'css' or 'javascript' or 'output' and 'Panel' is added to it)
    $("#" + panelId).toggleClass("hidden"); //toggle the class 'hidden'
    var numberOfActivePanels = 4 - $('.hidden').length;//no of active panels = 4-all those panels whose classes that are hidden
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);//change panel width to (window width)/no of active panels
  });

  $(".panel").height($(window).height() - $("#header").height() - 15);//we want the height of the text area to be height of the window - height of the header. We did this so the page resizes as the persons window size changes
  //the extra 15 px is because of the padding

  $(".panel").width(($(window).width() / 2) - 10);//change panel width to (window width)/2. At the start, show only two panels 'html' and 'output'

  updateOutput();//called at the start of the page when page is loaded

  $("textarea").on('change keyup paste', function() {//Every event of our textarea (if we type something in the textarea it will automatically change in the iframe)
    updateOutput();
  });
