const ListNode = function (val, next) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));

console.log(list1);