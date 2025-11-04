import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"

export const Signup = () => {
    return <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
        <div className="min-w-48 px-10 bg-white h-72 flex flex-col justify-center items-center gap-4 border border-gray-300 rounded-xl">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button text="Sign Up" variant="primary" onClick={() => {}} fullWidth={true}  />            
        </div>
    </div>
}