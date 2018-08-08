class ItemModel {
  static updateLocalStorage(val) {
    let todoItems = ItemModel.getTodoList();
    let id = todoItems.count++;
    todoItems.data[id] = {
      id: id,
      item: val,
      date: new Date(),
      done: false
    };
    ItemModel.setTodoList(todoItems);
    return todoItems.data[id];
  }
  static getTodoList() {
    return JSON.parse(localStorage.getItem("my-todo-list"));
  }
  static setTodoList(val) {
    localStorage.setItem("my-todo-list", JSON.stringify(val));
  }
}

export default ItemModel;
