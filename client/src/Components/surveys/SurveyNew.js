import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from '../SurveyFormReview';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.state = {showFormReview: false};
    }   

    // equivalent as above
    /// state = { showFormReview: false};

    renderContent() {
        // this.state.showFormReview!!!! importanntttt!!
        if (this.state.showFormReview) {
            return (
                <div>
                    <SurveyFormReview />
                </div>
            );
        }
        // default case --> SurveyForm
        return (<SurveyForm

             onSurveySubmit={() => {this.setState({ showFormReview: true })}}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );

    }
}


export default SurveyNew; 