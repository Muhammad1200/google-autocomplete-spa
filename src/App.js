import React, {useEffect, useState} from 'react';
import './App.css';
import Data from './Constants/data';
import {Col, Row} from 'antd';
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/SearchHistory";
import {useDispatch} from "react-redux";
import {setPlaces} from "./redux/Places/Reducer";

function App() {

  const dispatch = useDispatch();
  const [currentLocation , setCurrentLocation] = useState([]);

  useEffect(() => {
    dispatch(setPlaces(Data));
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col span={6}>
          <div className={"searchAndHistoryCard"}>
            <SearchBar setCurrentLocation={setCurrentLocation} />
            <br/>
            <h2>Recent Searches</h2>
            <div className={"recentSearches"}>
              <SearchHistory setCurrentLocation={setCurrentLocation}/>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Map places={currentLocation} />
        </Col>
      </Row>
    </>
  );
}

export default App;
