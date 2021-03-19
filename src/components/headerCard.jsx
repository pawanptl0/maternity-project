const HeaderCard = ({ headerData }) => {
  return (
    <div className="card mt-5 bg-yellow">
      <div className="card-body">
        <p className="card-text">
          {headerData}
        </p>
      </div>
    </div>
  )
}

export default HeaderCard
