/*
This component is the map view. It shows the user the possible routes he/she can take to arrive at the destination
*/

var React = require('react');

var MapView = React.createClass({
  // adds access to the router context. the getCurrentParams method can then be used to get the properties from the route
  contextTypes: {
    router: React.PropTypes.func
  },

  render () {
    var {origin, destination} = this.context.router.getCurrentParams();

    return (
      <div>
        Welcome to the MapView: You requested to go from {origin} to {destination}!
      </div>
    )
  }
})

module.exports = MapView;