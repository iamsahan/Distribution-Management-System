import React from 'react'

export const NavigationBar = () => {
  return (
    <div className='fixed w-full text-white'>
        <nav className=" p-4 flex justify-between items-center" style={{backgroundColor:'#092143'}}>
        <div>
          <h1 className="text-lg font-bold">Distributor Management System</h1>
        </div>
        <div className="text-right">
          <p>Welcome W A A A U WIJESINGHE</p>
          <p>Last login 15/07/2024 13:58:22</p>
        </div>
      </nav>
      <nav className=" p-4 flex justify-between items-center" style={{backgroundColor:'#10538a'}}>
      <ul className="flex space-x-4">
        <li>Dashboard</li>
        <li>Customer</li>
        <li>Promotion</li>
        <li>Order</li>
        <li>Inventory</li>
        <li>Sales</li>
        <li>Return</li>
        <li>Complain</li>
      </ul>
    </nav>
  </div>
  )
}
