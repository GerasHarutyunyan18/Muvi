import React, { ReactNode, createContext, useState } from 'react';
import { Notification } from '../../constants/types';
import styles from './notification.module.scss'
import Image from 'next/image';
import successIcon from '../../public/icons/successIcon.svg'
import errorIcon from '../../public/icons/errorIcon.svg'
import closeIcon from '../../public/icons/closeIcon.svg'


interface ContextProps {
    Notification: (message: string, duration: number, success: boolean) => void;
}

export const NotificationContext = createContext<ContextProps | null>(null);

type NotificationProviderProps = {
    children: ReactNode;
};


export const NotificationProvider = ({ children }: NotificationProviderProps) => {
    const [notification, setNotification] = useState<Notification | null>(null);
    const [show, setShow] = useState<boolean>(false)
    const Notification = (message: string, duration: number = 3000, success: boolean) => {
        setNotification({ message, duration, success });
        setShow(true)
        setTimeout(() => {
            setNotification(null);
            setShow(false)
        }, duration);
    };

    const handleClose = (): void => {
        setNotification(null)
        setShow(false)
    }

    const contextValue: ContextProps = {
        Notification,
    };

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}

            <div className={`${styles.notification} ${show && styles.show}`}>
                <div>
                    <Image src={notification?.success ? successIcon : errorIcon} width={20} height={20} alt='' />
                    <p>{notification?.message}</p>
                </div>
                <Image onClick={handleClose} className={styles.closeIcon} src={closeIcon} width={20} height={20} alt='' />
            </div>
        </NotificationContext.Provider>
    );
};
