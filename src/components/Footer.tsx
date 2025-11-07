import { useState } from 'react';
import { Modal } from '.';
import { Icon } from '../svg';
import { useGameStore } from '../store/useGameStore';

const Footer = () => {
  const { resetGame, playerScore } = useGameStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <footer className='footer'>
        <div className='btn-container'>
          <button
            disabled={playerScore === 0}
            type='button'
            className='btn btn-restart'
            onClick={resetGame}
            aria-label='Restart Game'>
            <Icon name='restart' />
          </button>
          <button type='button' className='btn btn-rules' onClick={openModal}>
            Rules
          </button>
        </div>
        <div className='attribution'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href='https://www.claytondewey.com/'
            target='_blank'
            rel='noreferrer'>
            Clayton Dewey
          </a>
          .
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={closeModal} title='Rules'>
        <Icon name='rules' />
        <div className='sr-only'>
          Scissors beats Paper - Paper beats Rock - Rock beats Scissors.
        </div>
        <button
          className='btn btn-close'
          onClick={closeModal}
          aria-label='Close'>
          <Icon name='close' />
        </button>
      </Modal>
    </>
  );
};
export default Footer;
