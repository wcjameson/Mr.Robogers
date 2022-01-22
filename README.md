

## Test Section

Describe: rangeMaker()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: range(0)
Expected Output: [0]

Test: "It should return array with elements 0 to user input number"
Code: range(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: replacer()

Test: "It should return array with modified elements 'beep' instead of 1"
Code: replacer([0, 1,])
Expected Output: [0, "beep"]

Test: "It should return array with modified elements, 'beep' instead of 1, 'boop' instead of 2".
Code: replacer([0, 1, 2])
Expected Output: [0, "beep", "boop]

Test: "It should return array with modified elements, 'beep' instead of 1, 'boop' instead of 2, 'Won't you be my neighbor' instead of 3."
Code: replacer([0, 1, 2, 3])
Expected Output: [0, "beep", "boop, "Won't you be my neighbor"]

Test: "It should return modified elements for elements with double digits containing "1", "2", or "3"
Code: replacer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
Expected Output: [0, "beep", "boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "beep", "beep"]