# ChessBot 
ChessBot is a Discord bot project that lets you play chess, developed with Node js, discord.js, PostgreSQL.

[Here](https://www.chess.com/terms/chess-notation) you can check the rules of chess notation to be sure bot can understand you.

## Commands overview

# /play second_player fen 
/play is a main command that starts the game  
second_player is required option you should use to choose second player  
fen is option you can use to start game with non standart position  

# move your_move
/move is a second main command that makes a move  
your_move is required option you should use to make a move  

# giveup
/giveup command just ends the game if you think you gonna lose

# daily and puzzle
/daily and /puzzle are both commands to get a puzzle  
/daily command sends request to lichess.org/api and renders a daily puzzle  
/puzzle command uses an [Api](https://rapidapi.com/KeeghanM/api/chess-puzzles/details) to get a random puzzle from lichess.org database

