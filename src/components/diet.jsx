import { dietData, dietPara, dietPlan } from './../js/diet'
import Card from './card'
import HeaderCard from './headerCard'
import SubHeader from './subHeader'

const Diet = () => {
  return (
    <div className="container-fluid">

      <HeaderCard headerData={dietPara} />


      <div>
        <SubHeader subTitle="Diet Plan" />
      </div>

      <div className="card-columns">
        {
          dietPlan.map(plan => (
            <Card key={plan.id} info={plan} />
          ))
        }
      </div>

      <div>
        <SubHeader subTitle="Key Vitamins and Minerals" />
      </div>

      <div className="table-responsive mt-2">
        <table className="table table-striped  table-borderless bg-yellow">
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Benefits</th>
              <th>Best Sources</th>
            </tr>
          </thead>
          <tbody>
            {
              dietData.map(diet => (
                <tr key={diet.id}>
                  <td>{diet.nutrient}</td>
                  <td>{diet.benefits}</td>
                  <td>{diet.sources}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Diet
