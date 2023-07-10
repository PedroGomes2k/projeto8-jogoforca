import { useState } from "react"



export default function Letras() {

    const [wordChose, setWordChose] = useState([])
    const [disabled, setDisabled] = useState("")

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    function ChoseLetter(i) {
        const chose = [i, wordChose]
        setWordChose(chose)
       
        console.log(chose)
    }



    return (
        <div className="botao ">
            {alfabeto.map((word) =>

                <button onClick={() => ChoseLetter(word)} disabled={wordChose.includes(word)} key={word}  data-test="letter">
                    {word}
                </button>

            )}
        </div>
    )
}
/*
const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 70px auto;

    width:664px;
    height:91px;
    
`
const Button = styled.button`
    align-items: center;

    background-color: #E1ECF4;
    color:#7AA7C7;

    font-family: 'Roboto', sans-serif;
    
    font-size: 16px;
    font-weight:bold;

    width: 40px;
    height:40px;

    border:1px solid #7AA7C7;
    border-radius: 3px;
    margin: 0px 8px 10px 3px;
`
const Disabled = styled.div`
    align-items: center;

    background-color: #9FAAB5;
    color: #798A9F;

    font-family: 'Roboto', sans-serif;

    font-size: 16px;
    font-weight:bold;

    width: 40px;
    height:40px;

    border:1px solid #7AA7C7;
    border-radius: 3px;
    margin: 0px 8px 10px 3px;
 `
*/
