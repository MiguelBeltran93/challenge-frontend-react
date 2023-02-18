import {useEffect, useState} from "react";
import SearchBarComponent from "../search-bar.component";
import './box-search.component.css';
import { useSelector, useDispatch } from 'react-redux';
import {getProductsActionAsync} from "../../../store";
import { useNavigate } from 'react-router-dom';

const BoxSearchComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const searchActionHandle = (keyWord='') =>{
      dispatch(getProductsActionAsync(keyWord));
      navigate(`/items?search=${keyWord}`);
  }

  return(
      <div className={'box-search-container'} data-testid="box-search-component-test">
          <div className={'box-search-logo'} onClick={()=>{navigate(`/`);}} data-testid="logo-box-search-component-test">
          </div>
          <div className={'box-search-component'} >
              <SearchBarComponent searchAction={searchActionHandle} placeHolderBar={'Buscar productos, marcas y mas...'}/>
          </div>
      </div>
  );
}

export default BoxSearchComponent;
