const WantToRead = { id: 'wantToRead', name: 'Want to Read' };
const CurrentlyReading = { id: 'currentlyReading', name: 'Currently Reading' };
const Read = { id: 'read', name: 'Read' };
const None = { id: 'none', name: 'None' };

const Shelves = {
  WantToRead,
  CurrentlyReading,
  Read,
  All: [ WantToRead, CurrentlyReading, Read, None ]
}

export default Shelves