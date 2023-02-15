import {useEffect, useState} from "react";
import SearchBarComponent from "../commons/search-bar.component";
import './box-search.component.css';
import { useSelector, useDispatch } from 'react-redux';
import {getProductsActionAsync} from "../../store";
import { useNavigate } from 'react-router-dom';

const BoxSearchComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [state, setState] = useState();

  const searchActionHandle = (keyWord='') =>{
      dispatch(getProductsActionAsync(keyWord));
      navigate(`/items?search=${keyWord}`);
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
