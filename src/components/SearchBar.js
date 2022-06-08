import styles from './SearchBar.module.css'

const SearchBar=()=>{
    return <div className={styles.search}>
        <input type='text' placeholder='Search for groceries and more...' />
    </div>
}

export default SearchBar