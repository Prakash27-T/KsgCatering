// App.jsx
import React from 'react';
export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black">
      <div className="w-full max-w-md px-8 py-10 bg-white shadow-lg bg- rounded-3xl">
        
        {/* Logo Section */}
        <div className="flex items-center gap-0 mb-5 ">
          <img
            src="KsgFinal.png"
            alt="KSG Logo"
            className="object-contain h-20 bg-black rounded-md text w-2w-20"
          />

          <div className="p-2 mt-12 ml-0">
            <h4 className="font-sans text-xl text-black bg-white leading- ">
              KSG Catering
            </h4>
            
          </div>
        </div>

        {/* User ID */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-medium text-gray-700">
            User Id
          </label>

          <input
            type="UserId"
            placeholder="Enter your id "
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md outline-none focus:border-blue-600"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block mb-3 text-sm font-medium text-gray-700 rounded-md">
            Password
          </label>

          <input
            type="password"
            placeholder=" Enter your password "
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md outline-none pt-lg focus:border-blue-600"
          />
        </div>

        {/* Options */}
        <div className="flex items-start justify-between mb-10">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-3 h-3 accent-blue-700"
            />

            <span className="font-sans text-clip gray-700">
              Keep signed in
            </span>
          </label>

          <button className="text-xs font-medium text-left text-blue-700 hover:underline">
            Forgot
            <br />
            Password?
          </button>
        </div>

        {/* Button */}
        <button className="w-full py-2 text-xl font-semibold text-white transition bg-blue-800 rounded-md hover:bg-blue-900">
          Sign In
        </button>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-gray-200"></div>
      </div>
    </div>
  );
}