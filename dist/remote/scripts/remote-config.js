window.remote = window.remote || {};

remote.defaults = {
  distance: 1000,
  angle: 45,
  iFrame: true
};

remote.pusherConfig = {
  authEndpoint: 'http://localhost:5000/pusher/auth',
  KEY: 'bd30401df04f28609d0c'
};
