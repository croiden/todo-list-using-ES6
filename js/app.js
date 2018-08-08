import itemRowView from './views/itemRowView.js';
import itemModel from './models/itemModel.js';
import utils from './utils/utils.js';

class todoList {

	constructor() {
		this.addField = document.querySelector('input[type="text"]');
		this.ulList = document.querySelector('.taskList');
		this.checkAllElement = document.querySelector('#checkAll');
		this.onLoad();
		this.addField.addEventListener('change', e => this.addItem(e));
		this.checkAllElement.addEventListener('click', e => this.checkAll(e));
	}

	static get MAX_ITEMS() {
		return 10;
	}

	onLoad() {
		let self = this;
		let todoItems = itemModel.getTodoList();
		if (todoItems === null) {
			todoItems = {};
			todoItems["data"] = {};
			todoItems["count"] = 0;
			itemModel.setTodoList(todoItems);
		} else {}
		self.renderList();
	}

	addItem(e) {
		let self = this;
		let addVal = e.currentTarget.value;
		if (typeof addVal === "string") {
			addVal = addVal.trim();
			if (addVal !== '') {
				self.updateList(addVal);
			}
		}
		e.currentTarget.value = '';
	}

	updateList(val) {
		let self = this;
		let todoItems = itemModel.getTodoList();
		if (Object.keys(todoItems.data).length < todoList.MAX_ITEMS) {
			let newItem = itemModel.updateLocalStorage(val);
			utils.toggleListDisplay();
			self.getRowTemplate(newItem);
		} else {
			console.error(`Only ${todoList.MAX_ITEMS} Items supported.`);
		}
	}
	getRowTemplate(obj) {
		let self = this;
		let todoItem = document.createElement('item-row');
		todoItem.id = `item-row-${obj.id}`;

		self.ulList.insertBefore(todoItem, self.ulList.childNodes[0]);
		todoItem.setMessage(obj);
	}
	renderList() {
		let self = this;
		let todoItems = itemModel.getTodoList();
		Object.keys(todoItems.data).forEach(i => {
			let obj = todoItems.data[i];
			self.getRowTemplate(obj);
		});
		utils.toggleListDisplay();
	}
	checkAll(e) {
		var checked = e.currentTarget.checked;
		document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
			if (checkbox.checked !== checked) {
				checkbox.click();
			}
		});
	}

};
window.addEventListener('load', () => new todoList());
export default todoList;
