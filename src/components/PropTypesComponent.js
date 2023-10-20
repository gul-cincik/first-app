import PropTypes from 'prop-types'

const PropTypesComponent = ({title}) => {
    return (
        <header>
            <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
            {/* <h1 style={{heading style}}>{title}</h1> */}

        </header>
    )
}

PropTypesComponent.defaultProps = {
    title: 'Task Tracker',
}

PropTypesComponent.propTypes = {
    title: PropTypes.string.isRequired,
}

//OR heading style:
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default PropTypesComponent;