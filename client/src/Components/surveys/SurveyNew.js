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
                    <SurveyFormReview 
                    // onCancel --> callback prop and note 这里 SurveyFormReview is a function component!!
                        onCancel = {() => {this.setState({showFormReview: false})}}
                    />
                </div>
            );
        }
        // default case --> SurveyForm
        return (<SurveyForm
            // onSurveySubmit is a callback prop!!!! important, which is defined by {} ==> an JS object
            //, and passed to SurveyForm class, which would call onSurveySubmit()!!!!!
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