interface TodoData {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: string[];
}

/**
 * 아이템의 원형
 * @param todo
 */
function createItem(todo: TodoData) {}

/**
 * 할 일을 추가합니다.
 * @param {string} content 내용
 */
export function create(content: string) {}

/**
 * 할 일을 모두 삭제합니다.
 */
export function readAll() {}

/**
 * id를 기반으로 특정 할 일을 조회합니다.
 * @param {number} id 읽어올 할 일의 id
 */
export function readAt(id: number) {}

/**
 * id를 기반으로 할 일을 수정합니다.
 * @param {string} content 내용
 * @param {boolean} isCompleted 완료여부
 * @param {string} category 카테고리
 * @param {string[]} tags 태그들
 */
export function updateAt(
  content: string,
  isCompleted: boolean,
  category: string,
  tags?: string[]
) {}

/**
 * id를 기반으로 할 일의 태그들을 수정합니다.
 * @param {number} id 할 일을 읽기 위한 id
 * @param {string[]} tags 수정할 태그들
 */
export function updateTagsAt(id: number, tags: string[]) {}

/**
 * id를 기반으로 할 일을 삭제합니다.
 * @param {number} id 삭제할 할 일의 id
 */
export function deleteItemAt(id: number) {}

/**
 * 할 일을 모두 삭제합니다.
 */
export function deleteItemAll() {}

/**
 * 할 일의 태그를 제거합니다.
 * @param {number} id 할 일의 id
 * @param {string} tag 삭제할 태그의 내용
 */
export function deleteTagAt(id: number, tag: string) {}

/**
 * id를 기반으로 조회된 할 일의 태그를 모두 제거합니다.
 * @param {number} id 할 일의 id
 */
export function deleteTagAll(id: number) {}
