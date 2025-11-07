import {
  IconClose,
  IconLizard,
  IconLogo,
  IconLogoBonus,
  IconPaper,
  IconPentagon,
  IconRestart,
  IconRock,
  IconRules,
  IconRulesBonus,
  IconScissors,
  IconSpock,
  IconTriangle,
} from './index';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'close':
      return <IconClose />;
    case 'lizard':
      return <IconLizard />;
    case 'logo':
      return <IconLogo />;
    case 'logo-bonus':
      return <IconLogoBonus />;
    case 'paper':
      return <IconPaper />;
    case 'pentagon':
      return <IconPentagon />;
    case 'restart':
      return <IconRestart />;
    case 'rock':
      return <IconRock />;
    case 'rules':
      return <IconRules />;
    case 'rules-bonus':
      return <IconRulesBonus />;
    case 'scissors':
      return <IconScissors />;
    case 'spock':
      return <IconSpock />;
    case 'triangle':
      return <IconTriangle />;
    default:
      return <IconLogo />;
  }
};
export default Icon;
