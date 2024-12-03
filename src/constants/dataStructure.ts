import { DataStructures } from "../types/dataStructure";

export const DATA_STRUCTURES: DataStructures = [
  {
    id: 1,
    title: "배열 (Array)",
    category: "선형 자료구조",
    topics: [
      {
        id: 1,
        title: "배열의 기본 개념",
        content: "연속된 메모리 공간에 순차적으로 저장되는 자료구조",
        code: `const array = [1, 2, 3, 4, 5];
// 배열의 접근: O(1)
console.log(array[0]); // 1
// 배열의 삽입: O(n)
array.splice(2, 0, 6);`,
        timeComplexity: {
          access: "O(1)",
          search: "O(n)",
          insertion: "O(n)",
          deletion: "O(n)",
        },
      },
      {
        id: 2,
        title: "다차원 배열",
        content: "2차원 이상의 배열 구조와 활용",
        code: `const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// 2차원 배열 접근
console.log(matrix[1][1]); // 5`,
      },
    ],
  },
  {
    id: 2,
    title: "연결 리스트 (Linked List)",
    category: "선형 자료구조",
    topics: [
      {
        id: 1,
        title: "단일 연결 리스트",
        content: "각 노드가 다음 노드에 대한 참조를 가지는 자료구조",
        code: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}`,
        timeComplexity: {
          access: "O(n)",
          search: "O(n)",
          insertion: "O(1)",
          deletion: "O(1)",
        },
      },
    ],
  },
  {
    id: 3,
    title: "스택 (Stack)",
    category: "선형 자료구조",
    topics: [
      {
        id: 1,
        title: "스택의 기본 연산",
        content: "LIFO(Last In First Out) 구조의 자료구조",
        code: `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    return this.items.pop();
  }
}`,
        timeComplexity: {
          push: "O(1)",
          pop: "O(1)",
          peek: "O(1)",
        },
      },
    ],
  },
] as const;
