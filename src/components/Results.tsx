import { useGameStore } from '../store/useGameStore';
import { Icon } from '../svg';

const Results = () => {
  const { result, playAgain, playerChoice, computerChoice } = useGameStore();

  let resultText = '';
  if (result === 'win') {
    resultText = 'you win';
  } else if (result === 'lose') {
    resultText = 'you lose';
  } else if (result === 'tie') {
    resultText = 'tie';
  }

  return (
    <>
      <>
        <div className='choice player'>
          <div
            className={`btn btn-circle ${playerChoice} ${
              result === 'win' ? 'btn-circle-winner' : ''
            }`}>
            <Icon name={playerChoice || ''} />
          </div>
          <p>
            you picked <span className='sr-only'>playerChoice</span>
          </p>
        </div>
        <div className='choice computer'>
          <div
            className={`btn btn-circle ${
              computerChoice === null ? 'btn-circle-empty' : computerChoice
            } ${result === 'lose' ? 'btn-circle-winner' : ''}`}>
            {computerChoice && <Icon name={computerChoice} />}
          </div>
          <p>
            the house picked <span className='sr-only'>computerChoice</span>
          </p>
        </div>
        {resultText && (
          <section className='results'>
            <h2>{resultText}</h2>
            <button className='btn btn-next' onClick={playAgain}>
              Play Again
            </button>
          </section>
        )}
      </>
    </>
  );
};
export default Results;
