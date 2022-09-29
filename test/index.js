const arr = [{ id: 123 }, { id: 1234 }];
const id = 1234;
const index = arr.findIndex((item) => {
  item.id === id;
});
arr.splice(index, 1);
console.log(`arr`,arr)
arr = arr.filter
