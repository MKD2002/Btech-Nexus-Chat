import { useEffect, useState } from "react"
import {GrAttachment} from 'react-icons/gr'
import {RiEmojiStickerLine } from "react-icons/ri";
import { IoSend } from 'react-icons/io5'
import { useRef } from "react";
import EmojiPicker from "emoji-picker-react";

const MessageBar = () => {
    const emojiRef = useRef();
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        function handleClickOutside(event){
            if(emojiRef.current && !emojiRef.current.contains(event.target)){
                setEmojiPickerOpen(false);
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[emojiRef])

    const handleAddEmoji = (emoji) => {
        setMessage((msg)=>msg+emoji.emoji);
    }

    const handleSendMessage = async() => {

    }

  return (
    <div className="h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6">
        <div class="flex-1 flex bg-[#2a2b33] rounded-md items-center gap-5 pr-5">
            <input
                type="text"
                className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none"
                placeholder="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="transition-all duration-300 text-neutral-500 focus:border-none focus:outline-none focus:text-white">
                <GrAttachment className="text-2xl" />
            </button>
            <div className="relative">
                <button
                    className="transition-all duration-300 text-neutral-500 focus:border-none focus:outline-none focus:text-white"
                    onClick={()=>setEmojiPickerOpen(true)}
                >
                    <RiEmojiStickerLine className="text-2xl" />
                </button>
                <div className="absolute right-0 bottom-16" ref={emojiRef}>
                    <EmojiPicker
                        theme="dark"
                        open={emojiPickerOpen}
                        onEmojiClick={handleAddEmoji}
                        autoFocusSearch={false}
                    />
                </div>
            </div>
        </div>
        <button
            className="transition-all duration-300 focus:border-none focus:outline-none focus:text-white bg-[#8417ff] rounded-md flex items-center justify-center p-5 hover:bg-[#741bda] focus:bg-[#741bda]"
            onClick={handleSendMessage}
        >
                <IoSend className="text-2xl" />
        </button>
    </div>
  )
}

export default MessageBar