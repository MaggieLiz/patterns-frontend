

import React from 'react'
import { useHistory } from 'react-router-dom'
import { createPattern } from '../../lib/api.js'

import Footer from '../common/Footer'

const initialState = {
  patternMaker: '',
  patternName: '',
  garmentType: '',
  patternImage: '',
}

function PatternNew() {
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await createPattern(formData)
      history.push(`/patterns/${data._id}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }


  return (
    <section className="section">
      <div className="container">
        <div className="columns is-flex-direction-column is-fullheight-100vh">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Pattern Maker</label>
              <div className="control">
                <input
                  placeholder="Pattern Maker"
                  name="patternMaker"
                  onChange={handleChange}
                  value={formData.patternMaker}
                />  
              </div>
            </div>
            <div className="field">
              <label className="label">Pattern Name</label>
              <div className="control">
                <input
                  placeholder="Pattern Name"
                  name="patternName"
                  onChange={handleChange}
                  value={formData.patternName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Garment Type</label>
              <div className="control">
                <input
                  placeholder="top, bottom, dress, etc..."
                  name="garmentType"
                  onChange={handleChange}
                  value={formData.garmentType}
                />  
              </div>
            </div>
            <div className="field">
              <label className="label">Upload Image</label>
              <div className="control">
                <input
                  placeholder="Image URL"
                  name="patternImage"
                  onChange={handleChange}
                  value={formData.patternImage}
                />  
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-light">
                Add Pattern
              </button>  
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
    
  )
}

export default PatternNew 