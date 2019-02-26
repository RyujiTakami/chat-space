$(function(){
  function buildHTML(message){
    if (message.image !== null) {
    var html = `
              <div class="message__box" data-id=${message.id}>
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
              <div class="message__box" data-id=${message.id}>
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
      $('.form__box--submit-btn').prop('disabled', false)
      $(".messages").animate({"scrollTop": "100000px"})
    })

    .fail(function() {
      alert("error");
    })

  })


    $(function(){

      setInterval(update,5000);
    });

      var message_list = $(".messages")

      function buildMESSAGE(message){
        if (message.image !== null) {
        var html = `
                  <div class="message__box" data-id=${message.id}>
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
                  <div class="message__box" data-id=${message.id}>
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

        message_list.append(html)
      }

    function update(){
      if ($(".message__box")[0]) {
        var message_id = $(".message__box:last").data("id");
      } else {
        var message_id = 0
      }
      $.ajax({
        url: window.location.href,
        type: "GET",
        data: {
          message: { id: message_id }
        },
        dataType: "json"
      })

      .always(function(data){
        console.log(data)
        $.each(data, function(i, data){
        buildMESSAGE(data);
        $(".messages").animate({"scrollTop": "100000px"})

        });
      });

    }

});
