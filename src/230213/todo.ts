/**
 * sujeong-dev - https://github.com/sujeong-dev/wanted-pre-onboarding-challenge-fe-2/blob/main/src/index.ts
 */

/**
 *
 * @typedef {object} todoitem
 * @description todo의 객체
 * @property {string} id — 유저 ID
 * @property {string} content - 할일
 * @property {boolean} isDone - 성공여부
 * @property {string} category — 카테고리
 * @property {string[]} tags — 태그
 */

interface todoitem {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags?: string[];
}

interface createTodo {
  todo: todoitem;
}

interface getTodo {
  id: string;
}

interface updateTodo {
  id: string;
  todo: todoitem;
}

interface deleteTodo {
  id: string;
}

interface deleteTodoTags {
  id: string;
  tags?: string[];
}

////////////////////

interface TodoItemData {
  // key-value 설정으로 빠른 검색
  [key: string]: todoitem;
}

let todoList: TodoItemData = {};

export function create(todo: createTodo) {
  // key는 id, value는 todo의 내용
  todoList[todo.todo.id] = todo.todo;
}

export function getTodo(id: getTodo) {
  console.log(todoList[id.id]);
}

export function getTodoAll() {
  console.log(todoList);
}

export function updateTodo(todo: updateTodo) {
  todoList[todo.id] = todo.todo;
}

export function deleteTodo(id: deleteTodo) {
  delete todoList[id.id];
}

export function updateTodoTags(tags: deleteTodoTags) {
  todoList[tags.id]["tags"] = tags.tags;
}
