/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {
	onSelectProduct = () => {
		this.props.dispatch({
			type: 'SET_PRODUCT',
			payload: {
				img: this.props.prod.imgSrc_png,
				type: this.props.prod.type,
			},
		});
	};
	render() {
		const { imgSrc_jpg, name } = this.props.prod;
		return (
			<div className="card mb-3">
				<img src={imgSrc_jpg} alt="products" />
				<div className="card-body">
					<p className="lead">{name}</p>
					<button onClick={this.onSelectProduct} className="btn btn-success">
						Thử
					</button>
				</div>
			</div>
		);
	}
}
//khôg cần lây dữ liệu về , chỉ cần post 2 tham sôs lên nên không cần mapStateToProps

export default connect()(ProductItem);

// 1.xây function gắn vào nuts thử, dispatch action lên store type=SET_PRODUCT, gửi imgSrc_png và type
//2.lên product reducer , xây dựng phương thức xử lí action
//3. ở component model , connect lên store lấy slectedProducts về
