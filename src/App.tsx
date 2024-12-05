import { Button, Checkbox, Chip, Slider } from "@nextui-org/react"
import { Check, MinusIcon, PlusIcon, RefreshCw } from "lucide-react"

function App() {
  return (
    <>
      <div className="bg-black text-white h-screen flex flex-col items-center justify-center select-none">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Random Password Generator</h1>
          <h3 className="font-semibold">Create complex and secure passwords to safeguard your account online.</h3>
        </div>
        <div className="flex items-center mt-7 justify-center max-w-2xl w-full">
          <div className="bg-neutral-900 mt-5 w-full p-4 rounded-xl flex justify-between items-center">
            <span className="font-semibold text-lg">adfieur8ewu</span>
            <div className="flex items-center gap-x-4">
              <Chip color="success" variant="flat" className="dark">Very Strong</Chip>
              <RefreshCw className="cursor-pointer hover:scale-80 transition-transform" />
            </div>
          </div>
          <Button color="primary">Copy</Button>
        </div>
        <div className="w-full max-w-2xl">
          <div className="mt-8 flex items-center justify-between">
            <p className="text-lg whitespace-nowrap">Password Length: <span className="ml-4 font-bold">16</span></p>
            <div className="flex gap-x-2 items-center">
              <Button radius="full" size="sm" isIconOnly color="danger">
                <MinusIcon />
              </Button>
              <Slider size="lg" step={0.01} maxValue={43} minValue={4} defaultValue={19} className="w-72 dark" />
              <Button radius="full" size="sm" isIconOnly color="danger">
                <PlusIcon />
              </Button>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-lg whitespace-nowrap">Characters used: </p>
            <div className="flex gap-x-16 items-center">
              <Checkbox icon={<Check />} classNames={{ label: 'text-white text-lg font-bold' }}>ABC</Checkbox>
              <Checkbox icon={<Check />} classNames={{ label: 'text-white text-lg font-bold' }}>abc</Checkbox>
              <Checkbox icon={<Check />} classNames={{ label: 'text-white text-lg font-bold' }}>123</Checkbox>
              <Checkbox icon={<Check />} classNames={{ label: 'text-white text-lg font-bold' }}>#&$</Checkbox>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App