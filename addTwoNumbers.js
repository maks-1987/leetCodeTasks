const man = {
  age: 36,
  weight: 69,
  name: "Mister",
};
man.next = "next";
console.log(man);

for (const i in man) {
  console.log(i);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const listNodeAdd = new ListNode(0);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// https://leetcode.com/problems/add-two-numbers/description/
// Ввод: l1 = [2,4,3], l2 = [5,6,4]
// Вывод: [7,0,8]
// Объяснение: 342 + 465 = 807

const l1 = new ListNode(2); // Создаем первый список: 2 -> 4 -> 3
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l1 = new ListNode(5); // Создаем второй список: 5 -> 6 -> 4
l1.next = new ListNode(6);
l1.next.next = new ListNode(4);

addTwoNumbers(l1, l2);
