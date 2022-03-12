import React from 'react'

function NavbarParts({ name, Buying, Selling, Change }) {
    return (
        <div>
            <p data-testid="name">
                {name}
            </p>
            <p data-testid="buy">
                Alış:{Buying}
            </p>
            <p data-testid="sell">
                Satış:{Selling}
            </p>
            <p >
                Değişim:
                <span data-testid="change" style={Change.indexOf("-%") === -1 ? { color: "green" } : { color: "red" }}>
                    {Change}
                </span>
            </p>
        </div>
    )
}
export default NavbarParts;