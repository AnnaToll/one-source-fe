// Testing Jest

// import { handleSubmit } from "./Register"

// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(handleSubmit()).toBe('peanut butter');
// });

const testFunction = (a, b) => {
    return a * b
}

test('Multiplies two arguments', () => {
    expect(testFunction(2, 3)).toBe(6)
})