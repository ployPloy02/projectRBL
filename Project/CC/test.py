from flask import Flask , jsonify , request
import sqlite3


app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello, World!'

@app.route('/test', methods=['GET'])
def a():
    print(request.args.get('test'))
    return 'test'



@app.route('/pi', methods=['GET'])
def pi():
    return 'ressberrypi'

@app.route('/getData' , methods = ['GET'])
def testData():
    conn = sqlite3.connect('/User')
    return 'testaaaa'


# Endpoint to fetch data from the database
@app.route('/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect('/Users/matikahunbumrung/Desktop/Project/SQL/mydatabase.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM mytable")  # Replace 'your_table_name' with your actual table name
    rows = cursor.fetchall()
    conn.close()

    data_list = []
    for row in rows:
        data_dict = {
            'id': row[0],  # Assuming the first column is the ID
            'column1': row[1],  # Replace with your column names
            'column2': row[2],  # Replace with your column names
            # Add more columns as needed
        }
        data_list.append(data_dict)

    return jsonify({'data': data_list})


@app.route('/saveData', methods=['GET'])
def saveData():
    data = request.args.get('ploy')
    # print(request.args.get('test'))
    try:
    
        conn = sqlite3.connect('/Users/matikahunbumrung/Desktop/Project/SQL/mydatabase.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO mytable (name, age) VALUES (?, ?)', ("non", data))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Data inserted successfully.'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # app.run(debug=True,host='172.20.10.4',port=5000)
    app.run(debug=True)



