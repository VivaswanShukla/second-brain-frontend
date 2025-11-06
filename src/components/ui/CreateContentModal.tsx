
import { useRef, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title, 
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
    }
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed left-0 top-0 bg-opacity-40 flex justify-center items-center ">
            <div className="bg-white p-2 rounded-lg">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer bg-gray-300 rounded" >
                        <CloseIcon />
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-3 mb-1">
                        <Input ref={titleRef} placeholder="title" />
                        <Input ref={linkRef} placeholder="link" />
                    </div>
                    <div className="flex mb-5">
                        <Button variant={type === ContentType.Twitter ? "primary" : "secondary"} text="Twitter" onClick={() => setType(ContentType.Twitter)} />
                        <Button variant={type === ContentType.Youtube ? "primary" : "secondary"} text="Youtube" onClick={() => setType(ContentType.Youtube)} />
                    </div>
                    <div className=" flex justify-center">
                        <Button fullWidth={true} onClick={addContent} text="Add" variant="primary" />
                    </div>
                </div>
            </div>

        </div>}
    </div>
}

