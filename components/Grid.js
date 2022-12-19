import Card from './Card'
import styles from './Grid.module.scss'

const Grid = ({data}) => {
    return <div className={styles.grid}>
        {data.map((restaurant, index) => {
            return <Card key={index} data={restaurant.node}/>
        })}
    </div>
}
export default Grid;