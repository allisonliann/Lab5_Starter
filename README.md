# Lab 5 - Starter

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
**Name:** Allison Lian

## GitHub Pages

- [expose.html](https://allisonliann.github.io/Lab5_Starter/expose.html)
- [explore.html](https://allisonliann.github.io/Lab5_Starter/explore.html)

Check Your Understanding

Question 1: No, because a unit test tests individual functions by themselves isolated. The "message" feature involves multiple components that work together like a user interface, database, network communication, and other user's client receiving the message. This entire system is better tested with end-to-end tests, not unit tests, because a single isolated unit test cannot cover the whole flow.

Question 2: Yes, because the "max message length" feature is a single, isolated, self-contained rule as it is a function that takes as input a string and returns whether it is more than 80 characters. This has no external dependencies, database, or network calls, so you can create a test function like isValidLength(message) to test the feature by itself.
