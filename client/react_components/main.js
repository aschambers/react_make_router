var React = require('react')
var ReactDOM = require('react-dom')

// List variable
var List = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
)

// Image variable
var Image = <img src='http://vignette1.wikia.nocookie.net/dragonquest/images/8/8f/DQMJ2_-_Fluffy.png/revision/latest?cb=20160318182008'/>

// Form variable
var Form = (
  <form>
    Name: <input type='text'/>
    <input type='submit' value='Submit'/>
  </form>
)

// use variable links to store List, Image, and Form variables for routing.
var links = {
  home: "",
  list: List,
  image: Image,
  form: Form
}

var App = React.createClass({
    render: function(){
    	// We have access to our current location as a prop! (this.props.route)

        // FIND THE CORRECT LINKS
        // Iterate through our object keys to push the links we want into an array
        var linkArray = []
        for(link in links){
          if (this.props.route !== link) { linkArray.push(link); }
        }

        // Map over the array and wrap each link value with JSX
        linkArray = linkArray.map(function(link){
          return <a key={link} href={"#"+link}>The {link.charAt(0).toUpperCase() + link.slice(1)}</a>
        });

        // Use this.props.route to find the content that should be displayed.
        var content = links[this.props.route];
        return (
          <div>
            <header>
              <h1>Ninja Router</h1>
              {linkArray}
          	</header>
            <div className='content-container'>
              <h2>Your location: {this.props.route}</h2>
              {content}
            </div>
          </div>
        )
    }
})

function routingApp(){
	ReactDOM.render(<App route={location.hash.substr(1)}/>, document.getElementById('app'))
}

// Add a listener to the 'haschange' event, and render our content when that happens
window.addEventListener('hashchange', routingApp);

routingApp();
