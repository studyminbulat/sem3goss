const net = require('net');
global.log = console.log;
//const client = net.connect({host: '192.168.0.208', port: 2222});
//const client = net.connect({port: 2222});
const client = net.connect({host: 'goss-minbulat.c9users.io', port: 8080});
void client.on('data', d => log(String(d))).on('end', () => log('fin'));
void client.write('hello');

// void net.connect({port: 2222}).on('data', d => console.log(String(d))).on('end', () => console.log('fin')).write('GET /author HTTP/1.1\n\n');
