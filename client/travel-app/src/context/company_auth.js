// // CompanyAuthContext.js









// import React, { createContext, useState, useEffect } from 'react';

// const CompanyAuthContext = createContext();

// const CompanyAuthContextProvider = (props) => {
//   const [company, setCompany] = useState(null);
//   const [error, setError] = useState(null);

//   // Fetch company profile on component mount if authenticated
//   useEffect(() => {
//     const fetchCompanyProfile = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/profile', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch company profile');
//         }
//         const data = await response.json();
//         setCompany(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchCompanyProfile();
//   }, []);

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }
//       const data = await response.json();
//       localStorage.setItem('accessToken', data.access_token);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Logout function
//   const logout = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/logout', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Failed to logout');
//       }
//       localStorage.removeItem('accessToken');
//       setCompany(null);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <CompanyAuthContext.Provider value={{ company, error, login, logout }}>
//       {props.children}
//     </CompanyAuthContext.Provider>
//   );
// };

// export { CompanyAuthContext, CompanyAuthContextProvider };
