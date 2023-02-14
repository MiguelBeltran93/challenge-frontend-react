import {useState} from "react";


const SearchBarComponent = ({searchAction, placeHolderBar, containerStyle}) =>{

    const [keyWord, setKeyWord]= useState('');

    const actionEnterKey = (event) =>{
        event.key === 'Enter' &&
        searchAction(keyWord);}

        // event.key === 'Enter' &&
        // searchAction(keyWord);
        // // searchAction(
        //     event && event.target && event.target.value ? event.target.value : ''
        // );

    return(
        <div className="input-wrapper">
            <input type="search" className="input" placeholder={placeHolderBar}
                   onChange={event => {setKeyWord(event.target.value)}} onKeyDown={(event)=>{actionEnterKey(event)}}/>

            <div onClick={()=>{searchAction(keyWord)}}>
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
