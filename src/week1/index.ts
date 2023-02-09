interface TodoData {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: string[];
}

function createItem(todo: TodoData) {}

export function create(content: string) {}
export function readAll() {}
export function readAt(id: number) {}
export function updateAt(todo: TodoData) {}
export function updateTags(id: number, tags: string[]) {}
export function deleteItemAt(id: number) {}
export function deleteItemAll() {}
export function deleteTagAt(id: number, tag: string) {}
export function deleteTagAll(id: number) {}
