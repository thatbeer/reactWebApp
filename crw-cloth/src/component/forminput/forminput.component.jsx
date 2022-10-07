import './forminput.styles.scss';


const FormInput = ({label , ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : '' } form-inut-label`}>
                    {label}
                </label>
            )}
        </div>
    )
};

export default FormInput;