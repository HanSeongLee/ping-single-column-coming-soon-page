import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

const EmailForm = () => {
    const [error, setError] = useState(false);
    const onInvalid = useCallback((e) => {
        const { validationMessage } = e.target;
        setError(!!validationMessage);
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
                            Please provide a valid email address
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
