require(`net`)
  .Server(socket => {
      // Событие data обрабатывается при считывании новых данных
      socket.on(`data`, data => 
         /* Данные возвращаются в виде эха обратно клиенту */
         console.log(data) || socket.write(data)
      );
})
  .listen(8080);

// void net.Server(sock => sock.on('data', d => console.log(d) || sock.write(' -> ' + d))).listen(2222);

// void http.Server(({url: r}, rs) => rs.end(r)).listen(2222);