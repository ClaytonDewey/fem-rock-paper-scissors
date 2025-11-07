import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define possible choices and game outcome types
export type Choice = 'rock' | 'paper' | 'scissors';
export type GameResult = 'win' | 'lose' | 'tie' | null;

// Define the shape of the store's state
interface GameState {
  playerScore: number;
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: GameResult;
  choices: Choice[];
}

// Define the shape of the store's actions
interface GameActions {
  playRound: (playerChoice: Choice) => void;
  playAgain: () => void;
  resetGame: () => void;
}

// Combine state and actions into a single type for the store
type GameStore = GameState & GameActions;

// Create the Zustand store
export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      playerScore: 0,
      playerChoice: null,
      computerChoice: null,
      result: null,
      choices: ['paper', 'scissors', 'rock'],

      playRound: (playerChoice) => {
        const { choices } = get();

        // Set player choice immediately and reset computer choice and result
        set({
          playerChoice,
          computerChoice: null,
          result: null,
        });

        // Add half-second delay before computer makes their choice
        setTimeout(() => {
          const computerChoice =
            choices[Math.floor(Math.random() * choices.length)];
          let result: GameResult = null;

          // Determine the winner
          if (playerChoice === computerChoice) {
            result = 'tie';
          } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
          ) {
            result = 'win';
          } else {
            result = 'lose';
          }

          // Update the state based on the result
          set((state) => {
            let newPlayerScore = state.playerScore;

            if (result === 'win') {
              newPlayerScore += 1;
            }

            return {
              computerChoice,
              result,
              playerScore: newPlayerScore,
            };
          });
        }, 500);
      },

      playAgain: () => {
        set({
          playerChoice: null,
          computerChoice: null,
          result: null,
        });
      },

      resetGame: () => {
        set({
          playerScore: 0,
          playerChoice: null,
          computerChoice: null,
          result: null,
        });
      },
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
