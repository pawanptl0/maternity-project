
import { exercise, exeBenefits, asanas } from './../js/exercise';
import Card from './card';
import HeaderCard from './headerCard';
import SubHeader from './subHeader';

const Exercise = () => {
  return (
    <div className="container-fluid">

      <HeaderCard headerData={exeBenefits} />

      <SubHeader subTitle="Exercise" />

      <div className="card-columns">
        {
          exercise.map(exe => (
            <Card key={exe.id} info={exe} />
          ))
        }
      </div>

      <SubHeader subTitle="Yoga Asanas" />

      <div className="card-columns">
        {
          asanas.map((item, index) => (
            <div key={index} className="card bg-yellow">
              <div className="card-body">
                <h6 className="card-title text-center">{item}</h6>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Exercise

