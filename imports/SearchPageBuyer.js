import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';

import './SearchPageBuyer.html';

if(Meteor.isClient) {

	Template.SearchPageBuyer.onCreated(function() {
		var self = this;
		self.autorun(function() {
			self.subscribe('products');
		})
	});

	Template.SearchPageBuyer.events({
		'submit.Search Tags'(event) {
			event.preventDefault();
		},
	});

}