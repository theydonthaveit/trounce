"""
Quart Server for backend to server template changes
to the Neo4j docker instance
"""
import json

from quart import Quart, request, send_from_directory
from quart_cors import cors

app = Quart(__name__, static_folder="")
app = cors(app)


@app.route('/riot', methods=['GET'])
async def riot():
    """
    Specific end point for riot
    """
    return 'data'
    # send_from_directory(
    #     app.static_folder,
    #     'riot.txt')

 
@app.route('/verify-summoner', methods=['POST'])
async def verify_summoner():
    """
    An async call serving POST requests from the frontend
    Each request handled is sent to Neo4j for possible modifications
    rtype -> None
    """
    if request.method == 'POST':
        data = await request.get_data()
        print(data)
        return 'things'


    # let base = 'https://euw1.api.riotgames.com/'
    # let summonerName = 'lol/summoner/v3/summoners/by-name/'

# headers: {
#                         "Origin": "",
#                         "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
#                         "X-Riot-Token": "RGAPI-d254bc32-739d-42e0-9c2d-bf1c97bc0c88",
#                         "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
#                         "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
#                     }

if __name__ == '__main__':
    app.run(debug=True,
            port=80,
            host='0.0.0.0')
