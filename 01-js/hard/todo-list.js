/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todolist=[];
  }
  add(task){
    this.todolist.push(task);
  }
  remove(index){
    this.todolist.splice(index,1);
  }
  update(index,task){
    if (index>=this.todolist.length){
      return null;
    }
    this.todolist[index]=task;

  }
  getAll(){
    return this.todolist;
  }
  get(index){
    if (index>=this.todolist.length){
      return null;
    }
    return this.todolist[index];
  }
  clear(){
    this.todolist=[];
  }

}

module.exports = Todo;
