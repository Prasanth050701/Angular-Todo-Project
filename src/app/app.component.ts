import { Component } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
    tasks: Task[] = [
    { description: 'Task 1', completed: false },
    { description: 'Task 2', completed: false },
    { description: 'Task 3', completed: true },
    { description: 'Task 4', completed: false }
  ];

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get pendingTasks(): number {
    return this.totalTasks - this.completedTasks;
  }
  
  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }
}
