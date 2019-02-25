$(function(){

  var user_list = $("#user-search-result")

  function appendUser(user){
    var html =`
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.user_name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.user_id}" data-user-name="${user.user_name}">追加</a>
                </div>
              `
    user_list.append(html)
  }

  function appendNoUser(user){
    var html = `
                <div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user}</p>
                </div>
                `

    user_list.append(html)
  }

  var member_list = $(".chat-group-users")

  function appendMember(user){
    var html = `
                <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${user.user_id}'>
                  <input name='group[user_ids][]' type='hidden' value='${user.user_id}'>
                  <p class='chat-group-user__name'>${user.user_name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>
                `
    member_list.append(html)
  }

  $("#user-search-field").on("input",function(){
    var input = $("#user-search-field").val();

    $.ajax({
      type: "GET",
      url: "/users/",
      data: { keyword: input },
      dataType: "json"
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0 ) {
        users.forEach(function(user){
          appendUser(user);
        })
      } else {
        appendNoUser("一致するユーザーはいません")
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました")
    })

  })

  var user = {}

  $("#user-search-result").on("click",".user-search-add",function(){
    $(this).parent().remove();
    var user_id = $(this).attr("data-user-id");
    var user_name = $(this).attr("data-user-name");
    user["user_id"] = user_id
    user["user_name"] = user_name
    appendMember(user)
  })

  $(".chat-group-form__field").on("click",".chat-group-user__btn--remove",function(){
    $(this).parent().remove();
  })

})
