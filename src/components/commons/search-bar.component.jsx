import {useState, useEffect} from "react";


const SearchBarComponent = ({searchAction, placeHolderBar}) =>{

    const [keyWord, setKeyWord]= useState('');
    const search = window.location.search;
    const getParam = new URLSearchParams(search).get('search') || '';
    console.log('getParam',getParam);

    useEffect(()=>{
        getParam !=='' && searchAction(getParam);
    },[]);

    const setKeyWordItem = (inputKeyWord) => {
        inputKeyWord!==''&&
        searchAction(inputKeyWord);
    }

    const actionEnterKey = (event) =>{
        event.key === 'Enter' && setKeyWordItem(keyWord);
    }

    return(
        <div className="input-wrapper">
            <input type="search" className="input" placeholder={placeHolderBar}
                   onChange={event => {setKeyWord(event.target.value)}} onKeyDown={(event)=>{actionEnterKey(event)}} defaultValue={getParam!==''?getParam:''}/>

            <div onClick={()=>{setKeyWordItem(keyWord)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          />
                </svg>
            </div>

        </div>

    );
}

export default SearchBarComponent;
