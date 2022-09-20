// Testing Jest

<<<<<<< HEAD
// import { handleSubmit } from "./Register"

// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(handleSubmit()).toBe('peanut butter');
// });

const testFunction = (a, b) => {
    return a * b
}
=======
const testFunction = (a, b) => a * b;
>>>>>>> 6fc0ef375da8c70a37e956f8018cad706b1d01ef

test('Multiplies two arguments', () => {
  expect(testFunction(2, 3)).toBe(6);
});
