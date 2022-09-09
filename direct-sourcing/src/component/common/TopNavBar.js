import React from 'react'

function TopNavBar() {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='my-2 mx-4'>
                <img src="https://assets.livehire.com/tc-branding/hcltech/logo-3.png" alt="" />
            </div>
            <div className='ml-auto my-2 mx-4'>
                <button className='btn btn-outline-secondary'>
                    LOG IN
                </button>
            </div>
        </div>
    </>
  )
}

export default TopNavBar