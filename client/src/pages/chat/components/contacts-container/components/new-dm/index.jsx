import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"
import { FaPlus } from 'react-icons/fa'
import { Input } from "@/components/ui/input"
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle } from "@/components/ui/dialog"
import Lottie from 'react-lottie'
import { animationDefaultOptions } from "@/lib/utils"
import {apiClient} from "@/lib/api-client"
import { SEARCH_CONTACTS_ROUTES } from "@/utils/constants"

const NewDM = () => {
    const [openNewContactModal, setOpenNewContactModal] = useState(false);
    const [searchedContacts, setSearchedContacts] = useState([]);

    const searchContacts = async(searchTerm) => {
        try{
            if(searchTerm.length > 0){
                const response = await apiClient.post(SEARCH_CONTACTS_ROUTES,{searchTerm},{withCredentails:true})
                if(response.status === 200 && response.data.contacts){
                    setSearchedContacts(response.data.contacts)
                    console.log(response.data.contacts)
                }
            }else{
                setSearchedContacts([])
            }
        }catch(error){
            console.log({error})
        }
    }

    return (
      <>
          <TooltipProvider>
              <Tooltip>
              <TooltipTrigger>
                  <FaPlus
                      className="text-sm font-light transition-all duration-300 cursor-pointer text-neutral-400 text-opacity-90 hover:text-neutral-100"
                      onClick={()=>setOpenNewContactModal(true)}
                  />
              </TooltipTrigger>
              <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">
                  <p>Select new Contact</p>
              </TooltipContent>
              </Tooltip>
          </TooltipProvider>
          <Dialog open={openNewContactModal} onOpenChange={setOpenNewContactModal}>
            <DialogContent className="bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription className="merriweather-sans-regular">
                    Please select a contact.
                </DialogDescription>
              </DialogHeader>
              <div>
                <Input
                    placeholder="Search Contacts"
                    className="p-6 rounded-lg bg-[#2c2e3b] border-none"
                    onChange={e=>searchContacts(e.target.value)}
                />
              </div>
              {
                searchedContacts.length<=0 && (
                    <div className="flex-1 md:bg-[#181920] md:flex flex-col justify-center items-center duration-1000 transition-all mt-5">
                        <Lottie
                            isClickToPauseDisabled={true}
                            height={100}
                            width={100}
                            options={animationDefaultOptions}
                         />
                         <div className='flex flex-col items-center gap-5 mt-5 text-xl text-center text-white transition-all duration-300 text-opacity-80 lg:text-2xl bg-none'>
                            <h3 className='poppins-medium'>
                                Hi<span className='text-purple-500'>! </span> Search new
                                <span className='text-purple-500'> Contact.</span>
                            </h3>
                         </div>
                    </div>
                )
              }
            </DialogContent>
            </Dialog>
      </>
    )
}

export default NewDM
