import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'


function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie()
  }, [])

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie');


    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=7ddd3f587624467f81ef9c6be587a76b&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    }
  }


  return (
    <div>
      <Wrapper>
        <h3>Vegetarian picks</h3>
        <Splide options={{
          perPage: 3,
          breakpoints: {
            1024: {
              perPage: 2,
             
            },
            767: {
              perPage: 1,
          
            },
          
          },
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '5rem'
          
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <Gradient />
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              </ SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0 rem;
display: flex;
flex-direction: column;
text-align: center;
`
const Card = styled.div`

min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

// @media (max-width: 100px) {
//   width: 200%;
// }

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-wight: 600;
  font-siye: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
`;


export default Veggie