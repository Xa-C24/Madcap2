from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/association")
def association():
    return render_template("association.html")


@app.route("/histoire")
def histoire():
    return render_template("histoire.html")


@app.route("/don")
def restauration():
    return render_template("don.html")


@app.route("/evenements")
def evenements():
    return render_template("evenements.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True, port=5500)
