import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './app-todo-info';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todos: Todo[] = [
    { task: 'Do laundry', completed: false },
    { task: 'Take a walk', completed: true },
    { task: 'Make dinner', completed: false },
    { task: 'Finish homework', completed: true },
    { task: 'Play Call of Duty', completed: false },
    { task: 'Catch up on my TV shows', completed: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  complete(todo: Todo) {
    todo.completed = true
  }
}
// export class Strike {      ←←← Doesn't work
//   deleteTodo: todo.deleted ←←← Doesn't work
// }
