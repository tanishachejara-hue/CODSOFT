from flask import Flask, render_template, request
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Load data
data = pd.read_csv("data.csv")

# Vectorization
cv = CountVectorizer()
matrix = cv.fit_transform(data['genre'])
similarity = cosine_similarity(matrix)

# Recommendation function
def recommend(movie):
    if movie not in data['title'].values:
        return ["Movie not found!"]

    index = data[data['title'] == movie].index[0]
    distances = list(enumerate(similarity[index]))
    movies = sorted(distances, key=lambda x: x[1], reverse=True)[1:6]

    return [data.iloc[i[0]].title for i in movies]

@app.route("/", methods=["GET", "POST"])
def home():
    recommendations = []
    
    if request.method == "POST":
        movie = request.form["movie"]
        recommendations = recommend(movie)

    return render_template("index.html", movies=data['title'].tolist(), recommendations=recommendations)

if __name__ == "__main__":
    app.run(debug=True)