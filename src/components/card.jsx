const Card = ({ info }) => {
  return (
    <div className="card shadow bg-yellow">
      <div className="card-body">
        <h5 className="card-title text-center">{info.title}</h5>
        <p className="card-text">{info.text}</p>
      </div>
    </div>
  )
}

export default Card
