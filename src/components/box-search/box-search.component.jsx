import {useState} from "react";
import axios from "axios";
import SearchBarComponent from "../commons/search-bar.component";
import './box-search.component.css';

const BoxSearchComponent = () => {

    const [state, setState] = useState();

  const searchActionHandle = (keyWord='') =>{
      axios.get(`http://localhost:3001/api/items?q=${keyWord}`).then(response =>{
          console.log(response.data);
          setState(response.data);
      })
  }
  return(
      <div className={'box-search-container'}>
          <div className={'box-search-logo'}>
          </div>
          <div className={'box-search-component'}>
              <SearchBarComponent searchAction={searchActionHandle} placeHolderBar={'Buscar productos, marcas y mas...'}/>
          </div>
      </div>
  );
}

export default BoxSearchComponent;
