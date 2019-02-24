$(function(){
  function buildHTML(message){
    if (message.image !== null) {
    var html = `
              <div class="message__box">
                <div class="message__box--user-name">
                  ${message.user_name}
                  <span class="message__box--user-name-date">
                    ${message.created_at}
                 </span>
                </div>
                <div class="message__box--message">
                  <div class="message__box--message-content">
                    ${ message.content}
                  </div>
                  <img src="${message.image}", class="message__box--message-image">
                </div>
              </div>`

                } else{

    var html = `
              <div class="message__box">
                <div class="message__box--user-name">
                  ${message.user_name}
                  <span class="message__box--user-name-date">
                    ${message.created_at}
                  </span>
                </div>
                <div class="message__box--message">
                  <div class="message__box--message-content">
                    ${ message.content}
                  </div>
                </div>
              </div>`
                    }

    return html
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html)
      $("form")[0].reset()
      $('submit').prop('disabled', false)
      $(".messages").animate({"scrollTop": "100000px"})
    })

    .fail(function() {
      alert("error");
    })

  })
});
