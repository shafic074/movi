document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const movie = params.get("movie");

    if (movie) {
        document.getElementById("movie-title").innerText = movie.replace("-", " ");
        document.getElementById("movie-source").src = `videos/${movie}.mp4`; // Store your videos in a "videos" folder
        document.getElementById("movie-player").load();
    } else {
        document.getElementById("movie-title").innerText = "Movie Not Found";
    }
    
});



