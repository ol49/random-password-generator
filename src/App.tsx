import { Button, Checkbox, Chip, Slider } from "@nextui-org/react"
import { Check, MinusIcon, PlusIcon, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"

function App() {
  const [length, setLength] = useState<number>(16);
  const [useCapital, setUseCapital] = useState<boolean>(true)
  const [useSmall, setUseSmall] = useState<boolean>(true)
  const [useNumbers, setUseNumbers] = useState<boolean>(true)
  const [useSymbols, setUseSymbols] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<number>();

  // const checkedBoxes = useRef(3);

  const passwordStrength: { [key: number]: string } = { 1: 'Very Strong', 2: 'Medium', 3: 'Weak' }
  const chipVarient: { [key: number]: 'success' | 'warning' | 'danger' } = { 1: 'success', 2: 'warning', 3: 'danger' }
  // Characters pools
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  // Function to generate password based on the selected options
  const generatePassword = () => {
    let characters = '';
    if (useCapital) characters += capitalLetters;
    if (useSmall) characters += smallLetters;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(generatedPassword);
    evaluateStrength(generatedPassword);
  };

  const getCheckedCount = () => {
    return [useCapital, useSmall, useNumbers, useSymbols].filter(Boolean).length;
  };

  const evaluateStrength = (password: string) => {
    // const numberCriteria = /[0-9]/.test(password);
    // const symbolCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    // const capitalLetterCriteria = /[A-Z]/.test(password);

    if (password.length > 14 && getCheckedCount() > 2) {
      setStrength(1);
    } else if (password.length > 8 && getCheckedCount() > 1) {
      setStrength(2);
    } else {
      setStrength(3);
    }
  };

  // Effect to regenerate password whenever the settings change
  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, useCapital, useSmall, useNumbers, useSymbols]);

  const handleIncrement = () => {
    if (length < 43) {
      setLength(length + 1);
    }
  }

  const handleDecrement = () => {
    if (length > 4) {
      setLength(length - 1);
    }
  }

  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(password)
  }

  const handleCheckBoxChange = (state: boolean, stateSetter: (val: boolean) => void) => {
    stateSetter(!state);
  }

  return (
    <>
      <div className="bg-black text-white h-screen flex flex-col items-center justify-center select-none">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Random Password Generator</h1>
          <h3 className="font-semibold">Create complex and secure passwords to safeguard your account online.</h3>
        </div>
        <div className="flex items-center mt-5 space-x-3 justify-center max-w-2xl w-full">
          <div className="bg-neutral-900 w-full p-4 rounded-xl flex justify-between items-center">
            <span className="font-semibold text-lg select-text px-3">{password}</span>
            <div className="flex items-center gap-x-4">
              {strength && (
                <Chip color={chipVarient[strength]} variant="flat" className="dark">{passwordStrength[strength]}</Chip>
              )}
              <RefreshCw className="cursor-pointer hover:scale-80 transition-transform" onClick={() => generatePassword()} />
            </div>
          </div>
          <Button color="primary" onClick={handleCopyToClipBoard}>Copy</Button>
        </div>
        <div className="w-full max-w-2xl">
          <div className="mt-8 flex items-center justify-between">
            <p className="text-lg whitespace-nowrap">Password Length: <span className="ml-4 font-bold">{length}</span></p>
            <div className="flex gap-x-2 items-center">
              <Button radius="full" size="sm" isIconOnly color="primary" variant="bordered" onClick={handleDecrement}>
                <MinusIcon />
              </Button>
              <Slider size="lg" step={1} maxValue={43} minValue={4} value={length} onChange={(v) => setLength(v as number)} className="w-72 dark" />
              <Button radius="full" size="sm" isIconOnly color="primary" variant="bordered" onClick={handleIncrement}>
                <PlusIcon />
              </Button>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-lg whitespace-nowrap">Characters used: </p>
            <div className="flex gap-x-16 items-center">
              <Checkbox icon={<Check />} isSelected={useCapital} isDisabled={getCheckedCount() == 1 && useCapital} onChange={() => handleCheckBoxChange(useCapital, setUseCapital)} classNames={{ label: 'text-white text-lg font-bold' }}>ABC</Checkbox>
              <Checkbox icon={<Check />} isSelected={useSmall} isDisabled={getCheckedCount() == 1 && useSmall} onChange={() => handleCheckBoxChange(useSmall, setUseSmall)} classNames={{ label: 'text-white text-lg font-bold' }}>abc</Checkbox>
              <Checkbox icon={<Check />} isSelected={useNumbers} isDisabled={getCheckedCount() == 1 && useNumbers} onChange={() => handleCheckBoxChange(useNumbers, setUseNumbers)} classNames={{ label: 'text-white text-lg font-bold' }}>123</Checkbox>
              <Checkbox icon={<Check />} isSelected={useSymbols} isDisabled={getCheckedCount() == 1 && useSymbols} onChange={() => handleCheckBoxChange(useSymbols, setUseSymbols)} classNames={{ label: 'text-white text-lg font-bold' }}>#&$</Checkbox>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App