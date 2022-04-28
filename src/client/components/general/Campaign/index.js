import React from 'react';
import './campaign.scss'
import Article from '../Article';

function Campaign(props) {
  const {right} = props;

  return (
    <section className='campaign'>
        <div className={`image ${right? "right" : ""}`}></div>
        <div className='content'>
        <Article {...props}  />
        </div>
    </section>
  )
}

export default Campaign