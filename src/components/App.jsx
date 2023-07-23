import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage';
import EventsPage from '../pages/EventsPage';
import EventSubPage from './EventSubPage/EventSubPage';
import EventSearchPage from '../pages/EventSearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=':id' element={<EventSubPage/>} />
        </Route>
        <Route path='search' element={<EventSearchPage/>}></Route>
      </Route>
    </Routes>
  );
};

// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
