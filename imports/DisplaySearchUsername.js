import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './CartPage.html';
import './DisplaySearchUsername.html';

Template.DisplaySearchUsername.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('carts');
	})
});

Template.DisplaySearchUsername.helpers({
	cartproducts() {
		var usernamevar = FlowRouter.getQueryParam("usernamevar");
		console.log(usernamevar);
		return Carts.find({username: usernamevar});
	},
});
