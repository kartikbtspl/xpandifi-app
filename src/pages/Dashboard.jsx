import React from 'react'

const Dashboard = () => {
  return (
     <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Welcome Back, John Smith</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">Revenue</div>
        <div className="bg-white p-4 shadow rounded-lg">Ad Clicks</div>
        <div className="bg-white p-4 shadow rounded-lg">Cost</div>
        <div className="bg-white p-4 shadow rounded-lg">Bids</div>
      </div>
    </div>
  )
}

export default Dashboard