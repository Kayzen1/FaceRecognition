import React from "react";

const Register = ({onRouteChange}) => {
    return (
        <div>
            <article className ="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <div className ="sans-serif w-90 white mw6 center relative cover bg-top mt2">
            <div id="overlay" className="absolute absolute--fill bg-navy o-70 z-unset"></div>
            <div className="relative pa4 pa5-m">
                <h1 className="serif tracked ma0 mb4 pv3">Register</h1>
                <form action="" id="login" className="">
                    <div className="mb3">
                        <label htmlFor="username" className="db f6 white-80 ttu ph2 mb2">Create Username</label>
                        <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                    </div>
                    <div className="mb4">
                        <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">New Password</label>
                        <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                    </div>
                    <div>
                        <button 
                            onClick={() => onRouteChange('home')}
                            className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Register In</button>
                    </div>
                </form>
            </div>
        </div>
    
        {/* <div id="credits" className="silver tc serif i b pv3">
            Based on <a href="https://dribbble.com/shots/2903303-CreativesCastle-UI-002-Sign-In-form-Free-PSD" className="silver">this shot</a>.
        </div> */}
        </article>
    </div>
    )
}

export default Register;