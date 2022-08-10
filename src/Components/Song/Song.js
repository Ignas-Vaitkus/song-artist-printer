import React from 'react';
import PropTypes from 'prop-types';


const Song = (props) => {
  const {id, artist, title} = props.songData;

  return (
    <p style={props.customStyle}>
      {artist} - {title}
    </p>
  );
};

Song.propTypes = { songData: PropTypes.object,
customStyle: PropTypes.object };

Song.defaultProps = {songData: [{id: 0, title: 'Trys Milijonai', artist: 'Marijonas Mikutavičius'}],
customStyle: {color: 'grey'}};

export default Song;