@IntroGame
Feature: Intro Game  
  
Scenario: Features 5 paylines and 11 paylines.
      Given that is on the game's home screen
      When I click 'play'
      Then check if awards are made
      And  valid if the cylinders have been alternated

Scenario: A game round is started with the action button and plays the game with the selected bet level.
      Given that I am on the home screen of Toki Time
      When I select the 'bet'
      And I select the action 'button' that executes the move
      Then I will have a round started with the bet amount at "$100.00"
      And this value will be 'subtracted' after making a move

Scenario: Auto play plays the game automatically for the number of game rounds selected in the auto play page
      Given that I have selected number of 'rounds'
      When select 'number' of times of automatic spins
      And return to game screen the feature must display the amount of 'times' selected
      Then when starting a round, you must execute the selected 'number' of times
      And at the end of the selected number of rounds, the game waits for a 'new move'

Scenario: All game payout and win combinations are paid out according to the pay table.
      Given that I make a move containing the 'payment'
      When I select the 'play button'
      And a combination is formed
      Then the gain will be displayed according to the paytable
      And I should see the amount paid by

Scenario: All pay line wins during a game round are added and presented at the end of the game round
      Given that is on the game's home screen
      When I make a move by clicking the 'play button'
      And an award will be made showing the 'payline'
      Then the values ​​gained in the lines will be 'summed'
      And the sum of the amounts won will be credited to my 'total balance'

Scenario: All wins are presented and paid out in the selected currency.
      Given that I select the currency value I want
      When I make a move
      And when finishing a move
      Then the amount will be paid times the amount of the 'bet' amount
      And the amount earned must be added to my 'current balance'

Scenario: Only the highest win per pay line is paid out, if in sequence from far left to right or far right to left in combinations according to the pay table.
      Given that I perform a play with prizes in lines
      When Highest 'paylines' per payline
      And which is in the sequence from left to right
      And that the sequence is also from right to left
      Then a combination is made according to the paytable
      And payment is made

Scenario: The intro shows the Toki Time logo and features.
      Given that is on the 'game screen'
      When when I click on 'client area'
      Then the page will redirect to the 'login screen'
      
Scenario: The main game is started when the intro is finished playing or when skipped
      Given Since you make a move
      When finish the 'intro' of the match 
      And after being ignored 
      Then the main game will 'start'
      And I make a 'new move'

Scenario: The expanded wild is a wild symbol that substitutes for all symbols.
      Given That I make a move and Wild 'appears expanded'
      When the expanded wild 'animation appears'
      And have more 'paylines' both from left to right
      Then a payline win will be held 
      And as long as there is a payline win to form line prizes

Scenario: No bets can be altered during a game round.
      Given who has already made a move
      When during character round
      And during the award of the winnings
      Then bet must not be changed during the game round
