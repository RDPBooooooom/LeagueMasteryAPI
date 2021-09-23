import { LolApi, Constants } from 'twisted'

const api = new LolApi()

export async function summonerByNameExample () {
  return await api.Summoner.getByName('Hide on bush', Constants.Regions.KOREA)
}