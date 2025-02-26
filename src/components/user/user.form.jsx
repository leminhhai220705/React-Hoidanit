import { Button, Input } from "antd"
import { useState } from "react";
import axios from "axios";

const UserForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone,
        }
        axios.post(URL_BACKEND, data)
        console.log({ fullName, email, password, phone });

    }
    return (
        <div className="user-form" style={{
            margin: "20px 0"
        }}>
            <div style={{
                display: "flex",
                gap: "15px",
                flexDirection: "column",
            }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>

                <div>
                    <span>Phone Number</span>
                    <Input value={phone}
                        onChange={(e) => {
                            if (/^\d*$/.test(e.target.value)) {
                                setPhone(e.target.value);
                            } else {
                                alert("Please enter number");
                                return;
                            }
                        }}
                    />
                </div>

                <div>
                    <Button type="primary"
                        onClick={handleClickBtn}
                    >Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm