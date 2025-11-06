import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        });
        navigate("/signin");
        alert("You are now signed up");
    }

    return <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
        <div className="min-w-48 px-10 bg-white h-72 flex flex-col justify-center items-center gap-4 border border-gray-300 rounded-xl">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <Button text="Sign Up" variant="primary" onClick={signup} fullWidth={true}  />            
        </div>
    </div>
}