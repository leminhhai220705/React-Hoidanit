import { Button, Input } from "antd"
import { useState } from "react";
const UserForm = () => {

    const [phone, setPhone] = useState("");

    const handleChange = (input) => {

        // Chỉ cho phép nhập số (0-9) và không chứa ký tự khác
        if (/^\d*$/.test(input)) {
            setPhone(input);
        } else {
            alert("Only allow the number")
            return;
        }
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
                    <Input />
                </div>

                <div>
                    <span>Email</span>
                    <Input />
                </div>

                <div>
                    <span>Password</span>
                    <Input.Password />
                </div>

                <div>
                    <span>Phone Number</span>
                    <Input value={phone} onChange={(e) => { handleChange(e.target.value) }} />
                </div>

                <div>
                    <Button type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm