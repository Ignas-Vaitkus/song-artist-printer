import React from 'react';
import PropTypes from 'prop-types';


const Home = (props) => (
  <span>
    {props.songData.map((value, idx) => (
      <p key={idx}>
        {value.artist} - {value.title}
      </p>
    ))}
  </span>
);

Home.propTypes = { songData: PropTypes.array,
style: PropTypes.object };

Home.defaultProps = {songData: [{id: 0, title: 'Trys Milijonai', artist: 'Marijonas Mikutavičius'}]};

export default Home;