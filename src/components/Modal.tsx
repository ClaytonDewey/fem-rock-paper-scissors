import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Icon } from '../svg';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'>
        <div className='modal-header'>
          {title && <h2>{title}</h2>}
          <button
            type='button'
            className='btn btn-modal-close'
            onClick={onClose}
            aria-label='Close'>
            <Icon name='close' />
          </button>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
