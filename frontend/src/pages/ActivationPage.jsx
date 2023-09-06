import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { server } from '../server';

const ActivationPage = () => {
    // The useParams hook is used to extract URL parameters. 
    const {activation_token} = useParams();
    console.log(activation_token);
    const [error, setError] = useState(false);

    // The useEffect hook is used to perform side effects in the component.
    useEffect(()=>{
        const activationEmail = async () => {
            try {
                // this req goes to the active user route in user controller 
                const res = await axios.post(`${server}/user/activation`, {
                    activation_token,
                })

                console.log(res.data);
            } catch (error) {
                console.log(error?.response?.data?.message);
                setError(true);
            }
        }

        activationEmail();

    }, [activation_token]);

   return (
    <div style={{
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    }}>
        {
            error ? (
                <p>Your token is expired</p>
            ) : (
                <p>Your account has been created successfully</p>
            )
        }
    </div>
  )
}

export default ActivationPage
