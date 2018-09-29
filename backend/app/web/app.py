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
async def riot(path):
    """
    Specific end point for riot
    """
    return send_from_directory(
        app.static_folder,
        'riot.txt')


@app.route('/', methods=['POST', 'GET'])
async def hello():
    """
    An async call serving POST requests from the frontend
    Each request handled is sent to Neo4j for possible modifications
    rtype -> None
    """
    if request.method == 'POST':
        data = await request.get_data()
        res = json.loads(data)

    if request.method == 'GET':
        return 'Ho'


if __name__ == '__main__':
    app.run(debug=True,
            port=80,
            host='0.0.0.0')
