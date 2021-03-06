"""
Quart Server for backend to server template changes
to the Neo4j docker instance
"""
import json
import requests

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
        summonerName = await request.get_data()
        summonerNameDecoded = summonerName.decode("utf-8", "ignore")

        

if __name__ == '__main__':
    app.run(debug=True,
            port=80,
            host='0.0.0.0')
