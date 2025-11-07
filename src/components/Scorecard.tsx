import { useGameStore } from '../store/useGameStore';

const Scorecard = () => {
  const { playerScore } = useGameStore();
  return (
    <div className='scorecard'>
      score<span>{playerScore}</span>
    </div>
  );
};
export default Scorecard;
