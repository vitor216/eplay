import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFight2GamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Promocoes = () => {
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
        <ProductsList games={ActionGames} title="Ação" background="gray" />
        <ProductsList games={RpgGames} title="RPG" background="black" />
        <ProductsList
          games={SimulationGames}
          title="Simulaççao"
          background="gray"
        />
        <ProductsList games={SportGames} title="Esportes" background="black" />
        <ProductsList games={FightGames} title="Lutas" background="gray" />
        <ProductsList games={Fight2Games} title="Lutas2" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Promocoes
