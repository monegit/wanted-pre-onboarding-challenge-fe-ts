## 챌린지 과제 가이드

>타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에서 원하는 Interface 코드를 가져다 사용하세요
- 설계 & 모델링 된 Interface를 실제로 구현하는 챌린지 과제입니다.
- 모든 요구사항은 설계 & 모델링을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
  - 이미 1차~2차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.
- 완성한 과제의 저장소 링크를 **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에 제출해주세요.
- README.md를 꼭 작성해 주세요.
  - 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 필수 요구사항

>타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- 설계 & 모델링된 TypeScript's Interface를 따라 내부 구현부를 모두 작성한다.
- 동작되지 않더라도 설계 & 모델링을 지키는 것이 원칙이다.
  - 절대로 동작과 구현을 위해 설계 & 모델링 규칙을 어기지 않습니다.
- README.md 혹은 별도의 문서에 어떤 부분의 타입을 고치면 좋은지 피드백과 출처 링크를 남깁니다.

---
## 📝 Review

### 🫣 이리 굴리고 저리 굴려도 어떻게 구현해야 할지 몰라서 조금 수정을 했어요...
```ts
interface createTodo {
  (todo: todoitem): void;
}

interface getTodo {
  (id: string): todoitem;
}

interface updateTodo {
  (todo: todoitem): void;
}

interface deleteTodo {
  (id: string): void;
}

interface deleteTodoTags {
  (id: string, tags?: string[]): void;
}
```

```ts
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
```

> 제가 프론트엔드에 입문한지 얼마 되지 않아서 조금 공부 해보니 제가 이해를 잘못 한거였어요...
>
> 아마 의도하신게 [interface](https://github.com/monegit/wanted-pre-onboarding-challenge-fe-study/blob/main/src/230213/interface.ts) 가 아닐까 싶어요

### 💡 update 할때는 id가 필요해 보여요!
```ts
interface updateTodo {
  todo: todoitem;
}
```
김 대리가 "방금 제출한 서류 수정해서 다시 제출해!" 하면 당사자는 답답하고 난감해요!

```ts
interface updateTodo {
  id: string,
  todo: todoitem;
}
```
그래서 저희같은 MZ세대 눈높이에 맞춰서 `어디를 수정해줘야 할지` 알려주면 행복할거 같아요!

### 💡 이름을 잘못 작성하신거 같아요!
```ts
interface deleteTodoTags {
  id: string;
  tags?: string[];
}
```

만약 **deleteTodoTags**가 `tags`를 모두 지우는거 였다면, tags는 받을 필요가 없어요! `tags` 중 하나만 제거하는거라면 배열로 받을 필요도 없고, tag의 내용만 받아서 해당 내용만 배열에서 제거해주면 될거 같아요.

그래서.. 제 생각을 조금 가미하자면 delete 보다는 **update**가 더 맞는 표현이라고 생각해요!