import http from 'http';
import socket from 'socket.io';
import redis from 'socket.io-redis'
import { apiConfig } from './../config/config'

class Server {
  /**
   *
   * @param {express} app
   */
  constructor(app) {
    let server = http.createServer(app);
    server.listen(apiConfig.socket.port, apiConfig.socket.host);
    this.io = socket(server);
    this.io.adapter(redis({ host: apiConfig.redis.host, port: apiConfig.redis.port }))
  }

  /**
   * @param {Object} socket
   * @callback socketListener
   */

  /**
   *
   * @param {string} namespace
   * @param {socketListener} listener
   * @returns {Server}
   */
  connect(namespace, listener) {
    this.io.of(namespace).on('connection', listener);
    return this;
  }
}

export default Server;