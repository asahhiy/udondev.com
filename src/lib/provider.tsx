'use client'
import { Provider } from 'jotai';

export const JotaiProviders = ({ children }: React.PropsWithChildren) => {
  return <Provider>{children}</Provider>
}
