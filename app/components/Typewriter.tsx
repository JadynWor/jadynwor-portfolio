import { useTypewriter, Cursor } from "react-simple-typewriter"

interface Props {
  words: string[]
  loop?: boolean
  delaySpeed?: number
}

export function Typewriter({
  words,
  loop = false,
  delaySpeed = 2000,
}: Props) {
  const [text] = useTypewriter({
    words,
    loop,
    delaySpeed,
  })

  return (
    <h1 className="text-4xl font-bold">
      {text}
      <Cursor cursorStyle="|" />
    </h1>
  )
}
