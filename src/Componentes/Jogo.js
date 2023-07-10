import { useState } from "react";
import Letras from "./Letras";
import { styled } from "styled-components";
import palavras from "./Palavras";

export default function Jogo() {

    const [image, setImage] = useState("../assets/forca0.png")

    const [line, setLine] = useState("")

    


    function ChoseWord() {
        const word = Math.floor(Math.random() * palavras.length)
        const choseWord = (palavras[word])
        
        const lines = choseWord.split('')

        const line = lines.map(l => '_ ')
        
        setLine(line)

       
    }

  


    return (
        <>
            <Container>
                <Box>
                    <Image src={image} data-test="game-image"></Image>
                    <Button onClick={()=> ChoseWord()} data-test="choose-word"> Escolher Palavra</Button>

                </Box>
                <LineWord data-test="word"> {line}</LineWord>
                <Letras />
            </Container>
        </>

    )
}

const Container = styled.div`
    width:  1025px;
    margin: 30px auto;
    background-color:#FFFFFF;
    
`
const Box = styled.div`
    display: flex;
    justify-content:space-between;

`

const Image = styled.img`
    width: 400px;
    height:467px;

`


const Button = styled.button`
    width: 200px;
    height:60px;

    color: #FFFFFF;
    background-color:#27AE60;

    align-items:center;

    border-radius: 6px ;
    border: #27AE60;

    font-weight: 700;
    font-size: 20px;

    margin-top: 20px;
`
const LineWord = styled.div`
    display:flex;
    margin-right: 50px;

    font-family: 'Roboto', sans-serif;
    font-size:50px;

    color : #000000;
    justify-content:flex-end;
`

const Disable = styled.button`
    background-color: #9FAAB5;
    color:#798A9F;

`


