var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');
var resultscontainer = require('../containers/ResultsContainer');  //a redundancy
var resultscontainerstyles = require('../styles/${style-template-react-component}');



var ResultsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount: function () {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function (scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            }.bind(this));
         x = this.getDOMNode();

    },
    render: function () {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        )
    }
});

module.exports = ResultsContainer;