<p align="center"
  <a href="http://nestjs.com/" target="blank"<img src="https://images.velog.io/images/1yongs_/post/9c535649-df85-4ce9-beee-7bbf29160a78/nestjs_socketio_redis.png" width="320" alt="Nest Logo" /</a
</p


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# **Note:** The **Socket.io-Snippets** 
```bash

io.on('connect', onConnect);

function onConnect(socket){

  :bookmark: // Gửi cho tất cả client
   :white_check_mark: socket.emit('hello', 'can you hear me?', 1, 2, 'abc');

  :bookmark: // Gửi cho tất cả client ngoại trừ người gửi
   :white_check_mark: socket.broadcast.emit('broadcast', 'hello friends!');

  :bookmark: // Gửi cho tất cả client trong room 'game' ngoại trừ người gửi
   :white_check_mark: socket.to('game').emit('nice game', "let's play a game");

  :bookmark: // Gửi cho tất cả client trong room 'game1' và room 'game2' ngoại trừ người gửi
   :white_check_mark: socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");

  :bookmark: //  Gửi cho tất cả client trong room 'game' bao gồm cả người gửi
  :white_check_mark: io.in('game').emit('big-announcement', 'the game will start soon');

  :bookmark: // Gửi cho tất cả client trong namespace 'myNamespace', bao gồm cả người gửi
  :white_check_mark: io.of('myNamespace').emit('bigger-announcement', 'the tournament will start soon');

  :bookmark: // Gửi cho room 'room' trong namespace 'myNamespace', bao gồm cả người gửi
  :white_check_mark: io.of('myNamespace').to('room').emit('event', 'message');

  :bookmark: // Gửi tin nhắn riêng cho socket đó qua socketId
  :white_check_mark: io.to(`${socketId}`).emit('hey', 'I just met you');

  :bookmark: // Gửi không đính kèm file nén
  :white_check_mark: socket.compress(false).emit('uncompressed', "that's rough");

  :bookmark: // Việc gửi tin nhắn này cần sự chấp nhận từ client thì mới có thể đến được client
  :white_check_mark: socket.volatile.emit('maybe', 'do you really need it?');

  :bookmark: // Gửi dữ liệu liên quan đến hệ nhị phân
  :white_check_mark: socket.binary(false).emit('what', 'I have no binaries!');

  :bookmark: // Gửi dữ liệu cho tất cả client sử dụng node
  :white_check_mark: io.local.emit('hi', 'my lovely babies');

  :bookmark: // Gửi đến tất cả client kết nối đến
  :white_check_mark: io.emit('an event sent to all connected clients');

```
# WebSocket-Nest-ChatDemo
