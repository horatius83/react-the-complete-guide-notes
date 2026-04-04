import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  const links = [
    { route: '/', title: 'Home'},
    { route: '/events', title: 'Events'}
  ];

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {links.map(link => {
            return (<li>
              <NavLink to={link.route} className={({isActive}) => isActive ? classes.active : undefined} end>
                {link.title}
              </NavLink>
            </li>);
          })}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
