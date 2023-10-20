import PropTypes from 'prop-types'
import AppButton from './AppButton'

const AppHeader = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <button className='btn'>Add</button> */}
            {/* <AppButton/> */}
            {/* <AppButton color='green' text='Hello'/> */}
            <AppButton color='green' text='Ekle' />
            {/* <AppButton color='blue' text='Hello' />
            <AppButton color='red' text='Hello' /> */}

        </header>
    )
}

AppHeader.defaultProps = {
    title: 'Yapılacaklar',
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default AppHeader;