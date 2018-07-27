import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../client/layouts/BuyerMainLayout.html';
import '../client/layouts/BuyerHomeLayout.html';
import '../client/layouts/SellerMainLayout.html';
import '../client/layouts/SellerHomeLayout.html';
import '../client/layouts/HomeLayout.html';
import '../client/Partials/BuyerNavBar.html';
import '../client/Partials/SellerNavBar.html';
import '../client/Partials/NavBar.html';
import '../imports/templateformproducts.html';
import '../imports/templateformcarts.html';
import '../imports/BuyerPolicyPage.html';
import '../imports/SellerPolicyPage.html';
import '../imports/CartPage.html';
import '../imports/buyerhalalsnacks.html';
import '../imports/buyervegansnacks.html';
import '../imports/buyervegetariansnacks.html';
import '../imports/DisplaySearchUsername.html';
import '../imports/DisplaySearchSellerName.html';
import '../imports/MyProductsPage.html';
import '../imports/DisplaySearchPage.html';
import '../imports/SearchPage.html';

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/Buyer', {
	name: 'Buyer',
	action() {
		BlazeLayout.render('BuyerHomeLayout');
	}
});

FlowRouter.route('/Seller', {
	name: 'Seller',
	action() {
		BlazeLayout.render('SellerHomeLayout');
	}
});

FlowRouter.route('/Buyer-Home', {
	name: 'Buyer-Home',
	action() {
		BlazeLayout.render('BuyerHomeLayout');
	}
});

FlowRouter.route('/Seller-Home', {
	name: 'Seller-Home',
	action() {
		BlazeLayout.render('SellerHomeLayout');
	}
});

FlowRouter.route('/buyer-halal-snacks', {
	name: 'buyer-halal-snacks',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'Displaybuyerhalalsnacks'});
	}
});

FlowRouter.route('/seller-halal-snacks', {
	name: 'seller-halal-snacks',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'Displaybuyerhalalsnacks'});
	}
});

// FlowRouter.route('/halal-drinks', {
// 	name: 'halal-drinks',
// 	action() {
// 		BlazeLayout.render('MainLayout');
// 	}
// });

FlowRouter.route('/buyer-vegan-snacks', {
	name: 'buyer-vegan-snacks',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'Displaybuyervegansnacks'});
	}
});

FlowRouter.route('/seller-vegan-snacks', {
	name: 'seller-vegan-snacks',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'Displaybuyervegansnacks'});
	}
});

// FlowRouter.route('/vegan-drinks', {
// 	name: 'vegan-drinks',
// 	action() {
// 		BlazeLayout.render('MainLayout');
// 	}
// });

FlowRouter.route('/buyer-vegetarian-snacks', {
	name: 'buyer-vegetarian-snacks',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'Displaybuyervegetariansnacks'});
	}
});

FlowRouter.route('/seller-vegetarian-snacks', {
	name: 'seller-vegetarian-snacks',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'Displaybuyervegetariansnacks'});
	}
});

// FlowRouter.route('/vegetarian-drinks', {
// 	name: 'vegetarian-drinks',
// 	action() {
// 		BlazeLayout.render('MainLayout');
// 	}
// });

FlowRouter.route('/Add-to-My-Products', {
	name: 'Add-to-My-Products',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'templateformproducts'});
	}
});

FlowRouter.route('/My-Products', {
	name: 'My-Products',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'MyProductsPage'});
	}
});

FlowRouter.route('/Buyer-Policy', {
	name: 'Buyer-Policy',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'BuyerPolicyPage'});
	}
});

FlowRouter.route('/Seller-Policy', {
	name: 'Seller-Policy',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'SellerPolicyPage'});
	}
});

// FlowRouter.route('/Marketplace', {
// 	name: 'Marketplace',
// 	action() {
// 		BlazeLayout.render('SellerHomeLayout');
// 	}
// });

FlowRouter.route('/Add-to-Cart', {
	name: 'Add-to-Cart',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'templateformcarts'});
	}
});

FlowRouter.route('/Cart', {
	name: 'Cart',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'CartPage'});
	}
});

FlowRouter.route('/display-search-username', {
	name: 'display-search-username',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'DisplaySearchUsername'});
	}
});

FlowRouter.route('/display-search-seller-name', {
	name: 'display-search-seller-name',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'DisplaySearchSellerName'});
	}
});

FlowRouter.route('/Search-Buyer', {
	name: 'Search',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'SearchPage'});
	}
});

FlowRouter.route('/display-search-tags', {
	name: 'display-search-tags',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'DisplaySearchPage'});
	}
});

FlowRouter.route('/Search-Seller', {
	name: 'Search-Seller',
	action() {
		BlazeLayout.render('SellerMainLayout', {main: 'SearchPage'});
	}
});

FlowRouter.route('/display-search-tags', {
	name: 'display-search-tags',
	action() {
		BlazeLayout.render('BuyerMainLayout', {main: 'DisplaySearchPage'});
	}
});