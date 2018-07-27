import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Products = new Mongo.Collection('products');

Products.attachSchema(new SimpleSchema({
  seller: {
		type: String,
		label: "Seller",
	},

  title: {
		type: String,
		label: "Title",
	},

	details: {
		type: String,
		label: "Details",
	},

	price: {
		type: String,
		label: "Price",
	},

	Halalapproved: {
		type: String,
		label: "Halal",
	},

	Veganapproved: {
		type: String,
		label: "Vegan",
	},

	Vegetarianapproved: {
		type: String,
		label: "Vegetarian",
	},

	tags: {
		type: Array,
		label: "Search Tags",
	},

	"tags.$":{
        type: String,
        optional: true
    },
}));

Products.allow ({
	insert: function() {
		return true;
	},
});