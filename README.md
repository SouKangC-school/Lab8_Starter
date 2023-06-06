# Lab 8 - Starter

## 1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

I would choose "winthin a Github action that runs whenver code is pushed" because it follows the principle of automation and continuous integration. In particular, it ensures any code changes do not inadvertently introduce bugs.

## 2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, it is more suitable to use a unit testing for this case

## 3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because unit tests are not designed to test how various functions interact with each other, or with other parts of the system. An E2E test is a better fit for this scenario.

## 4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because unit test is designed to test a small, isolated piece of code. Features like max message fit into such category. 
