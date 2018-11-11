import requests

def verify_summoner(summonerNameDecoded):
    base = 'https://euw1.api.riotgames.com/'
    summonerNameEndPoint = 'lol/summoner/v3/summoners/by-name/'

    headers = {
        "Origin": "",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": "RGAPI-d254bc32-739d-42e0-9c2d-bf1c97bc0c88",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
    }
    r = requests.get(
        f'{base}{summonerNameEndPoint}{summonerNameDecoded}',
        headers=headers )
    
    if r.ok:
        return True
    else:
        return False