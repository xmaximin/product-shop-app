var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/navbar.jsx');

var navLinks = [
  {
    title: "Home",
    href: "#"
  },
  {
    title: "Courses",
    href: "#"
  },
  {
    title: "Blog",
    href: "#"
  }
];

ReactDOM.render(<NavBar bgColor=""
                        titleColor="white"
                        linkColor="gray"
                        navData={navLinks} />,
                        document.getElementById('nav'));
