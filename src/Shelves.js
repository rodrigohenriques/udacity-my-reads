const WantToRead = { id: 'wantToRead', name: 'Want to Read' };
const CurrentlyReading = { id: 'currentlyReading', name: 'Currently Reading' };
const Read = { id: 'read', name: 'Read' };

const Shelves = {
  WantToRead,
  CurrentlyReading,
  Read,
  All: [ WantToRead, CurrentlyReading, Read ]
}

export default Shelves