import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';

import './CartPage.html';

if(Meteor.isClient) {

	Template.CartPage.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('carts');
		})
	});

	Template.CartPage.events({
		'submit.Search Username'(event) {
			event.preventDefault();
		},
	});

}