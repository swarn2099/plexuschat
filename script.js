var myName;
$(document).ready(function() {

  $.ajax({
    url: 'http://acccnational.com:9090/plugins/restapi/v1/chatrooms?type=all',
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      Authorization: 'Basic eLnFScrfnkVErfIl='
    },
    success: function(json) {
      console.log('Test', json);
    },
    error: function(err) {
      console.log('Error', err);

    }

  });





  console.log("ready!");
  $('#messageScreen').hide();
  $("#letsChat").click(function() {
    $('#enterName').hide();
    myName = document.getElementById('nameField').value;
    renderChat(myName);
    $('#messageScreen').show();
  });
});

function responsiveChat(element) {
  $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="Your message"><input type="submit" value="Send"></form>');

  function showLatestMessage() {
    $(element).find('.messages').scrollTop($(element).find('.messages').height());
  }
  showLatestMessage();


  $(element + ' input[type="text"]').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $(element + ' input[type="submit"]').click();
    }
  });
  $(element + ' input[type="submit"]').click(function(event) {
    event.preventDefault();
    var message = $(element + ' input[type="text"]').val();
    if ($(element + ' input[type="text"]').val()) {
      var d = new Date();
      var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var currentDate =
        (("" + day).length < 2 ? "0" : "") +
        day +
        "." +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "." +
        d.getFullYear() +
        "&nbsp;&nbsp;" +
        clock;

      responsiveChatPush('.chat', '' + myName + '', 'me', '' + moment().format('h:mm:ss a') + '', '' + message + '');

      setTimeout(function() {
        $(element + ' > span').addClass("spinner");
      }, 100);
      setTimeout(function() {
        $(element + ' > span').removeClass("spinner");
      }, 2000);
    }
    $(element + ' input[type="text"]').val("");
    showLatestMessage();
  });
}

function responsiveChatPush(element, sender, origin, date, message) {
  var originClass;

  if (origin == 'me') {
    originClass = 'myMessage';
  } else {
    originClass = 'fromThem';
  }
  $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}

function renderChat(myName) {
  /* Activating chatbox on element */
  responsiveChat('.responsive-html5-chat');

  /* Let's push some dummy data */
  responsiveChatPush('.chat', '' + myName + '', 'me', '14:30:7', 'Welcome to PLEXUSchat');
  responsiveChatPush('.chat', 'James', 'you', '14:31:22', 'Test Message 1');
  responsiveChatPush('.chat', '' + myName + '', 'me', '14:33:32', 'Click any message for additional information');
  responsiveChatPush('.chat', 'Bobby', 'you', '04:37:12', 'Ok cool. Im gonna try typing a message');

}

/* DEMO */
if (parent == top) {
  $("a.article").show();
}
