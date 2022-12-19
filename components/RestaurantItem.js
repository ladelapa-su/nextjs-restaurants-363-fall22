const RestaurantItem = ({ data }) => { //props inside parentheses, corresponds w index
    const { name,  category } = data;
    return <article>
        <h3>{name}</h3>
    </article>
}
export default RestaurantItem