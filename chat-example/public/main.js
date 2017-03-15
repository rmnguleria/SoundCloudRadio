var socket = io();
$('form').submit(function(event){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
});
socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});