import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Carts } from '../Collections/Carts.js';

import './templateformcarts.html';

Template.templateformcarts.onCreated(function () {
  Meteor.subscribe('carts');
});

Template.templateformcarts.onRendered(function(){
	$('.templateformcarts').validate({
        rules: {
            title: {
                required: true
            },
            seller: {
                required: true
            },
        },
        messages: {
            title: {
                required: "You must enter the name of the product.",
                title: "You've entered an invalid product name."
            },
            seller: {
                required: "You must enter a password.",
                seller: "You've entered an invalid seller."
            },
        }
    });
    var validatorformcarts = $('.templateformcarts').validate({
        submitHandler: function(event){
            var title = $('[name=title]').val();
            var seller = $('[name=seller]').val();
            Meteor.AddtoCart(title, seller, function(error){
                if(error){
                    validatorformcarts.showErrors({
        				title: error.reason,
        			)};
        			validatorformcarts.showErrors({
        				seller: error.reason,
        			)};       
                } else {}
            });
        }
    });
});