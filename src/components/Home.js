import React from 'react';
import './css/home.css';



import './css/home.css'

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className='hero-text'>
                    <div><h2>Develop.</h2></div>
                    <div><h2>Preview.</h2></div>
                    <div><h2>Ship</h2></div>
                </div>
                <p>Vercel's frontend cloud gives developers the frameworks, workflows,<br />
                    and infrastructure to build a faster, more personalized Web.</p>

                <div className="btns">
                    <button className='btn1'><i class="fa-solid fa-caret-up"></i>Start Deploying</button>
                    <button className='btn2'>Get a Demo</button>
                </div>
            </section>
            <section id="develop">
                <h6>TRUSTED BY THE BEST FRONTEND TEAMS</h6>
            </section>
            {/* image part starts here */}

            {/* ***********************flexbox start ************************************ */}
            <div className="flexbox">
                <img src="../images/adobe.svg" alt='adobe' className='adboe' />
                <img src="../images/okta.svg" alt='adobe' />
                <img src="../images/under-armour.svg" alt='adobe' />
                <img src="../images/ebay.svg" alt='adobe' />
                <img src="../images/zapier.svg" alt='adobe' />
            </div>
            <div className="flexbox1">
                <img src="../images/loom.svg" alt='adobe' className='adboe' />
                <img src="../images/hashicorp.svg" alt='adobe' height="60px" width='130px' />
                <img src="../images/tailwindcss_logo.svg" alt='adobe' />
                <img src="../images/washingtonpost.svg" alt='adobe' height="70px" width='230px' />
                {/* <img src="../images/zapier.svg" alt='adobe' /> */}
            </div>
            {/* image part ends here */}

            <section id="develop">
                <h6>EXPLORE THE VERCEL WAY</h6>
                <span class="path-line"></span>
                <span class="path-line1"></span>
                <span class="circled-number">1</span>
                <span class="gradient-word">Develop</span>
            </section>

            <section id="start">
                <h2>Build when inspiration strikes</h2>
                <div classname="pars">
                    <p>Free developers from time-consuming, unnecessary processes <br />that slow your work, so you and your team can focus on creating.</p>
                </div>
            </section>

            <div className="container">
                <div className="left">
                    <video width="320" height="240" autoPlay loop muted>
                        <source src="/images/code2anime.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="right">
                    <we className='fa'><i class="fa-solid fa-wrench"></i></we>
                    <h2>The complete toolkit for the Web</h2>
                    <p>Everything you need to build your site exactly how you imagine,<br />from automatic API handling to built-in image and performance <br />optimizations.</p>

                    <we className='fa'><i class="fa-solid fa-database"></i></we>
                    <h2>Easy integration with your backend</h2>
                    <p>Connect your pages to any data source, headless CMS, or API<br />and make it work in everyone’s dev environment.</p>

                    <we className='fa'><i class="fa-solid fa-terminal"></i></we>
                    <h2>End-to-end testing on Localhost</h2>
                    <p>From caching to Serverless Functions, all our cloud primitives<br />work perfectly on localhost.</p>
                </div>

            </div>

            {/* *************container over**************************** */}

            <section id="preview">
                <h6>Works With 30+ Frameworks</h6>
            </section>
            <div className='vinayak'>
                <span classname="circled-number">
                    <img src='/images/icons/next-js.svg' alt="react" width="30px" />
                    <img src='/images/icons/react.svg' alt="react" width="30px" />
                    <img src='/images/icons/svelte.svg' alt="react" width="30px" />
                    <img src='/images/icons/nuxt-js.svg' alt="react" width="30px" />
                    <img src='/images/icons/logo-vue.svg' alt="react" width="30px" />
                    <img src='/images/icons/ember-dot-js.svg' alt="react" width="30px" />
                    <img src='/images/icons/angular.svg' alt="react" width="30px" />
                    <img src='/images/icons/hugo.svg' alt="react" width="30px" />

                    <img src='/images/icons/gatsby.svg' alt="react" width="30px" />
                </span>
            </div>

            <section id="preview">
                <h6>Works With 30+ Jamstack Frameworks</h6>
                <span class="path-line"></span>
                <span class="circled-number">2</span>
                <span class="gradient-word">Preview</span>
            </section>



            {/* ***************************accelerate here ************************/}
            <section id="start" >
                <h2>Iterate with your team</h2>
                <div classname="pars">
                    <p>Make frontend development a collaborative experience with<br />automatic Preview Deployments for every code change, by<br />
                        seamlessly integrating with GitHub, GitLab, and Bitbucket.
                    </p>
                </div>
            </section>

            <div className="vinayak1">
                <div className="push">
                    <img src="/images/ship/git.png" alt="git" />
                    <img src="/images/ship/store.png" alt="git" />
                    <img src="/images/ship/geta.png" alt="git" />
                </div>
                <div className="pull">
                    <we className='fa fa1'><i class="fa-solid fa-arrow-up-from-bracket"></i></we>
                    <h2>Push to deploy</h2>
                    <p>Every deploy automatically generates a shareable live preview <br />
                        site that stays up-to-date with your changes.</p>


                    <we className='fa fa2'><i class="fa-solid fa-up-right-from-square"></i></we>
                    <h2>Automatic Previews for every branch</h2>
                    <p >Each new branch receives a live, production-like URL that<br />Each new branch receives a live, production-like URL that.</p>

                    <we className='fa fa3'><i class="fa-solid fa-user-plus"></i></we>
                    <h2>Collaborative reviews on UI</h2>
                    <p >Comment directly on components, layouts, copy, and more in<br />
                        real context and real time, integrated seamlessly with GitHub
                        <br />and Slack.</p>
                </div>
            </div>


            <section id="ship">
                <span class="path-line"></span>
                <span class="circled-number">3</span>
                <span class="gradient-word">Ship</span>
            </section>

            {/* ******************ship end here ************************ */}

            <section section id="start" >
                <h2>Delight every visitor</h2>
            </section>

            <div className="container2">
                <div className="left2">
                    <h3>Speed is critical to customers — and SEO</h3>
                    <p1>Next.js and Vercel work together to deliver the best performance <br />for your end users, while maintaining best-in-class SEO practices.</p1>
                    <p>Built on cutting-edge serverless technology, Vercel can <br /> withstand any traffic spike, with automatic failover and global <br /> replication of assets.</p>

                    <we className='fa2'><i class="fa-solid fa-globe"></i></we>
                    <h3>Global Edge Network</h3>
                    <b>Your site, fast everywhere. Deploy content around the world and <br />update it in 300ms.</b>

                    <br className="gap1" />
                    <we className='fa2'><i class="fa-solid fa-signal" id='gap1'></i></we>
                    <h3>First-party monitoring and observability</h3>
                    <b>Analyze logs, understand traffic and usage, and easily optimize <br />your applications, without extra tooling or code.</b>

                </div>
                <div className="right2">
                    <video autoPlay loop muted className='vid'>
                        <source src="/images/globe.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>

            {/* ************stats secton************ */}
            <div class="stats">
                
                <div class="flex-container">
                    <div class="flex-item">
                        <span class="num">90</span>
                        <span class="word">CITIES</span>
                    </div>

                    

                    <div class="flex-item">
                        <span class="num">41B+</span>
                        <span class="word">REQUESTS PER WEEK</span>
                    </div>
                    <div class="flex-item">
                        <span class="num">10PB</span>
                        <span class="word">DATA SERVED</span>
                    </div>
                    <div class="flex-item">
                        <span class="num">99.99%</span>
                        <span class="word">GUARANTEED UPTIME</span>
                    </div>
                </div>
            </div>
        </>
    )
}
