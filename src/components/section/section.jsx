import React, { Component } from 'react';
import Sectionheader from './sectionheader';
import Sectionarticle from './sectionarticle';

import './section.css'

class Section extends Component {
  render() {
    return (
      <section>
        <Sectionheader />
      </section>
    );
  }
}

export default Section;