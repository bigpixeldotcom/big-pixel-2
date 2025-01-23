'use client'
 
import { createContext, useState, useContext } from 'react'

type HoverProps = {
  face: string;
  setFace: (face: string) => void;
  url: string;
  setUrl: (url: string) => void;
};
 
export const HoveredLinkContext = createContext<HoverProps>({
  face: 'front',
  setFace: () => {},
  url: '/',
  setUrl: () => {},
})
 
export default function HoveredLinkProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [face, setFace] = useState('front')
  const [url, setUrl] = useState('/')

  return (
    <HoveredLinkContext.Provider
      value={{ face, setFace, url, setUrl }}
    >
      {children}
    </HoveredLinkContext.Provider>
  )
}

export function useHoveredLink() {
  return useContext(HoveredLinkContext)
}