import React from 'react'

import CardFlight from '../card-flight/CardFlight'
import { GetStringDate } from 'utils/shared/DateShared'

import Ubication from 'assets/icons/ubication.png'
import Date from 'assets/icons/date.png'
import './ListFlights.css'

const ListFlights = (props) => {

    return (
        <div className="list-flights">
            <div className="header-list">
                <div className="ubication-info">
                    <img src={Ubication} alt=""/>
                    <h2 className="title-flight">{props.flight.origin}</h2>
                </div>
                <div className="ubication-info">
                    <img src={Ubication} alt=""/>
                    <h2 className="title-flight">{props.flight.destiny}</h2>
                </div>
                <div className="ubication-info">
                    <img src={Date} alt=""/>
                    <h2 className="subtitle-flight">{GetStringDate(props.flight.date)}</h2>
                </div>
            </div>
            <div className="list-items">
                {props.items.scheduleFligths.map((itemFlight, idx) => (
                    <CardFlight data={props.flight} item={itemFlight} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default ListFlights
