import { commonProblems } from './../js/commonProblems';
import Card from './card';

const CommonProblems = () => {
  return (
    <div className="container-fluid">
      <div className="card-columns mt-5">
        {
          commonProblems.map(problem => (
            <Card key={problem.id} info={problem} />
          ))
        }
      </div>
    </div>
  )
}

export default CommonProblems
