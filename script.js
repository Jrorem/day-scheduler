$(document).ready(function () {
 

  
  $(".saveBtn").on("click", function (event) { 
    event.preventDefault();
    const data = $(this).prev().val();
    const key = $(this).parent().attr("id")
    localStorage.setItem(key, data)
  });

  const hour = dayjs().hour();

  $(".time-block").each(function() {
    const key = $(this).attr("id").split("-")[1];
    if(key < hour){
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
    } else if(key === hour) {
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
    

  })
 
  const day = dayjs().format("dddd")

  $(".day").text(day);

 if (localStorage.getItem('hour-9')) {
  $("#hour-9").children("textarea").val(localStorage.getItem('hour-9'))
 }

 if (localStorage.getItem('hour-10')) {
  $("#hour-10").children("textarea").val(localStorage.getItem('hour-10'))
 }

 if (localStorage.getItem('hour-11')) {
  $("#hour-11").children("textarea").val(localStorage.getItem('hour-11'))
 }

 if (localStorage.getItem('hour-12')) {
  $("#hour-12").children("textarea").val(localStorage.getItem('hour-12'))
 }

 if (localStorage.getItem('hour-1')) {
  $("#hour-1").children("textarea").val(localStorage.getItem('hour-1'))
 }

 if (localStorage.getItem('hour-2')) {
  $("#hour-2").children("textarea").val(localStorage.getItem('hour-2'))
 }

 if (localStorage.getItem('hour-3')) {
  $("#hour-3").children("textarea").val(localStorage.getItem('hour-3'))
 }

 if (localStorage.getItem('hour-4')) {
  $("#hour-4").children("textarea").val(localStorage.getItem('hour-4'))
 }

 if (localStorage.getItem('hour-5')) {
  $("#hour-5").children("textarea").val(localStorage.getItem('hour-5'))
 }
  
});


