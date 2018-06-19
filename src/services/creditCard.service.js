'use strict'

var ApiService = require('./api.service')

exports = module.exports = CreditCardService

function CreditCardService() {}

CreditCardService.addCard = function(spree_user, card, spree_address) {
    var data = {
        spree_user: spree_user,
        card: card,
        spree_address: spree_address
    }
    return ApiService.post('/add-card', data);
}

CreditCardService.updateCard = function(spree_user, card, spree_address,
    previousCard) {
    var data = {
        spree_user: spree_user,
        card: card,
        spree_address: spree_address,
        previousCard: previousCard
    }
    return ApiService.post('/update-card', data);
}
