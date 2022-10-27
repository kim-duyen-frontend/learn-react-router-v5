import { useState } from 'react';
import "./styles.scss";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    });
    
    const handleChangeField = (event, type) => {
        const value = event.target.value;
        formData[type] = value;
        setFormData({ ...formData })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ ...formData });
    }
    
    return (
        <div className="login">
            <div className="container">
                <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <label className="labelName">Email: </label>
                        <input
                            className="inputName"
                            value={formData.email}
                            placeholder="enter email..."
                            type="email"
                            onChange={(event) => handleChangeField(event, "email")}
                        />
                        <label className="labelPassword">Password: </label>
                        <input
                            className="inputPassword"
                            value={formData.password}
                            placeholder="enter password..."
                            type="password"
                            onChange={(event) => handleChangeField(event, "password")}
                        />
                        <button className="btnLogin">log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;