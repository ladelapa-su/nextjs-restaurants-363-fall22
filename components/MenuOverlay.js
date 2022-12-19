import ButtonUI from './ButtonUI'
import styles from './MenuOverlay.module.scss'

const MenuOverlay = ( { closeHandler }) => {
    return <div className={styles.menuOverlay}>
        <h1>Menu Overlay</h1>
        <ButtonUI
            icon="close"  
            clickHandler={closeHandler}/>
    </div>
}
export default MenuOverlay