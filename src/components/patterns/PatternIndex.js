import React from 'react'
import { useHistory } from 'react-router-dom'

import PatternCard from './PatternCard'
import Footer from '../common/Footer'
import { getAllPatterns } from '../../lib/api.js'

function PatternIndex() {
  const [patterns, setPatterns] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !patterns && !isError
  const history = useHistory()
  const onlyPatternMakers = []
  const [formData, setFormData] = React.useState({
    patternMaker: '',
    patternName: '',
    garmentType: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPatterns()
        setPatterns(response.data)
        const patternMakerList = () => {
          return patterns.map(pattern => {
            onlyPatternMakers.push(pattern.patternMaker)
          })
        }
        patternMakerList()
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const handleSearch = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData({ ...formData, [event.target.name]: value })
  }

  console.log(formData)

  const handleAddPattern = (e) => {
    e.preventDefault()
    history.push('/patterns/new')
  }

  return (
    <section className="section">
      <div className="container">
        <div className="field">
          <label className="label">Search by: </label>
          <div className="search control">
            <input 
              type="search"
              placeholder="Pattern Name"
              name="patternName"
              onChange={handleSearch}
              value={formData.patternName}
            />
          </div>
          <div className="select">
            <select
              name="patternMaker"
              onChange={handleSearch}
              value={formData.patternMaker}
            >
              <option value="" disabled>Pattern Maker</option>
              {patterns && patterns.map((pattern) => {
                return <option key={pattern._id} value={pattern.patternMaker}>{pattern.patternMaker}</option>
              })}
            </select>  
          </div>
          <div className="select">
            <select 
              name="garmentType"
              onChange={handleSearch}
              value={formData.garmentType}
            >
              <option value="" disabled>Garment Type</option>
              {patterns && patterns.map(pattern => {
                return <option key={pattern._id} value={pattern.garmentType}>{pattern.garmentType}</option>
              })}
            </select>  
          </div>
        </div>
      </div>
    
      <div className="field">
        <form onClick={handleAddPattern}>
          <button className="button is-fullwidth is-dark" type="submit">
            Add New Pattern
          </button>
        </form>
      </div>
      <div className="container">
        <div className="columns is-multiline">
          {isError && <p>Sorry, something went wrong.</p>}
          {isLoading && <p>Retrieving patterns.</p>}
          {patterns && patterns.map(pattern => (      
            <PatternCard key={pattern._id} pattern={pattern} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default PatternIndex