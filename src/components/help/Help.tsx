import { FC } from 'react';
import styles from './Help.module.scss';

interface Help {
    closeHelp: () => void
}

const Help: FC<Help> = ({ closeHelp }) => {
    return (
        <>
            <div className={ styles.help }>
                <div className={ styles.content }>
                    <button className={ styles['close-button'] } onClick={ () => closeHelp() }>X</button>
                    <div className={ styles['help-text'] }>
                        <p className={ styles.text }>
                            Для того, чтобы шар покатился - необходимо нажать на него (или зажать и затем отпустить). 
                            Направление шара эквивалентно направлению участка шара по которому был сделан клик. 
                            <br/>
                            Для того, чтобы поменять цвет шара - необходимо нажать правой клавишей мыши по нему 
                            и выбрать нужный цвет из предоставленных.
                        </p>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Help;
