import { Pokemon } from "../models/pokemon.m";

export async function getPokemons(): Promise<Pokemon[]>{
    /*TODO llamando a API REST.
    TODO API FETCH la API Fetch proporciona una interfaz JavaScript para acceder y manipular
    partes del canal HTTP, tales como peticiones y respuestas.*/
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    const datos = await response.json();
    const pokemons = datos.results.map((pokemon:any) => ({
        id: pokemon.national_number,
        name : pokemon.name,
        imggif: corregirNombre(pokemon.sprites['animated']),
        imgnormal: pokemon.sprites['normal'],
        imglarge: pokemon.sprites['large'],
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type: pokemon.type[0]

    }));
    const unicosPokemons = pokemons.filter(
        (pokemon:any, index:number)=>
        pokemons.findIndex((other:any) => other.id===pokemon.id) === index
    );
    return unicosPokemons;
}
/*Corregir textos con su nombre correcto*/
export function corregirNombre (name:string): string{
    if(name.includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd")
    }else if(name.includes("mr.-mime")){
        return name.replace("mr.-mime","mr-mime")
    }else if(name.includes("♂")){
        return name.replace("♂","-m")
    }else if(name.includes("♀")){
        return name.replace("♀","-f")
    }else{
        return name
    }
}