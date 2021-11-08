import { Link } from 'react-router-dom'

function PatternCard({ pattern }) {
  return (
    <div key={pattern._id} className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/patterns/${pattern._id}`}>
        <div className="card">
          <div className="title">
            {pattern.patternName}
          </div>
          <figure>
            <img src={pattern.patternImage} alt={pattern.patternName} />
          </figure>
          <div className="subtitle">
            {pattern.patternMaker}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PatternCard