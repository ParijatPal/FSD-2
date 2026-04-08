from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="12345",
    database="student_db"
)

cursor = db.cursor(dictionary=True)

# ------------------ CREATE ------------------
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    name = data['name']
    age = data['age']
    course = data['course']

    query = "INSERT INTO student (name, age, course) VALUES (%s, %s, %s)"
    values = (name, age, course)

    cursor.execute(query, values)
    db.commit()

    return jsonify({"message": "Student added successfully"})

# ------------------ READ ALL ------------------
@app.route('/students', methods=['GET'])
def get_students():
    cursor.execute("SELECT * FROM student")
    result = cursor.fetchall()
    return jsonify(result)

# ------------------ READ ONE ------------------
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    query = "SELECT * FROM student WHERE id=%s"
    cursor.execute(query, (id,))
    result = cursor.fetchone()
    return jsonify(result)

# ------------------ UPDATE ------------------
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    name = data['name']
    age = data['age']
    course = data['course']

    query = "UPDATE student SET name=%s, age=%s, course=%s WHERE id=%s"
    values = (name, age, course, id)

    cursor.execute(query, values)
    db.commit()

    return jsonify({"message": "Student updated successfully"})

# ------------------ DELETE ------------------
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    query = "DELETE FROM student WHERE id=%s"
    cursor.execute(query, (id,))
    db.commit()

    return jsonify({"message": "Student deleted successfully"})

# Run server
if __name__ == '__main__':
    app.run(debug=True)