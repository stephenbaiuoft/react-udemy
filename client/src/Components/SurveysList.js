import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

// this file imports some css library
class SurveysList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        if (this.props.surveys.length === 0) {
            return (
                <div>
                    Rendering Content
                </div>
                );
        }

        return this.props.surveys.reverse().map(
            survey => {
                return (
                    <div className="card darken-1" key={survey.id}>
                        <div className="card-content">
                          <span className="card-title">{survey.title}</span>
                          <p>
                              {survey.body}
                          </p>
                          <p className="right">
                              sent on: {new Date(survey.dateSent).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="card-action">
                          <a>Yes: {survey.yes}</a>
                          <a>Yes And For Sure: {survey.yesforsure}</a>
                        </div>
                    </div>
                )
            }
        );

        // return (
        //     <div>this is place holder man</div>
        // );
    }

    render() {
        return(
            <div>
                {this.renderSurveys()}
            </div>
        ); 
    }

}

function mapStateToProps(state) {
    // auth is the state type

    return {surveys: state.surveys}; // state.surveys due to combineReducer.js -> key
}

export default connect(mapStateToProps, actions)(SurveysList);