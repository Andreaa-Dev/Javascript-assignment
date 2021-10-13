// Your code here
const numberFunc = async () => {
  for (let i = 0; i < 10; i++) {}
  await later(1);
  console.log(i);
};
// create a fake promise
function later(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

numberFunc();
