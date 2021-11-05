/* eslint-disable func-style */
class Task {

  constructor(title,description) {
    this.title = title;
    this.description = description;
    this.complete = false;
  }

  completeTask() {
    this.complete = true;
  }

  logTaskState() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  }

}

const task1 = new Task("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = new Task("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
