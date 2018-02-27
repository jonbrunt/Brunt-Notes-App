import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LeftRail from './leftrail';
import SectionTitle from './sectiontitle';
import TextBlock from './textblock';
import Delete from './delete';

const StyledNote = styled.div`
  display: flex;
  position: relative;
  .full-note__right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

  .full-note__links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    a {
      margin: 0 5px;
      font-family: Raleway, sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      color: #4a494a;      
    }
  }

`;

const FullNote = props => (
  <StyledNote >
    {/* <Delete /> */}
    <LeftRail />
    <div className='full-note__right'>
      <div className='full-note__links'>
        <a href='#'>edit</a>
        <a href='#'>delete</a>
      </div>
      <SectionTitle name={props.notes[0].title}/>
      <TextBlock body={props.notes[0].body}/>
    </div>
  </StyledNote>
);

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    deleteActive: state.deleteActive,
  };
};

export default connect(mapStateToProps, null)(FullNote);
