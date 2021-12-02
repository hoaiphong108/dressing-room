import React, { Component } from 'react';
import ProductItem from '../ProductItem';
import { connect } from 'react-redux';
class ProductList extends Component {
	renderProducts = () => {
		const productsHTML = this.props.products
			.filter((item) => {
				return item.type === this.props.selectedCategory;
			})
			.map((item) => {
				return (
					<div key={item.id} className="col-4">
						{/* truyeenf item vao component ProductItem va render ra giao dien */}
						<ProductItem prod={item} />
					</div>
				);
			});
		return productsHTML;
	};
	render() {
		return (
			<div className="container-fluid">
				<div className="row">{this.renderProducts()}</div>
			</div>
		);
	}
}
//chuyển state trên store thành props của component để sd
const mapStateToProps = (state) => {
	return {
		products: state.product.productList,
		selectedCategory: state.category.selectedCategory,
	};
};
export default connect(mapStateToProps)(ProductList);
