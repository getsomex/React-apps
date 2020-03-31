import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarina', duration: '3:05' },
    { title: 'All star', duration: '5:05' },
    { title: 'I want it that way', duration: '6:05' }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
