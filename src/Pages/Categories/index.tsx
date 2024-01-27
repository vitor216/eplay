import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFight2GamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: ActionGames } = useGetActionGamesQuery()
  const { data: Fight2Games } = useGetFight2GamesQuery()
  const { data: FightGames } = useGetFightGamesQuery()
  const { data: RpgGames } = useGetRpgGamesQuery()
  const { data: SimulationGames } = useGetSimulationGamesQuery()
  const { data: SportGames } = useGetSportGamesQuery()

  if (
    ActionGames &&
    Fight2Games &&
    FightGames &&
    RpgGames &&
    SimulationGames &&
    SportGames
  ) {
    return (
      <>
        <ProductsList
          games={ActionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={RpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={SimulationGames}
          title="Simulaççao"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={SportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={FightGames}
          title="Lutas"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={Fight2Games}
          title="Lutas2"
          background="black"
          id="fight2"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
