import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
           @Software-Home {(new Date().getFullYear())}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
