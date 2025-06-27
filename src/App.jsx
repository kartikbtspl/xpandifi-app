import Dashboard from "./components/Dashboard";
import AppLayout from "./layout/AppLayout"


import React from 'react'

const App = () => {
  return (
    <div>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </div>
  )
}
export default App;