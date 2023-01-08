import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const Recipe = () => {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    let params = useParams();

const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=7ddd3f587624467f81ef9c6be587a76b`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
    
}

useEffect(() => {
    fetchDetails();
}, [params.name])

    return ( <DetailWrapper>
        <div className="pic">
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <BtnWraper>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                Instructions
            </Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
                Ingredients
            </Button>
            </BtnWraper>
          
            {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
               </div>

            )};

            {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}
               </ul>
            )}
            </Info>

    </DetailWrapper>  );
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
gap: 5rem;

.pic {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.active{
    background: linear-gradient(45deg, #494949, #313131);
    color: white;
}
h2{
    margin-top: 2rem;
    margin-bottom: 2rem;
    // margin-right: -8rem;
}
li {
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;

}

@media screen and (max-width: 1388px){
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 3rem;
    align-items: center;
    text-align: center;

    @media (max-width: 600px) {
        img {
        width: 120%;
        }

        h3 {
            margin: 2rem 2rem;
            width: 80%;
        }

    }

    
}
`

const BtnWraper = styled.div`
@media screen and (max-width: 900px){
    display: flex;
}
`

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
cursor: pointer;

`

const Info = styled.div`

display: flex;
flex-direction: column;
align-items: center;

h3 {
    text-align: justify;
}



@media (max-width: 600px){
    margin: 0 auto;
    
    h3{
        font-size: 1rem;
    }
}

@media (max-width: 400px){
h3 {
    font-size: 0.8rem;
}
}




`
 
export default Recipe;