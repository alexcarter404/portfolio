$(document).ready(function(){
  $("#item1flip").click(function(){
    $("#item1").slideToggle("fast");
	$("#portfolio-flip").slideUp("fast");
	scrollToElement('#item1', 400, -150);
  });
  
  $("#item2flip").click(function(){
    $("#item2").slideToggle("fast");
	$("#portfolio-flip").slideUp("fast");
	scrollToElement('#item2', 400, -150);
  });
  
  $("#item3flip").click(function(){
    $("#item3").slideToggle("fast");
	$("#portfolio-flip").slideUp("fast");
	scrollToElement('#item3', 400, -150);
  });
  
  $("#item1").click(function(){
   $("#item1").slideUp("fast");
   $("#portfolio-flip").slideDown("fast");
   });
   
  $("#item2").click(function(){
   $("#item2").slideUp("fast");
   $("#portfolio-flip").slideDown("fast");
   });
   
  $("#item3").click(function(){
   $("#item3").slideUp("fast");
   $("#portfolio-flip").slideDown("fast");
   });
   
  $("#exp-item1").click(function(){
	$("#exp-item1-expand").slideToggle("fast");
	if ($('#exp-item1glyphdown').is(':visible')){
	$('#exp-item1glyphdown').hide();
	$('#exp-item1glyphup').show();
	}else{
	$('#exp-item1glyphdown').show();
	$('#exp-item1glyphup').hide();}
	});

  $("#exp-item2").click(function(){
	$("#exp-item2-expand").slideToggle("fast");
	if ($('#exp-item2glyphdown').is(':visible')){
	$('#exp-item2glyphdown').hide();
	$('#exp-item2glyphup').show();
	}else{
	$('#exp-item2glyphdown').show();
	$('#exp-item2glyphup').hide();}
	});

  $("#exp-item3").click(function(){
	$("#exp-item3-expand").slideToggle("fast");
	if ($('#exp-item3glyphdown').is(':visible')){
	$('#exp-item3glyphdown').hide();
	$('#exp-item3glyphup').show();
	}else{
	$('#exp-item3glyphdown').show();
	$('#exp-item3glyphup').hide();}
	});
  
});