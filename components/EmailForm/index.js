import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

const EmailForm = () => {
    const [error, setError] = useState('');
    const onInvalid = useCallback((e) => {
        const { validationMessage, validity } = e.target;
        if (!!validationMessage === false) {
            return ;
        }
        setError(validity.valueMissing ?
            'Whoops! It looks like you forgot to add your email'
            : 'Please provide a valid email address');
        e.preventDefault();
    }, []);

    return (
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
                <input className={cn(styles.input, {
                    [styles.invalid]: error,
                })}
                       name={'email'}
                       type={'email'}
                       placeholder={'Your email address...'}
                       required
                       onInvalid={onInvalid}
                />
                {error && (
                    <>
                        <div className={styles.error}>
                            {error}
                        </div>
                    </>
                )}
            </div>
            <button className={styles.submitButton}
                    aria-label={'notify me'}
                    type={'submit'}
            >
                Notify Me
            </button>
        </form>
    );
};

export default EmailForm;
