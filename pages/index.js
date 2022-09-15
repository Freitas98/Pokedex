import Image from 'next/image'
import PokemonCard from '../components/PokemonCard';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const maxPokemons = 251;

  const api = "https://pokeapi.co/api/v2/pokemon/";

  const rest = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await rest.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home( {pokemons} ) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Baptista<span>Dex</span>
        </h1>
        <Image 
          src="/images/pokeball.png"
          width="50" 
          height="50"
          alt="Pokeball"
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
