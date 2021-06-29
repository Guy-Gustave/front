export const url = 'https://trackap.herokuapp.com';
const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};

export default header;
