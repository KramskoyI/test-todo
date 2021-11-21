function Model(task, id, completed) {
    this.task = task;
    this.id = id;
    this.completed = completed;
}

Model.prototype.checked = function () {
    this.completed = !this.completed;
}
  
export default Model;
  