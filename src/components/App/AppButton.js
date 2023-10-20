import React from "react";
import PropTypes from "prop-types"
// const AppButton = () => {

//     return <button className='btn'>Ekle</button>
// }

const AppButton = ({color, text}) => {

    return (
        <button style={{backgroundColor: color}} className='btn'>{text} </button>

    )
}

AppButton.defaultProps = {
    color : 'blue'
}


AppButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default AppButton;