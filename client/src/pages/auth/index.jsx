import Victory from '@/assets/victory.svg'
import login2 from '@/assets/login2.png'
import { Tabs , TabsList , TabsTrigger , TabsContent } from '@/components/ui/tabs'
import {Input} from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleLogin = async() => {

    }

    const handleSignup = async() => {

    }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid  xl:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                    <img src={Victory} alt="Victory" className='h-[100px]' />
                </div>
                <p className="font-medium text-center">Sign up to get started with solution for your problems.</p>
            </div>
            <div className="flex items-center justify-center w-full">
                <Tabs className="w-3/4">
                    <TabsList className="w-full bg-transparent rounded-none">
                        <TabsTrigger value="login" className="data-[state=active]:bg-transparent w-full text-black border-b-2 rounded-none text-opacity-90x data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 ">Login</TabsTrigger>
                        <TabsTrigger value="signup" className="data-[state=active]:bg-transparent w-full text-black border-b-2 rounded-none text-opacity-90x data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 ">Signup</TabsTrigger>
                    </TabsList>
                    <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                        <Input
                            placeholder="Email"
                            type="email"
                            className="p-6 rounded-full"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="Password"
                            type="password"
                            className="p-6 rounded-full"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Button onClick={handleLogin} className="p-6 rounded-full">Login</Button>
                    </TabsContent>
                    <TabsContent className="flex flex-col gap-5" value="signup">
                        <Input
                            placeholder="Email"
                            type="email"
                            className="p-6 rounded-full"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        <Input
                            placeholder="Password"
                            type="password"
                            className="p-6 rounded-full"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Input
                            placeholder="Confirm Password"
                            type="password"
                            className="p-6 rounded-full"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                        <Button onClick={handleSignup} className="p-6 rounded-full">Signup</Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
        <div className="items-center justify-center hidden xl:flex">
            <img src={login2} alt="background image" className='h-[700px]' />
        </div>
      </div>
    </div>
  )
}

export default Auth
