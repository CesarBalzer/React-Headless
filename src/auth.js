import Cookies from 'js-cookie';
function isToken() {
  // console.log(Cookies.get('token'));
  return Cookies.get('token');
}

export const isAuthenticated = () => isToken() ? true : false;