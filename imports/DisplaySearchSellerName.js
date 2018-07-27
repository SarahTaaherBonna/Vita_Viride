import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './MyProductsPage.html';
import './DisplaySearchSellerName.html';

Template.DisplaySearchSellerName.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('products');
	})
});

Template.DisplaySearchSellerName.helpers({
	sellerproducts() {
		var sellernamevar = FlowRouter.getQueryParam("sellernamevar");
		console.log(sellernamevar);
		return Products.find({seller: sellernamevar});
	},
});
