let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown </Link>
            </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
              Created by <a href="http://rockupuncture.com" target="_blank">Joy Earl</a>
            </li>
        </ul>
      </div>
    </div>
  );
};


module.exports = Nav;
