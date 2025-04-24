import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dictionary from './pages/Dictionary'
import LetterPage from './pages/LetterPage'
import TermDetail from './pages/TermDetail'
import SearchResults from './pages/SearchResults'
import AboutPage from './pages/AboutPage'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const PageLayout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
`

const SideBanner = styled.div`
  width: 160px;
  padding: 1rem;
  position: sticky;
  top: 1rem;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1400px) {
    display: none;
  }
`

const LeftBanner = styled(SideBanner)`
  left: 0;
`

const RightBanner = styled(SideBanner)`
  right: 0;
`

const BannerAd = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: var(--accent-color);
  }
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <PageLayout>
          <LeftBanner>
            <BannerAd id="left-banner-1">
              <p>Reklamní banner</p>
              <small>160 x 600</small>
            </BannerAd>
            <BannerAd id="left-banner-2">
              <p>Reklamní banner</p>
              <small>160 x 600</small>
            </BannerAd>
          </LeftBanner>

          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/slovnik" element={<Dictionary />} />
              <Route path="/slovnik/:letter" element={<LetterPage />} />
              <Route path="/slovnik/term/:term" element={<TermDetail />} />
              <Route path="/vyhledavani" element={<SearchResults />} />
              <Route path="/o-projektu" element={<AboutPage />} />
            </Routes>
          </MainContent>

          <RightBanner>
            <BannerAd id="right-banner-1">
              <p>Reklamní banner</p>
              <small>160 x 600</small>
            </BannerAd>
            <BannerAd id="right-banner-2">
              <p>Reklamní banner</p>
              <small>160 x 600</small>
            </BannerAd>
          </RightBanner>
        </PageLayout>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App
