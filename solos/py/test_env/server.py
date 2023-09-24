from flask import Flask, make_response, url_for, render_template
from markupsafe import escape


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"


@app.errorhandler(404)
def not_found(error):
    resp = make_response(render_template("error.html"), 404)
    resp.headers["X-Something"] = "A value"
    return resp


@app.route("/me")
def me_api():
    user = get_current_user()
    return {
        "username": user.username,
        "theme": user.theme,
        "image": url_for("user_image", filename=user.image),
    }


@app.route("/users")
def users_api():
    users = get_all_users()
    return [user.to_json() for user in users]


def get_current_user():
    return {"username": "John", "theme": "dark", "image": "img.png"}


def get_all_users():
    return [
        {"username": "John", "theme": "dark", "image": "img.png"},
        {"username": "John", "theme": "dark", "image": "img2.png"},
    ]
