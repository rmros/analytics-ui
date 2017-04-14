import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

class QueryStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    deleteQuery() {
        this.props.deleteQuery(this.props.index);
    }

    componentDidMount() {

        $('.query-list-item').click(function() {
            console.log('clicked2', $(this).text());
            $(this).parent().siblings().text($(this).text());

        });

    }

    renderAllEventList() {
        if (this.props.allEvents) {
            let allEvents = this.props.allEvents.map((eventName, i) => {
                return (<option value={eventName} key={i}/>);
            });
            return allEvents;
        }
    }

    renderAllQueryList() {
        const allQuery = ['equals', 'does not equal', 'contains', 'does not contain'];
        let allQueryList = allQuery.map((query, i) => {
            return (
                <MenuItem class="query-list-item" key={i} eventKey={i}>{query}</MenuItem>
            );
        });
        return allQueryList;
    }
    renderProperties() {
        const properties = [
            'Browser',
            'IP Adderss',
            'City',
            'Region',
            'Country',
            'Location'
        ]
        return properties.map((property, i) => {
            return (<option value={property} key={i}/>)
        })
    }
    render() {
        const allEventList = this.renderAllEventList();
        const allQueryList = this.renderAllQueryList();
        return (

            <div class="fs-body">
                <div class="fs-selection-row">
                    <input class="form-control fs-select-event" placeholder="Select Property" type="text" list="properties"/>
                    <datalist id="properties">{this.renderProperties()}</datalist>
                    <i class="ion ion-ios-arrow-forward query_right_icon"></i>

                    <ButtonGroup vertical>
                        <DropdownButton title="Select Query" id="query-dropdown">
                            {allQueryList}
                        </DropdownButton>
                    </ButtonGroup>
                    <input class="form-control fs-select-value" placeholder="Select value" type="text" list="eventsName"/>
                    <datalist id="eventsName">
                        {allEventList}
                    </datalist>
                    <i class="ion ion-close-round query_close_icon" onClick={this.deleteQuery.bind(this)}></i>

                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    const {allEvents} = state.events
    return {allEvents: allEvents};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(QueryStep);
