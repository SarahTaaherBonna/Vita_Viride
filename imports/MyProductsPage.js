import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';

import './MyProductsPage.html';

if(Meteor.isClient) {

	Template.MyProductsPage.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('products');
		})
	});

	Template.MyProductsPage.events({
		'submit.Search Seller Name'(event) {
			event.preventDefault();
		},
	});

}