import { Chip } from "@nextui-org/react"
import { RefreshCw } from "lucide-react"

function App() {
  return (
    <>
      <div className="bg-black text-white h-screen flex flex-col items-center justify-center select-none">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Random Password Generator</h1>
          <h3>Create complex and secure passwords to safeguard your account online.</h3>
        </div>
        <div className="bg-neutral-900 mt-5 max-w-2xl w-full p-4 rounded-xl flex justify-between items-center">
          <span className="font-semibold text-lg">adfieur8ewu</span>
          <div className="flex items-center gap-x-4">
            <Chip>Very Strong</Chip>
            <RefreshCw className="cursor-pointer hover:scale-80 transition-transform" />
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App