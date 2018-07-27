import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Products } from '../../Collections/Products.js';
//import { Carts } from '../../Collections/Carts.js';

import './SellerHomeLayout.html';
import './SellerMainLayout.html';

Template.SellerHomeLayout.onCreated(function () {
  Meteor.subscribe('products');
  //Meteor.subscribe('carts');
});


Template.SellerMarketplaceDisplay.helpers({
	'products': function() {
		return Products.find();
	}
});
