import React , {useState , useEffect} from 'react'
import { useTranslation } from 'react-i18next'


const LanguageRadio = () => {
    const { t, i18n } = useTranslation()
    const [state, setState] = useState('en')
    useEffect(() => {
        if(localStorage.getItem('language') === 'en'){
            localStorage.setItem('direction' , 'ltr');
            localStorage.setItem('align' , 'left');
        } else {
            localStorage.setItem('i18nextLng' , 'ur')
            localStorage.setItem('direction' , 'rtl');
            localStorage.setItem('align' , 'right');
        }
       
    },[])
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        if(event.target.value === 'en'){
            localStorage.setItem('language' , event.target.value);
            localStorage.setItem('direction' , 'ltr');
            localStorage.setItem('align' , 'left');
            setState('en')
        } else {
            localStorage.setItem('language' , event.target.value);
            localStorage.setItem('direction' , 'rtl');
            localStorage.setItem('align' , 'right');
            setState('ur')

        }
    }

    return (
        <div onChange={changeLanguage}>
            <input type="radio" value="en" name="language" /> English
            <input type="radio" value="ur" name="language" /> Urdu
        </div>
    )
}

export default LanguageRadio;