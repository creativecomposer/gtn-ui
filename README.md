# Guess the number player service

This service implements a frontend interface for registered players to play the game
"Guess the Number".

## App description

Create two web services using JavaScript/TypeScript tech stack:

The two services will play the game “Guess the Number”.

The first service, the game host, will expose an authenticated REST API, where the other service, the player, can initiate and play the game:

· On initiation, the game host assigns a unique identifier and a random number between 1 and 10000 to the game and returns the identifier to the client service.

· In the subsequent steps, the player service sends the identifier and its guess to the game host service, where it receives a response whether that number is equal, smaller, or larger than the one the game host thought of.

· When the number was successfully guessed, the instance of the game is considered finished. The respective data can eventually be cleaned up.

Only registered players can play the game, so all API endpoints of the game host service have to be protected with some kind of authentication.  
The implementation choices are left open to the developer on purpose. The goal is for you to present your solution during the technical interview. From there, this will be a starting point for further technical discussions, some of the choices you made, why, what other options are possible, the tradeoffs, etc.

The solution should be hosted in Microsoft Azure Cloud using the free subscription and the Azure components of your choice.

A frontend interface should be built for the player to initiate and play the game.
