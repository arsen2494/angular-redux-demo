import {Component} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store';
import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select('todos') todos;
  @select('lastUpdate') lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(input: HTMLInputElement): void {
    this.ngRedux.dispatch({type: ADD_TODO, todo: input.value});
    input.value = null;
  }

  clearTodos(): void {
    this.ngRedux.dispatch({type: CLEAR_TODOS});
  }

  removeTodo(index: number): void {
    this.ngRedux.dispatch({type: REMOVE_TODO, index: index});
  }
}
