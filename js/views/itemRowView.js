import itemModel from '../models/itemModel.js';
import utils from '../utils/utils.js';
class ItemRowView extends HTMLElement {

  createdCallback() {
    this.classList.add('task-row');

    this.innerHTML = ItemRowView.TEMPLATE;
    this.itemName = this.querySelector('p');
    this.itemCheck = this.querySelector('input');
    this.itemDelete = this.querySelector('a');
    this.itemLabel = this.querySelector('label');

    this.itemDelete.addEventListener('click', (e) => this.deleteItem(e));
    this.itemCheck.addEventListener('click', (e) => this.markItemDone(e));
  }

  attributeChangedCallback(attributeName) {
    // We display/update the created date message if the id changes.
    /*if (attributeName == 'id') {
    	let date
    	if (this.id) {
    		date = new Date(parseInt(this.id));
    	} else {
    		date = new Date();
    	}
    	// Format the date
    	let dateFormatterOptions = {
    		day: 'numeric',
    		month: 'short'
    	};
    	let shortDate = new Intl.DateTimeFormat("en-US", dateFormatterOptions).format(date);

    	this.dateElement.textContent = `Created on ${shortDate}`;
    }*/
  }

  setMessage(obj) {
    if (obj.done) {
      this.classList.add('done');
      this.itemCheck.checked = true;
    }
    this.itemName.textContent = obj.item;
    this.itemName.title = obj.item;

    this.itemCheck.id = obj.id;
    this.itemLabel.setAttribute("for", obj.id);
    this.itemDelete.id = `item-delete-${obj.id}`;
  }

  markItemDone(e) {
    let self = this;
    let id = e.currentTarget.id;
    let todoItems = itemModel.getTodoList();
    if (e.currentTarget.checked) {
      todoItems.data[id].done = true;
      self.classList.add('done');
    } else {
      todoItems.data[id].done = false;
      self.classList.remove('done');
    }
    itemModel.setTodoList(todoItems);
    utils.toggleListDisplay();
  }

  deleteItem(e) {
    let self = this;
    let id = e.currentTarget.id.split("item-delete-");
    id = id[1];
    let todoItems = itemModel.getTodoList();
    delete todoItems.data[id];
    itemModel.setTodoList(todoItems);
    self.parentNode.removeChild(self);

    utils.toggleListDisplay();
  }
}

ItemRowView.TEMPLATE =
  `
	  <div class="viewTaskView">
		 <input  type="checkbox"/>
		 <label></label>
		 <p></p>
		 <a  class="icon-delete"></a>
	  </div>`;

document.registerElement('item-row', ItemRowView);

export default ItemRowView;
