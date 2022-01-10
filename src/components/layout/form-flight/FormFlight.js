import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Datepicker from 'react-datepicker'

import CountriesAction from 'redux/actions/countries/CountriesAction';
import FlightAction from 'redux/actions/flights/FlightsAction';

import "react-datepicker/dist/react-datepicker.css";
import './FormFlight.css'

const FormFlight = () => {

  const [isSetterO, setIsSetterO] = useState(true)
  const [isSetterD, setIsSetterD] = useState(true)
  const [displayO, setDisplayO] = useState(false)
  const [displayD, setDisplayD] = useState(false)

  const [search1, setSearch1] = useState("")
  const [search2, setSearch2] = useState("")
  const [idCodeO, setIdCodeO] = useState("")
  const [idCodeD, setIdCodeD] = useState("")
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries)

  const formik = useFormik({
    initialValues: {
      idOrigin: "",
      origin: "",
      idDestiny: "",
      destiny: "",
      date: Date(),
      persons: 1
    },
    onSubmit: values => {
      dispatch(FlightAction.setFlight(values))
    },
  });

  const handleChange = () => {
    formik.values.idOrigin = idCodeO
    formik.values.idDestiny = idCodeD
    formik.values.origin = search1
    formik.values.destiny = search2
    formik.values.date = startDate
  }

  const loadAirports1 = (text) => {
    setSearch1(text)
    handleChange()
    if(text.length > 2){
      dispatch(CountriesAction.getCountries(text))
      setDisplayO(true)
    }else{
      setDisplayO(false)
    }
  }

  const loadAirports2 = (text) => {
    setSearch2(text)
    handleChange()
    if(text.length > 2){
      dispatch(CountriesAction.getCountries(text))
      setDisplayD(true)
    }else{
      setDisplayD(false)
    }
  }

  const clearAutocomplete1 = (e) => {
    e.target.value = ""
    setSearch1("")
    handleChange()
    setIsSetterO(true)
    setDisplayO(false)
  }

  const clearAutocomplete2 = (e) => {
    e.target.value = ""
    setSearch2("")
    handleChange()
    setIsSetterD(true)
    setDisplayD(false)
  }

  const selectOrigin = (airportTxt, code) => {
    setIsSetterO(false)
    setSearch1(airportTxt)
    setIdCodeO(code)
    handleChange()
    setDisplayO(false)
  }

  const selectDestiny = (airportTxt, code) => {
    setIsSetterD(false)
    setSearch2(airportTxt)
    setIdCodeD(code)
    handleChange()
    setDisplayD(false)
  }

  return (
      <div className="formulario-container">
        <form action="" onSubmit={formik.handleSubmit} className="formulario">
          <div className="cont-input">
            <label className="label-input" htmlFor="origin">Origen</label>
            <input 
              className="input-style"
              id="origin"
              type="text"
              placeholder="Ciudad origen..." 
              onChange={isSetterO ? (event) => loadAirports1(event.target.value) : null} 
              onClick={(event) => clearAutocomplete1(event)}
              value={search1}
              required
            />
            {displayO && (
              <div className="auto-container"> 
                {countries.data.airports != null ? countries.data.airports.map((airport, idx) => {
                  const airportConct = airport.city + " (" + airport.iata + "-" + airport.name + ")"
                  return(
                    <div onClick={() => selectOrigin(airportConct, airport.iata)} className="option" key={idx}>
                      <span>{ airportConct }</span>
                    </div>
                  )
                }) : console.log(countries.data)}
              </div>
            )}
          </div>
          <div className="cont-input">
            <label className="label-input" htmlFor="destiny">Destino</label>
            <input 
              className="input-style"
              id="destiny" 
              type="text" 
              placeholder="Ciudad destino..." 
              onChange={isSetterD ? (event) => loadAirports2(event.target.value) : null} 
              onClick={(event) => clearAutocomplete2(event)}
              value={search2}
              required
            />
            {displayD && (
              <div className="auto-container"> 
                {countries.data.airports != null ? countries.data.airports.map((airport, idx) => {
                  const airportConct = airport.city + "," + airport.state.abbr + "(" + airport.iata + "-" + airport.name + ")"
                  return(
                    <div onClick={() => selectDestiny(airportConct, airport.iata)} className="option" key={idx}>
                      <span>{ airportConct }</span>
                    </div>
                  )
                }) : console.log(countries.data)}
              </div>
            )}
          </div>
          <div className="cont-input">
            <label className="label-input" htmlFor="date">Fecha</label>
            <Datepicker
              className="input-style"
              selected={startDate} 
              onSelect={(date) => {setStartDate(date); handleChange()}}
              required
            />
          </div>
          <div className="cont-input">
            <label className="label-input" htmlFor="persons">Pasajeros</label>
            <input
              className="input-style"
              id="persons" 
              type="number" 
              onChange={formik.handleChange}
              value={formik.values.persons}
              required
            />
          </div>
          <div className="cont-input">
            <button className="btn-form" type="submit">Buscar</button>
          </div>
        </form>
      </div>
  )
}

export default FormFlight
