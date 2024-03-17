import { useState } from 'react';
import styles from './styles/searchBar.module.css';

const CustomSearchBar = ({ placeholder, data }: CustomSearchBar) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { name: string }) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const wordSelected = (event: any) => {
    const newWord = event.target.innerText;
    setWordEntered(newWord);
    setFilteredData([]);
  };

  return (
    <div className={`${styles.search}`}>
      <div className={`${styles.searchInputs}`}>
        <input
          className={`${styles.searchMenu} py-[0.8125rem] pl-[1.5rem] sm:pl-[1.5rem] sm:pr-[0] rounded-[1.875rem] pr-[6.0625rem] w-[20.4375rem] sm:w-[31.9375rem] text-[1rem] sm:text-[1.5rem] tracking-[0.02em] leading-[1.5rem] font-normal`}
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          value={wordEntered}
        />
      </div>
      {filteredData.length != 0 && (
        <div className={`${styles.dataResult}`}>
          {filteredData.slice(0, 5).map((value: { name: string }, index) => {
            return (
              <span className={`${styles.dataItem}`} key={index}>
                <p onClick={wordSelected}>{value.name}</p>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSearchBar;
