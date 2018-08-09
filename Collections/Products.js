import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Products = new Mongo.Collection('products');

Products.attachSchema(new SimpleSchema({
  seller: {
		type: String,
		label: "Seller",
		optional: false,
	},

  title: {
		type: String,
		label: "Title",
		optional: false,
	},

	details: {
		type: String,
		label: "Details",
		optional: false,
	},

	price: {
		type: String,
		label: "Price",
		optional: false,
	},

	Halalapproved: {
		type: String,
		label: "Halal",
		optional: false,
	},

	Veganapproved: {
		type: String,
		label: "Vegan",
		optional: false,
	},

	Vegetarianapproved: {
		type: String,
		label: "Vegetarian",
		optional: false,
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