import React from 'react'

const styles = {
    search: `relative`,
    inputBox:`text-center mt-12 md:border-2 py-4 w-[670px] rounded-lg md:shadow-sm placeholder:text-center bg-transparent outline-none text-lg text-[#707070] placeholder-white`,
}

export default function SearchBox() {
    const [query, setQuery] = React.useState("");
  return (
    <div className={styles.search}>
        <input 
            className={styles.inputBox}
            type="text"
            value={query}
            placeholder="Search Weather for different location"
        />
    </div>
  )
}
