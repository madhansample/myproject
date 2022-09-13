import React from 'react'
import High5Logo from '../../images/high5logo.png'

const Footer = () => {
  return (
    <div style={{
        bottom: '0'
    }}>
        <div className='mt-5 ml-5 mb-2'>
            <footer className="mb-2" id="siteFooter">
                <div className='d-flex align-items-center'>
                    <span>Powered by</span>
                    <div
                        className="brand-logo1 ml-2"
                        style={{ backgroundImage: `url(${High5Logo})`                    
                        }}
                    >
                    </div>
                </div>
                <p>
                    <small>Privacy Policy and </small>
                    <small>Terms of Service</small>
                </p>
            </footer>
        </div>
    </div>
  )
}

export default Footer