import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Landing from './Landing'
import Login from './Login'
import HomePage from './components/HomePage'
import Sidebar from './components/Sidebar'
import Explore from './components/Explore'
import PlanYourTrip from './components/PlanYourTrip'
import SavedPlaces from './components/SavedPlaces'
import CulturalInsights from './components/CulturalInsights'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <div className="flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <HomePage />
            </main>
          </div>
        } />
        <Route path="/explore" element={
          <div className="flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <Explore />
            </main>
          </div>
        } />
        <Route path="/plan" element={
          <div className="flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <PlanYourTrip />
            </main>
          </div>
        } />
        <Route path="/saved" element={
          <div className="flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <SavedPlaces />
            </main>
          </div>
        } />
        <Route path="/insights" element={
          <div className="flex">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <CulturalInsights />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
