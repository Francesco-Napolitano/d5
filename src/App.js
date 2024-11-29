import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNav from './components/MyNav'
import MyMain from './components/MyMain'
import MyFooter from './components/MyFooter'
import MySections from './components/MySections'
import SectionMarvel from './components/SectionMarvel'
import LastSection from './components/LastSection'

const App = () => {
  return (
    <div className="bg-dark">
      <header>
        <MyNav />
      </header>
      <main className="bg-dark">
        <MyMain />
        <MySections />
        <SectionMarvel />
        <LastSection />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
