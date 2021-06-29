export const url = 'http://localhost:3000/';
const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};

export default header;
