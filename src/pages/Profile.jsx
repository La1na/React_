// import { jwtDecode } from 'jwt-decode'

// export default function Profile() {
//   const token = localStorage.getItem('token')
//   const tokenData = token ? jwtDecode(token) : null

//   return (
//     <div>
//       <h1>{tokenData ? tokenData.user.id : 'Login into your account'}</h1>
//     </div>
//   )
// }
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import { logout } from '../features/auth/authSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const token = localStorage.getItem('token');
  const tokenData = token ? jwtDecode(token) : null;

 
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    dispatch(logout()); 
    navigate('/'); 
  };

  return (
    <Box >
      <Typography variant="h4">
        {tokenData ? `User ID: ${tokenData.user.id}` : 'Login into your account'}
      </Typography>
      {tokenData && (
        <Button onClick={handleLogout} variant="contained" >
          Logout
        </Button>
      )}
    </Box>
  );
}

