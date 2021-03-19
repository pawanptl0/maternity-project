import { tips } from "../js/tips"
import Card from "./card"

const Tips = () => {
  return (
    <div className="container-fluid">
      <div className="card-columns mt-5">
        {
          tips.map(tip => (
            <Card key={tip.id} info={tip} />
          ))
        }
      </div>
    </div>
  )
}

export default Tips
