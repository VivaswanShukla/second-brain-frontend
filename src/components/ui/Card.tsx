import type { ReactElement } from "react";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { DocumentIcon } from "../../icons/Document";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";

interface CardProps{
    title: string,
    link: string,
    type: "tweet" | "youtube",
    icon: ReactElement
}

export function Card({ type, link, title, icon}: CardProps){
    return <div className="bg-white rounded-md p-5 border shadow-md outline-slate-100 max-w-72  min-w-72 ">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="pr-3 text-gray-500">
                    {icon}
                </div>
                <div className="">
                    {title}
                </div>
            </div>
            <div className="flex text-gray-500">
                <div className="pr-3">
                    <a href={link} target="_blank">
                        <ShareIcon/>
                    </a>
                </div>
                <div>
                    <DeleteIcon/>
                </div>
            </div>
        </div>
        <div className="pt-6">
            {type === 'youtube' && <iframe className="w-full rounded-md" src={link.replace("watch", "embed").replace("?v=", "/")} title="YT bideo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {type === 'tweet' && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
            </blockquote>
            }
            
        </div>
    </div>
}