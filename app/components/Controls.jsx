let React = require('react');

let Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

 //3 functions in one. this function returns a function based on what is passed down
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  componentWillReceiveProps: function (newProps) {
    console.log('component will recieve props', newProps.countdownStatus);
  },
  render: function () {
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if(countdownStatus == 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>PAUSE</button>
      } else if (countdownStatus == 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>START</button>
      }
    };

    return (
      <div className="controls">
      {renderStartStopButton()}
      <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>CLEAR</button>
      </div>
    )
  }
});

module.exports = Controls;
