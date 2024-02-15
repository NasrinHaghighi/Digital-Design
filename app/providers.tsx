'use client'
import { ThemeProvider } from "next-themes"

function Providers({children}:React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="classs">{children}</ThemeProvider>
  )
}

export default Providers