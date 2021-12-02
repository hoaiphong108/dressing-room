const initialState = {
        categoryList: [
            { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
            { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
            { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
            { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
            { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
            // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
            { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
            { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
        ],
        selectedCategory: "topclothes",
    }
    // redux sử dụng cơ chế so sánh nông(shallow comparasion): đầu vào giống đầu ra thì kho tháy đổi/ko render lại , đầu vào khác đầu ra thì sẽ render lại (dòng 15 và dòng 19)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            state.selectedCategory = action.payload;
            return {...state }; // hàm mới copy từ state



        default:
            return state;
    }
}
export default reducer;