import check from './check.png'

function MyFoodSearch({label, image, calories, ingredients, cuisine, meal}) {
    return(
        <div>
        <div className="container">
        <h2>{label}</h2>
        </div>

        <div className='container'>
        <h2 className='header'>{cuisine} - {meal}</h2>
        </div>

        <div className="container">
        <img src={image} alt='food'/>
        </div>

        <ul className="container list">
        {ingredients.map((ingredient,index) => (
            <li key={index}>
            <img className="icon" src={check} alt='icon'/>
                {ingredient}
            </li>
        ))}
        </ul>

        <div className="container">
        <h3>{calories.toFixed()} calories</h3>
        </div>

        </div>
    )
}
export default MyFoodSearch;