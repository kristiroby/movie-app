$(() => {
    let $genre = "";
    let $rating = "";
    const $summary = $('<h5>').text('Click for summary')
    //show drop down
    $('#rating_head').on('click', (event) => {
        $(event.target).find('.rating_category').show();
    })
    //get rating and hide drop downs
    $('.rating_category').on('click', (event) => {
        $(event.target).siblings().hide();
        $rating = $(event.target).attr('id');
    })
    //show drop down
    $('#genre_head').on('click', (event) => {
        $(event.target).find('.genre_category').show();
    })
    //get genre and hide drop downs
    $('.genre_category').on('click', (event) => {
        $(event.target).siblings().hide();
        $genre = $(event.target).attr('id');
    })    
    //create movie list
    const $movies = $('<ul>');
    $movies.addClass('movies')
    $('#movieslist').append($movies);
    //click movie list, clear list of movies, add year
    $('form').on('submit', (event) => {
        $movies.empty();
        event.preventDefault();
        const $year = ($('input[type="text"]').val());
    //api call with user selected genre rating and year    
    $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie?api_key=384794ce6f644a69db436d8258dc9352&language=en-US&sort_by=vote_average.desc&certification_country=US&include_adult=false&include_video=false&page=1&year=" + $year + "&certification=" + $rating + "&with_genres=" + $genre,
    //show list of movies
    }).then(
        (data) => {
            for (let i = 0; i < data.results.length; i++) {
                $movies.prepend($summary)
                const $title = $('<li>').text(data.results[i].title).addClass('title')
                $movies.append($title)
                $title.addClass("row")
            
            $title.on('click', (event) => {
                let $index = $(event.target).index()
                console.log($index)
                let $plot = data.results[$index-1].overview
                alert($plot)
            })
        }
        },
        (error) => {
            console.log(error)
        },
    )




});
})