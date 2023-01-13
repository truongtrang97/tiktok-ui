import request from '../../utils/request.js';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {Wrapper as PopperWrapper} from '~/component/Propper';
import AccountItem from '~/component/AccountItem/';
import useDebounce from '~/hook/useDebounce';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loadingResults, setLoadingResults] = useState(false);
    const debounced =useDebounce(searchValue,500)
    // khi người dùng ngưng gõ 500mms thì giá trị debounced mới được update bằng searchValue
    const inputRef = useRef();
    useEffect(() => {
        if(!debounced.trim()){
            setSearchResults([])
            return;
        } 
        // trước khi gọi API 
        setLoadingResults(true)

        /*fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        .then(res=>res.json())//dong ni nó chuyển đổi json.parse thành js object //khi dùng axios bỏ lun
        .then(res=>{
            setSearchResults(res.data)
            // sau khi gọi API 
             setLoadingResults(false)
        .catch(()=>{
            setLoadingResults(false)
        })*/   

        // dùng thư viên

        request
        .get('users/search',{
            params:{
                q:debounced,
                type:'less'
            }
        })
        .then(res=>{
            // console.log(res)
            setSearchResults(res.data.data)
            // sau khi gọi API 
             setLoadingResults(false)
        .catch(()=>{
            setLoadingResults(false)
        })
        //  dùng lại : hàm (params)
             
        })
        
    }, [debounced]);
    const handleClose = () => {
        setsearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handlefocus = () => {
        setShowResults(true);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search_title')}>Account</h4>
                        {searchResults.map(result=>(
                            <AccountItem key={result.id} data={result}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResults(false)}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={inputRef}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={(e) => setsearchValue(e.target.value)}
                    onFocus={handlefocus}
                />
                {!!searchValue&& !loadingResults && (
                    <button className={cx('close')} onClick={handleClose}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loadingResults && (
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                )}
                <button className={cx('search_btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
