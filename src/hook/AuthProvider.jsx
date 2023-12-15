import useAuthCheck from '@/hook/useAuthCheck';
import React, { createContext, useContext } from 'react';

const AuthProvider = ({ children }) => {

  const AuthContext = createContext()
  const authChecked = useAuthCheck()
  // console.log(authChecked);
  return (
    <AuthContext.Provider value={""}>
      {!authChecked ?
        <div className="">
          <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-white">
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-12 h-12 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
              <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
            </div>
          </div>
        </div>
        : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const userAuthContext = () => {
  const value = useContext(AuthProvider);
  if (value == null) throw Error("Cannot use outside of Context");
  return value;
}