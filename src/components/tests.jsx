import React from 'react'
import { tests, visits } from './../js/tests';
import Card from './card';
import SubHeader from './subHeader';

const Tests = () => {
  return (
    <div className="container-fluid">

      <SubHeader subTitle="7 Important Pregnancy Tests For Third Trimester Weeks" />

      <div className="card-columns">
        {
          tests.map(plan => (
            <Card key={plan.id} info={plan} />
          ))
        }
      </div>

      <SubHeader subTitle="When to Visit Clinic" />

      <div className="card-columns">
        {
          visits.map(plan => (
            <Card key={plan.id} info={plan} />
          ))
        }
      </div>

    </div>
  )
}

export default Tests
