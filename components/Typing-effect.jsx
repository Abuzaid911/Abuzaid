"use client"

import { useState, useEffect } from "react"

export function TypingEffect({ words }) {
  const [currentWord, setCurrentWord] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const TYPING_SPEED = 150
  const DELETING_SPEED = 75
  const PAUSE_BEFORE_DELETING = 1000 // Pause before deleting
  const PAUSE_BEFORE_NEXT_WORD = 500 // Pause before next word

  useEffect(() => {
    const i = loopNum % words.length
    const fullWord = words[i]

    let timer

    if (isDeleting) {
      // Deleting effect
      timer = setTimeout(() => {
        setCurrentWord(fullWord.substring(0, currentWord.length - 1))
      }, DELETING_SPEED)

      if (currentWord === "") {
        setIsDeleting(false)
        setLoopNum((prev) => prev + 1)
      }
    } else {
      // Typing effect
      timer = setTimeout(() => {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1))
      }, TYPING_SPEED)

      if (currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETING)
      }
    }

    return () => clearTimeout(timer)
  }, [currentWord, isDeleting, loopNum, words])

  return <span className="text-primary font-semibold">{currentWord}</span>
}