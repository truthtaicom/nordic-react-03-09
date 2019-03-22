import React, { useState } from 'react';

export default function SearchWidget() {
  const [state, setState] = useState("")
  const onChange = (e) => {
    setState(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="shop-widget">
      <h3 className="shop-title">Search by</h3>
      <form className="shop-search" onSubmit={onSubmit}>
        <input type="text" placeholder="Your keyword...." onChange={onChange} />
        <button>
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  )
}