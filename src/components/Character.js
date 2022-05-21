// Write your Character component here

const Character = (props) => {
    console.log("Character component props: " , props.characters);
    // props.characters.map(() => console.log(props.characters.name))

    /* return (
        props.characters.map(() => 
            <article>
                <h3>{props.characters.name}</h3>
            </article>
        )
    ) */
}

export default  Character