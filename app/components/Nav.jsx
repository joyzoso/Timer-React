let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
            <li className="menu-text">
              We're heading for Venus
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer </IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown </Link>
            </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
              The Final   <a href="http://rockupuncture.com" target="_blank">Countdown</a>
            </li>
        </ul>
      </div>
    </div>
  );
};


module.exports = Nav;
