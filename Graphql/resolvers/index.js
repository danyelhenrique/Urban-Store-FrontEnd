const resolvers = {
	Query: {
		data() {
			return String(Date.now());
		},

		indexProduct(_, args, cntx) {
			return null;
		},
		showProduct(_, args, cntx) {
			return null;
		},
		indexUser(_, args, cntx) {
			return null;
		},
		showUser(_, args, cntx) {
			return null;
		},
		indexPurchase(_, args, cntx) {
			return null;
		},
		showPurchase(_, args, cntx) {
			return null;
		},
		teste() {
			console.log('oi');
			return true;
		}
	},

	Mutation: {
		teste() {
			console.log('oi');
			return true;
		},
		storeProduct(_, args, cntx) {
			return null;
		},
		destroyProduct(_, args, cntx) {
			return null;
		},

		updateProduct(_, args, cntx) {
			return null;
		},
		loginUser(_, args) {
			return null;
		},
		storeUser(_, args, cntx) {
			return null;
		},
		destroyUser(_, args, cntx) {
			const user = UserController.destroy(args);

			return null;
		},
		updateUser(_, args, cntx) {
			return null;
		},

		storePurchase(_, args, cntx) {
			return null;
		},
		destroyPurchase(_, args, cntx) {
			return null;
		},
		updatePurchase(_, args, cntx) {
			return null;
		}
	}
};

export default resolvers;
