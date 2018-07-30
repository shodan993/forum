var button = document.getElementById('button');

button.addEventListener('click', function () {
  var message = document.getElementById('name').value;
  var messageList = document.createElement('li');
  var userMessage = document.createTextNode(message);
  messageList.appendChild(userMessage);
  document.getElementsByClassName('posts')[0].append(messageList);
});
