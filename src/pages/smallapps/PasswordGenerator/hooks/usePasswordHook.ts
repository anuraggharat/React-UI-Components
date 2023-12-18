import { useState } from "react";

const usePassword = () => {

    const [password,setPassword] = useState<string>('')
    const [strength,setStrength] = useState('')
    const [error,setError] = useState('')
    const generatePassword = (length:number,passwordContains:any) =>{
        let charset = '';
        let passwordString = '';
        setError("")
        if (length === 0 ) {
            setError("Cannot create a password or Length 0")
            return
        }
        for (const key in passwordContains) {
           if (passwordContains[key] === true) {
                switch(key){
                    case 'uppercase':
                        charset = charset + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
                        break
                    case 'lowercase':
                        charset = charset + 'abcdefghijklmnopqrstuvwxyz' 
                        break
                    case 'numbers':
                        charset = charset + '0123456789' 
                        break
                    case 'symbols':
                        charset = charset + '@#$%^*()!+=' 
                        break
                    default:
                        setError("something went wrong")
                        break
                }
           }
        }
        if (charset.length === 0) {
            setError("Please select one option")
            return
        }
        for(let i =0; i < length ; i++){
            passwordString = passwordString + charset[Math.floor(Math.random() * charset.length)]
        }
        if (passwordString.length >= 0 && passwordString.length <= 4) {
            setStrength('LOW')
        }
        else if (passwordString.length >= 5 && passwordString.length <= 8) {
            setStrength('MEDIUM')
        }
        else if (passwordString.length >= 9 && passwordString.length <= 12) {
            setStrength('HIGH')
        }
        else if (passwordString.length >= 13 && passwordString.length <= 16) {
            setStrength('VERY HIGH')
        }
        setPassword(passwordString)
    }
    return {password,strength,error,generatePassword}

}

export default usePassword