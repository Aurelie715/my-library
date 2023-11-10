import React from 'react'

export default function MyBookSearchBar({onSearchMyBookTextChange}) {
  return (
    <div>
        <form>
            <input type='text' placeholder="chercher" onChange={(e) => onSearchMyBookTextChange(e.target.value)}/>
        </form>
    </div>
  )
}
