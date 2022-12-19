import classnames from 'classnames/bind'
import Link from 'next/link'
import styles from './Button.module.scss'

// let cx = classnames.bind(styles);

const Button = ( { 
        label = "default label",
        clickHandler,
        path,
        // type,
    }) => {
    //console.log({props});
        // let buttonClasses = cx({
        //     btn : true,
        //     primary : type === "primary",
        //     secondary : type === "secondary",
        //     // to make different types of button
        return path ? 
        <Link href={path} className={styles.btn}>
            {label}
        </Link>
        :
        <button className={styles.btn} onClick={clickHandler}>{label}</button>
}
export default Button