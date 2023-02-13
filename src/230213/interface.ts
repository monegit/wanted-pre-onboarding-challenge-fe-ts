/**
 *
 * @typedef {object} TodoApplication
 * @description todo의 객체
 * @property {string} id — 유저 ID
 * @property {string} content - 할일
 * @property {boolean} isDone - 성공여부
 * @property {string} category — 카테고리
 * @property {string[]} tags — 태그
 */

interface TodoTypes {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

interface TodoApplication {
  createTodo(todo: TodoTypes): void;
  getTodo(id: string): void;
  getTodoAll(): void;
  updateTodo(id: string, todo: TodoTypes): void;
  deleteTodo(id: string): void;
  updateTodoTags(id: string, tags?: string[]): void;
}

interface TodoItemData {
  // key-value 설정으로 빠른 검색
  [key: string]: TodoTypes;
}

let todoList: TodoItemData = {};

class Todo implements TodoApplication {
  createTodo(todo: TodoTypes): void {
    todoList[todo.id] = todo;
  }
  getTodo(id: string): void {
    console.log(todoList[id]);
  }
  getTodoAll(): void {
    console.log(todoList);
  }
  updateTodo(id: string, todo: TodoTypes): void {
    todoList[todo.id] = todo;
  }
  deleteTodo(id: string): void {
    delete todoList[id];
  }
  updateTodoTags(id: string, tags?: string[] | undefined): void {
    todoList[id]["tags"] = tags;
  }
}

const a = new Todo();

a.createTodo({ id: "1", content: "aa", category: "a", isDone: false });
a.createTodo({ id: "2", content: "aa", category: "a", isDone: false });
a.updateTodo("1", {
  id: "1",
  content: "aaaaaaa",
  category: "a",
  isDone: false,
});
a.deleteTodo("2");
a.updateTodoTags("1", ["aba"]);
a.getTodoAll();
