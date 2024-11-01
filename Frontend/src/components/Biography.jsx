import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className="container biography">
            <div className="banner">
                <img src={imageUrl} alt="about us" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam delectus in suscipit reprehenderit ut quod dolores necessitatibus labore molestiae perspiciatis molestias repellat, quisquam neque voluptatum, vero velit tempore quo illo dicta. Dicta nihil excepturi sit cum, consequatur neque tenetur error molestiae nostrum labore vitae nemo fugit? Ea, dolores excepturi! Porro.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, sed.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vel qui eum pariatur? Ullam alias sed aperiam deleniti? Illum nam, optio voluptates eaque laudantium praesentium enim consequatur officiis expedita magnam quo eum accusantium labore?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis.</p>
            </div>
        </div>
    )
}

export default Biography