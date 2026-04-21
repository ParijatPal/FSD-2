from flask import Flask
from routes.student_routes import student_bp

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(student_bp)

    return app

app = create_app()

@app.route("/")
def home():
    return {"message": "Backend Server is running"}
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)