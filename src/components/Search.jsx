import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault();
      navigate('/searched/'+ input);
      setInput('');
    }

  

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
               <FaSearch onClick={submitHandler} />
               <input type="text"
                       value={input}
                        onChange={(e) => {
                        setInput(e.target.value);
                    }} />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`

margin: 0rem 20rem;
display: flex;

@media (max-width: 1124px){
    // width: 50%;
    margin: auto;
}


div {
    width: 100%;
    position: relative;
}

input {
    
    border: none;
    background: linear-gradient(45deg, #494949, #313131);
    font-siye: 1rem;
    color: white;
    padding: 1rem 3rem;
    outline: none;
    border-radius: 2rem;
    width: 100%;
    margin-bottom: 2rem;
}

svg{
    position: absolute;
    top: 32%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}

@media (max-width: 600px){
   div {
    width: 150%;
    margin: auto;
   } 

   input {
       font-size 18px;
   }
}
`

export default Search;