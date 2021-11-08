
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { getSinglePattern } from '../../lib/api.js'

import Footer from '../common/Footer'
import DisplayComments from './DisplayComments'
import PatternCard from './PatternCard'

function PatternShow() {
  const { patternID } = useParams()
  const history = useHistory()
  const [pattern, setPattern] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !pattern

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSinglePattern(patternID)
        setPattern(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [patternID])

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/patterns/${patternID}/comments`)
  }
  
  return (
    <section className="section">
      <div className="container">
        <form className="form" onClick={handleSubmit}>
          <button className="button">
            Add Maker Notes
          </button>
        </form>
      </div>
        
      {isError && <p>Sorry, something went wrong.</p>}
      {isLoading && <p>Retrieving your pattern</p>}
      {pattern &&
          <div className="container">
            <div className="columns">
              <PatternCard pattern={pattern} className="column" />
              <DisplayComments pattern={pattern} className="column" />
            </div>
          </div>
      }
      <Footer />
    </section>
  )

}

export default PatternShow