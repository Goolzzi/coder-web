'use strict'

var ApiService = require('./api.service')

exports = module.exports = UserService

function UserService() {}

UserService.signUp = function(user, company, card) {
    var data = {
        spree_signup_user: user,
        company: company
    }
    if (card != undefined) data['card'] = card
    return ApiService.post('/signup', data);
}
