
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { addComment } from '../../lib/api.js'

function CommentsForm() {
  const { patternID } = useParams()
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    wearer: '',
    fabric: '',
    fabricType: '',
    size: '',
    mods: '',
  })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await addComment(patternID, formData)
      history.push(`/patterns/${data._id}`)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <section className="section">
      <div className="columns">
        <div className="column is-full box">
          <form onSubmit={handleSubmit}>
            <h1 className="title has-text-centered">Pattern Notes</h1>
            <div className="field">
              <label className="label">Who was it for?</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="wearer"
                    value="maggie"
                    onChange={handleChange}
                    checked={formData.wearer === 'maggie'}
                  />
                  Maggie
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="wearer"
                    value="delilah"
                    onChange={handleChange}
                    checked={formData.wearer === 'delilah'}
                  />
                    Delilah
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="wearer"
                    value="chloe"
                    onChange={handleChange}
                    checked={formData.wearer === 'chloe'}
                  />
                    Chloe
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="wearer"
                    value="joe"
                    onChange={handleChange}
                    checked={formData.wearer === 'joe'}
                  />
                    Joe
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="wearer"
                    value="other"
                    onChange={handleChange}
                    checked={formData.wearer === 'other'}
                  />
                    Other
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">Knit or Woven?</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="fabric"
                    value="knit"
                    onChange={handleChange}
                    checked={formData.fabric === 'knit'}
                  />
                  Knit
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="fabric"
                    value="woven"
                    onChange={handleChange}
                    checked={formData.fabric === 'woven'}
                  />
                  Woven
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">Fabric Substrate</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="fabricType"
                  placeholder="ex. linen/viscose blend"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Size Made</label>
              <div className="control">
                <input
                  className="input"
                  name="size"
                  type="number"
                  placeholder="size"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Modifications/Hacks</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="mods"
                  placeholder="mods/hacks and any details to know for next time"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <button className="button is-fullwidth is-dark" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CommentsForm