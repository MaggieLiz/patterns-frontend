import Footer from './Footer'

function Home() {
  return (
    <section className="section">
      <div className="columns is-flex-direction-column is-fullheight-100vh"> 
        <header className="column is-narrow is-size-1 has-text-centered">Maggie Makes</header>
        <div className="column"></div>
        <Footer />
      </div>   
    </section>
    
  )
}

export default Home