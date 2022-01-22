
# MrRobogers
#### By William Jameson

#### Interact with Mr. Robogers and it will have something to tell you!

## Technologies Used

* HTML
* JavaScript
* JQuery

## Description

This webpage takes a user inputted number and returns a response from robot Mr. Roger's, subsituting certain numerical elements for the roboRogers responses.  The only way to talk to Mr. Robogers is with numbers!

## Setup/Installation Requirements

* Navigate to the github repository by following the url https://github.com/wcjameson/Mr.Robogers
* You can clone the repository to your machine by following these steps
* In your terminal enter the following
* git clone https://github.com/wcjameson/Mr.Robogers.git
* Open the index.html file in your browser

## Known Bugs

* Mr. Roboger's can only communicate with numbers, so only numerical input is acted upon.

## Test Section

Describe: rangeMaker()

Test: "It should return an array with a 0 if the number 0 is inputted"
* Code: range(0)
*Expected Output: [0]

Test: "It should return array with elements 0 to user input number"
* Code: range(5)
* Expected Output: [0, 1, 2, 3, 4, 5]

Describe: replacer()

Test: "It should return array with modified elements 'beep' instead of 1"
* Code: replacer([0, 1,])
* Expected Output: [0, "beep"]

Test: "It should return array with modified elements, 'beep' instead of 1, 'boop' instead of 2".
* Code: replacer([0, 1, 2])
* Expected Output: [0, "beep", "boop]

Test: "It should return array with modified elements, 'beep' instead of 1, 'boop' instead of 2, 'Won't you be my neighbor' instead of 3."
* Code: replacer([0, 1, 2, 3])
* Expected Output: [0, "beep", "boop, "Won't you be my neighbor"]

Test: "It should return modified elements for elements with double digits containing "1", "2", or "3"
* Code: replacer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
* Expected Output: [0, "beep", "boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "beep", "beep"]


## License

MIT License

Copyright (c) [2022] [William Jameson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
