import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import TippyHead from '@tippyjs/react/headless';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import useDebounce from '~/hooks/useDebounce';
import * as searchServices from '~/Services/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showInput, setshowInput] = useState(true);
    const [loading, setloading] = useState(false);
    const userefSearch = useRef();
    const debounced = useDebounce(searchValue, 600);
    const handleClear = () => {
        setsearchValue('');
        userefSearch.current.focus();
        setsearchResult([]);
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setsearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setloading(true);
            const result = await searchServices.search(debounced);
            setsearchResult(result);
            setloading(false);
        };

        fetchApi();
    }, [debounced]);

    return (
        <div>
            <TippyHead
                visible={searchResult.length > 0 && showInput}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem data={searchResult} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setshowInput(false)}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={userefSearch}
                        placeholder="Search accounts add videos"
                        spellCheck={false}
                        onChange={(e) => {
                            setsearchValue(e.target.value);
                        }}
                        onFocus={() => setshowInput(true)}
                        onKeyDown={(e) => {
                            if (e.key === ' ' && searchValue.length < 1) {
                                e.preventDefault();
                            }
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHead>
        </div>
    );
}
export default Search;
