import React from 'react'
import High5Logo from '../../images/high5-mark-circle.svg'

const Footer = () => {
  return (
    <div>
        <footer className="container minimal ng-star-inserted" id="siteFooter" style={{
            position: 'fixed',
            bottom: '0'
        }}>
            <div className='d-flex align-items-center'>
                <span>Powered by</span>
                <div
                    className="brand-logo ml-2"
                    style={{ backgroundImage: `url(${High5Logo})`, 
                        width: '50px', 
                        height: '50px', 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50%',
                        backgroundSize: 'contain'
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
  )
}

export default Footer