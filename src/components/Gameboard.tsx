import { Button, Results } from '.';
import { useGameStore } from '../store/useGameStore';
import type { Choice } from '../store/useGameStore';
import { Icon } from '../svg';

const Gameboard = () => {
  const { choices, playRound, playerChoice } = useGameStore();

  const handlePlay = (choice: Choice) => {
    playRound(choice);
  };

  return (
    <>
      <div className={`gameboard  ${playerChoice ? 'gameboard-played' : ''}`}>
        {!playerChoice ? (
          <>
            {choices.map((choice) => (
              <Button
                key={choice}
                variant='circle'
                icon={choice}
                onClick={() => handlePlay(choice)}>
                <Icon name={choice} />
                <div className='sr-only'>{choice}</div>
              </Button>
            ))}
            <div className='background'>
              <Icon name='triangle' />
            </div>
          </>
        ) : (
          <>
            <Results />
          </>
        )}
      </div>
    </>
  );
};
export default Gameboard;
