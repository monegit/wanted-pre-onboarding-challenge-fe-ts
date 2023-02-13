import {
  create,
  deleteTodo,
  getTodoAll,
  updateTodo,
  updateTodoTags,
} from "./todo";

create({
  todo: { id: "1", content: "aa", category: "a", isDone: false },
});

create({
  todo: { id: "2", content: "aa", category: "a", isDone: false },
});

updateTodo({
  id: "1",
  todo: {
    id: "1",
    content: "b",
    category: "a",
    isDone: false,
    tags: ["abc", "wow"],
  },
});

deleteTodo({ id: "2" });

getTodoAll();
updateTodoTags({ id: "1", tags: ["aaa"] });
