import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Carts } from '../Collections/Carts.js';

import './templateformcarts.html';

Template.templateformcarts.onCreated(function () {
  Meteor.subscribe('carts');
});

Template.templateformcarts.events({
    'insert': function(event){
        event.preventDefault();
    }
});

Template.templateformcarts.onRendered(function(){
	$('.templateformcarts').validate({
        rules: {
        	username: {
                required: true
            },
            title: {
                required: true
            },
            seller: {
                required: true
            },
            qty: {
                required: true,
                digits: true,
                min: 1
            },
        },
        messages: {
        	username: {
                required: "You must enter your username."
            },
            title: {
                required: "You must enter the name of the product."
            },
            seller: {
                required: "You must enter a password."
            },
            qty: {
                required: "You must enter a valid number.",
                min: "You've entered an invalid number."
            },
        }
    });
    var validatorformcarts = $('.templateformcarts').validate({
        submitHandler: function(event){
        	var usernameproduct= $('[name=username]').val();
            var titleproduct = $('[name=title]').val();
            var sellerproduct = $('[name=seller]').val();
            var quantityproduct = $('[name=qty]').val();
   //          Carts.createCart({
   //  			username: username,
   //  			title: title,
   //  			seller: seller,
   //  			quantity: quantity,
			// }, function(error){
   //  			if(error){
   //      			console.log(error.reason);
   //  			} else {}
			// });
           //  Meteor.AddtoCart(usernameproduct, titleproduct, sellerproduct, quantityproduct, function(error){
           //      if(error){
           //          validatorformcarts.showErrors({
        			// 	"title": "Please input correct title"
        			// )};
        			// validatorformcarts.showErrors({
        			// 	"seller": "Please input correct seller"
        			// )};       
           //      } else {}
           //  });
        }
    });
});