import { NavLink } from "react-router-dom";
const Header = ({ children, text }) => {
  return (
    <div className="w-full flex justify-center items-center px-4 dark:bg-slate-800 transition-all duration-200 py-2 md:hidden">
      <div className="flex justify-between items-center w-full">
        {/* logo */}
        <div>
          <NavLink to="/">
            <svg
              width="50"
              height="42"
              viewBox="0 0 50 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="50" height="42" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_95_1935"
                    transform="matrix(0.00202622 0 0 0.00241217 -0.42 -0.310872)"
                  />
                </pattern>
                <image
                  id="image0_95_1935"
                  width="839"
                  height="544"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0cAAAIgCAYAAABOPBLVAAAgAElEQVR4Ae3dDbQk6XkX9iEhHySErEnAIMRMWwjiWBiEbeJ1jjFrOKAFh0RWrIOlQLyI+BAIjtgDOTYo+KyPjSXrzrDeJSuW2JIWrwVIyPauLWRpLVazkixb/pDHFmYtZK3XR0iApc0Ieefekfajc54788y8896q6uru6u7q7t89p05VV39V/ar6fZ//rerqU6f8ESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCw1wJHr55Mjg4mt8Rw6WByRw6HB6cfODw4c74YHj88ODNdYLhQvMb5eN1r73F2cnu+98U7Jzft9Yaw8gQIECBAgAABAgQIrF7gOPicnbz4Sig5fd/VsLJo2FkkIM3znFiu84fnJncdL+/ZyYuffO3khatX8g4ECBAgQIAAAQIECOyMQBwFunQ1BI08AM0TlsrHXrh25Ons5MWxvjuz8awIAQIECBAgQIAAAQKLCcRpaGUQOjo48+kFTnkrg8dWTl9d7/NxlCmOkDk9b7H9ybMIECBAgAABAgQIbI3A8XeDzk1uu3Rw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m1zb5tXbpL5db8Om2+U2r6cb9uMb9peG+8t9q2263h/73C73567pZT4zXc8ViIo6wiQBAgR2WmBHw1J0nn063PoxbZ15OX9WcXDi/rrgKG83FStt8+rCp+l2WxE1a35doHXdrou9MdzuWt64b9b6N1k2bYdy2zUUhrnty/2l3sfqwq6tIFu0GGt7vfp96+Uqlzmmc12ujct1b7JpMpzlPmu7jWHfalqGWcud989a/7b7myzreU3boG1eue2appu2d4959T5T3673sb63632163bb/r7s/EU/f43P2+kiwsoRIEBglwVWFJSis1i2o2p7flen2XRf3865flzd6TfdvlZE9igqbnhsU7FSzmsreLrm14XUrNttRdq2zZ+1nl1mpXlMz9iO9T5Q7zNxu94H2/bjmL9UUdX2/BmfvXr5mtYh5pXresO+WxrVfl3Ws7bTtu13bcs7az3r+7vM2u6r3Ztul9tpzuly27dNt+03s+bX+9+s212fn2Xua/zsdXymej1+l2sF60aAAIG9Fli2g+h4/jKd2aznzupk6/tndeJd97cVDPX81qKyT7HSVPC0zWsrouadXxdum7497/K3+cT8Hub19ovbbftBvT/N2j9bi6uhGpuOz12896zlq9enbb1jfu00cz9v2y7zbt94/Kb3yfL9F1n+pue0+TTN77Efz9oe9fZru921D8y6r96fZt2etX8ue3/r52/G56bzeUN9dr0OAQIECGyZwDKdR4/nLtvpzXr+rE656f5ZHX+f+9sKjqb5s4qZue5vKqgWnddUyA0xb9HliectUBw2mce8Wduxad+Ytb/F/aMpqGYsS591aTKY5dbmPdd+HNt50f1kiH206TUWXZ6m5y2wH8/ya3Nvmz9rO866v2nfmDWvzz637GM6P38zPhOtz92ybtviEiBAgMC6BRbtYHo+b9nOse/zZ3XkbffPKhrmub+tcOkzf1axtGv39zGJx/T1b9u+ffefeFxrMRX3rftzOev9Zi3v1fv7rn+bX8zvuw36bNNd249nrU8fk7bH9HXv87iu7dt1X9/9Z9nHdX72eu7rja8x63PkfgIECBAg0Etgmc5ojucu26HO8/yuAqDPfX0KkGUe01Yg7cL8RV36bJd59oF4bGMBVc7v9QEZ8YPKdemYntetz7ZYdDvH83ZhP29ah2VM+jy3z3bpesy8+8Gyj5/5+evYZ2c+d8QfS4tGgAABArsqsEzHNedzl+2EF31+VyGxyH19Cpx9eMy8dotuv3jezCIqH7Orn9Om9cp17jFexn7e7bwP+36fdZzXbdbjl9mGyzy392evx37Y+lpN+7d5BAgQIEBgVALLdHQLPneZDnwVz51VrOzz/UN7txZNTfvSqD4oI1yYJrMZ84benvF6+/z5mLXuq/Be9DXn+uzN2I9mvtYIPy4WiQABAgQIDCOwbCe5xPMXLQLG+LxZRdS8949tHWcWS237wTB7qVepBdq8e84f2/417+dj1uPHtn7LLM/Cn72e+0Lr69f7nNsECBAgQIDAqVOnlu1gB37+MkWG51651HRrMbTItvIhGa/AItuz4zk+P7Mv1T7LaNDPXse2mvk+491rLRkBAgQIENgRgWU66g0+d1YxM4b7ZxY6q/Dbkd3SaswQWMW+0/M1x/DZmrUMG/ns9fRrXLYZm9vdBAgQIECAwFgFlikAPLf/hQ3Caqz7gOXaTgGfv/k+f8t4beceYqkJECBAgACBjQksU3iM/bkbQ/XGBNYgMPbP3zLLtwY+b0GAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBBYQ+P8B+65kxBwbOKwAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </NavLink>
        </div>
        {/* title */}
        <p className="text-slate-800 dark:text-gray-300 text-lg font-bold">{text}</p>
        {/* button search OR button back */}
        <div className="bg-white rounded-md p-2 shadow-lg flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;