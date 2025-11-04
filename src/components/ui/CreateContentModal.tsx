
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";
export function CreateContentModal({ open, onClose }) {
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed left-0 top-0 opacity-40 flex justify-center">
            <div className="flex flex-col justify-center border border-gray-300 shadow-lg  ">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer" >
                            <CloseIcon/>
                        </div>
                    </div>
                    <div>
                        <Input placeholder="type" />
                        <Input placeholder="link" />
                    </div>
                    <div className="w-full flex justify-center">
                        <Button text="Submit" variant="primary" />
                    </div>
            </div>

        </div>}
    </div>
}

