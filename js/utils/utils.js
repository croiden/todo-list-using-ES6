import itemModel from '../models/itemModel.js';
class Util {
  static toggleListDisplay() {
    let todoItems = itemModel.getTodoList();
    let itemList = document.querySelector('.item-list');
    let itemCount = document.querySelector('.count');

    let len = Object.keys(todoItems.data).length;
    if (len > 0) {
      itemList.style.display = "block";
      len = Util.getPendingCount();
      itemCount.innerHTML = `${len} ${Util.getLabel(len)} left`;
    } else {
      itemList.style.display = "none";
    }
  }
  static getLabel(count) {
    return count === 1 ? "item" : "items";
  }
  static getPendingCount() {
    let count = 0;
    let todoItems = itemModel.getTodoList();
    Object.keys(todoItems.data).forEach(i => {
      if (!todoItems.data[i].done) {
        count++;
      }
    });
    return count;
  }
}
export default Util;
