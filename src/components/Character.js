// Write your Character component here

const Character = (props) => {
    console.log("Character component props: " , props);
    // props.characters.map(() => console.log(props.characters.name))

    /* Important info:
    ** Name, birth_year, gender, height, mass, homeworld
    ** Maybe use the url property as a key for the loop?
    */
    return (
        props.characters.map((character, idx) => 
            <article >
                {/*  img */}
                <h2>{character.name}</h2>
                <p></p>
            </article>
        )
    )
}

export default  Character