import { useSelector } from 'react-redux';

import Data from 'data/Data'

import FormFlight from 'components/layout/form-flight/FormFlight'
import ListFlights from 'components/layout/list-flights/ListFlights'
import CarouselBanner from 'components/layout/carousel-banner/CarouselBanner';

import './HomePage.css'

const HomePage = () => {

    const flight = useSelector((state) => state.flight);

    const listFlights = () => {
      const item = flight.data
      if(item != null){
        return(
          <ListFlights flight={item} items={Data} />
        )
      }else{
        return(
          <div className="message-unselected">
            <h2>Busca vuelos disponibles...</h2>
          </div>
        )
      }
    }

    return (
        <div className="home-page">
            <CarouselBanner />
            <FormFlight />
            { listFlights() }
        </div>
    )
}

export default HomePage
