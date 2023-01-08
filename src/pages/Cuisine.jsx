import styled from "styled-components";
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react";



const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7ddd3f587624467f81ef9c6be587a76b&cuisine=${name}`)
    const recipes = await data.json();
    setCuisine(recipes.results)
}

useEffect(()=>{
    getCuisine(params.type)
    console.log(params.type);
}, [params.type]);

    return ( 

        <Grid
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{diration: 0.5}}
        >
            {cuisine.map((item)=> {
                return(
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    );
}

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;

`

const Card = styled.div`
img{
  border-radius: 2rem;
  width: 100%;
  
}

a{
    text-decoration: none;
}

h4{
    text-align:center;
    padding: 1rem;
}
`
 
export default Cuisine;