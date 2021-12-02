import React, { Component } from 'react';
import { connect } from 'react-redux';
class Category extends Component {
	onSelectCategory = (category) => {
		return () => {
			const action = {
				type: 'SET_CATEGORY', //type do mìn tự đặt , để phân biệt với các action khác
				payload: category,
			};
			this.props.dispatch(action);
		}; //do ham nay dc s u dung khi click vaomới truyền tham số nên sủ dụng closure
	};

	renderCategories = () => {
		const categoriesHTML = this.props.categories.map((item) => {
			return (
				<button onClick={this.onSelectCategory(item.type)} key={item.type} className="btn btn-secondary">
					{item.showName}
				</button>
			);
		});
		return categoriesHTML;
	};
	render() {
		return <div className="btn-group container-fluid mb-4">{this.renderCategories()}</div>;
	}
}
const mapStateToProps = (state) => {
	return {
		categories: state.category.categoryList,
	};
};
export default connect(mapStateToProps)(Category);
