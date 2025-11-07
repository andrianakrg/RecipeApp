import "./Header.css";

const Header = ({ query, setQuery, selectedMeal, setSelectedMeal, mealTypes, getData }) => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        getData();
    }

    return (
        <div className="headerWrapper">
            <h1>Search for recipe inspiration!</h1>
            <div className="formWrapper"> 
                <form onSubmit={handleSubmit} className="searchWrapper">
                    <input required
                        type="text"
                        placeholder="Search Recipe" 
                        value={query} 
                        onChange={(e)=> setQuery(e.target.value)}
                    />
                    <select 
                        name ="mealType" 
                        id="mealType"
                        value={selectedMeal} 
                        onChange={(e)=> setSelectedMeal(e.target.value)}
                    >
                        {mealTypes.map((mealType, index)=><option value={mealType} key={index}>{mealType}</option>)}
                    </select>  
                    <button type="submit">Search</button>
                </form>
                
            </div>
        </div>
    );
};

export default Header;
