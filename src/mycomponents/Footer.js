import React from 'react'
import fstyle from '../mycomponents/Footer.module.css'

export default function Footer() {
    return (
        <div className="container-fluid mt-5" className={fstyle.border1} style={{ background: "blue", textAlign: "center", color: "white", padding: "10px" }}>
            <h2>Footer Works</h2>
        </div>
    )
}


