'use strict';
let config = require('config');
//let ravenFee = config.get('rvn').paytxfee;
//let dogeFee = config.get('doge').paytxfee;
//let lbryFee = config.get('lbc').paytxfee;
//let protonFee = config.get('proton').paytxfee;
//let ufoFee = config.get('ufo').paytxfee;
let phoenixFee = config.get('slc').paytxfee;
//let featherFee = config.get('ftc').paytxfee;
exports.commands = ['tiphelp'];
exports.tiphelp = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**SuperLumic coin (SLC) Tipper**__\nTransaction Fees: **' + phoenixFee + '**\n    **!tipslc balance** : get your balance\n    **!tipslc deposit** : get address for your deposits\n    **!tipslc withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n    **!tipslc <@user> <amount>** :mention a user with @ and then the amount to tip them\n    **!tipslc private <user> <amount>** : put private before Mentioning a user to tip them privately.\n'
    );
  }
};
