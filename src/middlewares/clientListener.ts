const Clients = require('../models/clients');

import { U } from '../database/models/auth/user';

function clientlistener() {
  return function (req, res, next) {
    //console.dir('look at my sub domain  ' + req.subdomains[0]);
    // console.log(req.session.Client.name);

    if (
      req.subdomains[0] in allowedSubs ||
      typeof req.subdomains[0] === 'undefined' ||
      (req.session.Client && req.session.Client.name === req.subdomains[0])
    ) {
      //console.dir('look at the sub domain  ' + req.subdomains[0]);
      //console.dir('testing Session ' + req.session.Client);
      console.log('did not search database for ' + req.subdomains[0]);
      //console.log(JSON.stringify(req.session.Client, null, 4));
      next();
    } else {
      Clients.findOne({ subdomain: req.subdomains[0] }, function (err, client) {
        if (!err) {
          if (!client) {
            //res.send(client);
            res.send(403, 'Sorry! you cant see that.');
          } else {
            console.log('searched database for ' + req.subdomains[0]);
            //console.log(JSON.stringify(client, null, 4));
            //console.log(client);
            // req.session.tester = "moyo cow";
            req.session.Client = client;
            return next();
          }
        } else {
          console.log(err);
          return next(err);
        }
      });
    }
  };
}

module.exports = clientlistener;
