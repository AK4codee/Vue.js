const app = new Vue({
    el: '#app',
    data: {
        headerSetting:{
            mainImg: './images/722.png',
            subImg: './images/bottomRight.jpg'
        },
        pokemonData:{
            pokemonRequestApi: 'https://raw.githubusercontent.com/jacko1114/Homeworks/main/Pokemon/js/pokemons.json',
            pokemonArray: [],
            cardArray: []
        },
        pageSetting: {
            index: 0
        }
    },
    methods: {
        getPokemonData(){
            axios.get(this.pokemonData.pokemonRequestApi)
            .then((res) => {
                console.log(res)
                if(res.status == 200 && res.data.length != 0){
                    this.pokemonData.pokemonArray = res.data.map((item, index) => ({
                        index: index,
                        id: item.id.toString().padStart(3,'0'),
                        name: item.name.chinese,
                        hp: item.base.HP,
                        attack: item.base.Attack,
                        defense: item.base.Defense,
                        sp_attack: item.base['Sp_Attack'],
                        sp_defense: item.base['Sp_Defense'],
                        speed:  item.base.Speed,
                        img: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id.toString().padStart(3,'0')}.png`,
                        type: item.type,
                        evolution: item.evolution,
                        genus: item.genus
                    }))
                    console.log(this.pokemonData.pokemonArray)
                }
            })
            .catch((err) => {console.warn(err)})
        },
        addAllCards(){
            this.pokemonData.cardArray = this.pokemonData.pokemonArray
        },
        addOneCard(){
            this.pokemonData.cardArray.push(this.pokemonData.pokemonArray[this.pageSetting.index])
            this.pageSetting.index++
        },
        showPokemon(){}
    },
    created() {
        this.getPokemonData()
    }
})