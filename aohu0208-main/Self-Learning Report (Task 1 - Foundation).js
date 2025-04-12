// Next.js Single File Application
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function StrataApp() {
  // State for current page
  const [currentPage, setCurrentPage] = useState('home')

  // Update page when URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.substring(1) || 'home')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Navigation function
  const navigate = (page) => {
    window.location.hash = page
  }

  // Page content
  const renderPage = () => {
    switch(currentPage) {
      case 'owners':
        return (
          <div style={styles.page}>
            <h2>Owner Portal</h2>
            <div style={styles.card}>
              <p>Building Image:</p>
              <img src="/1.png" alt="Strata Building" style={styles.img} />
            </div>
          </div>
        )
      case 'committee':
        return (
          <div style={styles.page}>
            <h2>Committee Portal</h2>
            <div style={styles.card}>
              <p>Max Committee Members: 9</p>
            </div>
          </div>
        )
      default: // home
        return (
          <div style={styles.page}>
            <h1>Strata Management</h1>
            <div style={styles.card}>
              <p>Welcome to our building management system</p>
            </div>
          </div>
        )
    }
  }

  // Styles
  const styles = {
    nav: {
      backgroundColor: '#003366',
      padding: '10px',
      marginBottom: '20px'
    },
    navButton: {
      color: 'white',
      marginRight: '10px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    page: {
      padding: '20px'
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      marginTop: '10px'
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      marginTop: '10px'
    }
  }

  return (
    <div>
      <Head>
        <title>Strata Management</title>
      </Head>
      
      <nav style={styles.nav}>
        <button onClick={() => navigate('home')} style={styles.navButton}>Home</button>
        <button onClick={() => navigate('owners')} style={styles.navButton}>Owners</button>
        <button onClick={() => navigate('committee')} style={styles.navButton}>Committee</button>
      </nav>

      {renderPage()}
    </div>
  )
}
