import React from "react";

function Login()
{
    return(
    <div>
        <div>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter email ID"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
)
}

export default Login

                