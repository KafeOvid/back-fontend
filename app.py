from flask import Flask, send_from_directory, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='static')

# Initialize SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:muskan17@localhost/signin'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the Employee model
class Employee(db.Model):
    __tablename__ = 'loginemp'
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100))
    username = db.Column(db.String(40), unique=True)
    password = db.Column(db.String(40))

    def __init__(self, fullname, username, password):
        self.fullname = fullname
        self.username = username
        self.password = password

# Create the database
def init_db():
    with app.app_context():
        db.create_all()

# Serve the main HTML file
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Serve static files
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

# API endpoint for signup
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    fullname = data.get('fullname')
    username = data.get('username')
    password = data.get('password')

    if not fullname or not username or not password:
        return jsonify({'error': 'Missing fields'}), 400

    existing_user = Employee.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400

    new_user = Employee(fullname, username, password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': f"User {username} signed up successfully!"}), 200

# API endpoint for login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Missing fields'}), 400

    user = Employee.query.filter_by(username=username, password=password).first()
    if user:
        return jsonify({'message': f"Welcome back, {username}!"}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

# Run the Flask application
if __name__ == '__main__':
    init_db()
    app.run(debug=True)
