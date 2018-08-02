import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../Collections/Products.js';
import { Carts } from '../Collections/Carts.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './SearchPageBuyer.html';
import './SearchPageSeller.html';
import './DisplaySearchPage.html';

Template.DisplaySearchPage.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('products');
	})
});

Template.DisplaySearchPage.helpers({
	searchproducts() {
		var tagsvar = FlowRouter.getQueryParam("tagsvar");
		console.log(tagsvar);

		var tagsvarres = tagsvar.toLowerCase();

		tagsvarres = tagsvarres.split(',');
		var Productslist;
		Productslist = Products.find({tags: {$in: tagsvarres}});
		return Productslist;
	},
});
