import MyRecipesLogo from '../../img/my-recipes-logo.png';
import './Logo.scss';

export function Logo() {
  return (
    <a
      className='logo'
      href='#'
    >
      <img
        className='logo__image'
        src={MyRecipesLogo}
        alt="My recipes"
      />
    </a>
  )
};
