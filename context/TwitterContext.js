import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const TwitterContext = createContext()

export const TwitterProvider = ({children}) => {
    const [appStatus, setAppStatus] = useState('')
    const [currentAccount, setCurrentAccount] = useState('')

    const router = useRouter()

    useEffect(() => {
        checkIfWalletIsConnected()
    },[])

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          const addressArray = await ethereum.request({
            method: 'eth_accounts',
          })
          console.log(addressArray)
          if (addressArray.length > 0) {
              console.log(addressArray)
            setAppStatus('connected')
            setCurrentAccount(addressArray[0])
          } else {
            router.push('/')
            setAppStatus('notConnected')
          }
        } catch (err) {
            console.log(err)
          router.push('/')
          setAppStatus('error')
        }
      }

    const connectWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          setAppStatus('loading')
    
          const addressArray = await ethereum.request({
            method: 'eth_requestAccounts',
          })
    
          if (addressArray.length > 0) {
            setCurrentAccount(addressArray[0])
          } else {
            router.push('/')
            setAppStatus('notConnected')
          }
        } catch (err) {
          setAppStatus('error')
        }
      }

    return (
        <TwitterContext.Provider value={{appStatus,currentAccount,connectWallet}}>{children}</TwitterContext.Provider>
    )
}