import React, {Component} from 'react';

class Input extends Component {
    // Initialized State
    constructor(props) {
        super(props);

        this.state = {
            //property
            value: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.convertMin = this.convertMin.bind(this);

    }
    handleChange(e){
        this.setState({value : e.target.value});
    }
    convertMin(e){
        this.setState({value: e.target.value})
    }
    render() {
        const {title} = this.props;
        const {time} = this.state;
        return (
            <div>
                <label>{title}</label>
                <input type="number" value={this.state.value} onChange={this.handleChange}/>
                <p>{this.state.value + ' Seconds, are: '}</p>
                <p>{this.state.value / 60 + ' Min'}</p>
                <p>{this.state.value / 60 / 60 + ' Hour'}</p>
            </div>
        );
    }

    // titles = ['Seconds', 'Minutes', 'Hours'];


}
Input.defaultProps = {
    value: 60,
}
export default Input;