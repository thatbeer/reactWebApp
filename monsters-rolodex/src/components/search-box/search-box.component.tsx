import './search-box.styles.css';

import { ChangeEventHandler } from 'react';


const func: (a: string,b:number,c:boolean) => void = (a,b,c) => {}
/*
interface IChangeHandlerProps {
  onChangeHandler : (a: string) => void;
}

interface ISearchBoxProps {
  className : string;
  placeholder? : string | null;
}
*/

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  func: ChangeEventHandler;
  onChangeHandler: (event : ChangeEventHandler<HTMLInputElement>) => void;
}
/*
type CanadianAddress = {
  street: string;
  provinced: string
}
type UsAddress = {
  street: string;
  state: string
}

//union

type NorthAmericanAddress = CanadianAddress | UsAddress;

const Address : NorthAmericanAddress = {
  street : 'adas',
  state : 'asdsad',
}
*/

const SearchBox = ({ 
  className, 
  placeholder, 
  onChangeHandler 
} : SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
