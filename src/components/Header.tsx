import { Icon } from '../svg';
import { Scorecard } from '.';

const Header = () => {
  return (
    <header className='header'>
      <Icon name='logo' />
      <Scorecard />
    </header>
  );
};
export default Header;
