import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container4">
                    <div className="row">
                        <div className="footer-col-1">
                            <div className="app-logo">
                                <img src="../images/logo.png" alt="" /><br />
                                <button className='btn4'>Status: <span id='foo'><i className="fa-solid fa-circle" ></i>All system normal</span></button>
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <h3>Product</h3>
                            <ul>
                                <li>Infrastructer</li>
                                <li>Preview</li>
                                <li>Edge Function</li>
                                <li>Analytics</li>
                                <li>Next js</li>
                                <li>Turbo</li>
                                <li>Enterprise</li>
                                <li>CLI & API</li>
                                <li>changelog</li>
                            </ul>
                        </div>

                        <div className="footer-col-2">
                            <h3>Explore</h3>
                            <ul>
                                <li>Docs</li>
                                <li>Pricing </li>
                                <li>Customers</li>
                                <li>Integration</li>
                                <li>Templates</li>
                                <li>Resources</li>
                                <li>Experts</li>
                                <li>Guides</li>
                                <li>Help</li>
                            </ul>
                        </div>

                        <div className="footer-col-2">
                            <h3>Company</h3>
                            <ul>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Carrers</li>
                                <li>Contact us</li>
                                <li>Open Source</li>
                                <li>Partners</li>
                                <li>Security</li>
                                <li>Privicy Policy</li>
                                <li>Legal</li>
                            </ul>
                        </div>

                    </div>
                    <p className="copyright">Copyright &copy;Vinayak Vercel</p>
                </div>
            </div>
        </>
    )
}

export default Footer
