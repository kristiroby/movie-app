$(() => {
//drop downs


$('.list').on('click', (event) => {
    $(event.target).find('.category').show();
}) 
$('.category').on('click', (event) => {
    $(event.target).parent().hide();
    console.log($(event.target).attr('name'));
}) 
//$(event.currentTarget).parent().text) = 
// const $movies = $('<ul>')
// $('#movieslist').append($movies)

//     $.ajax({
//         url: "https://api.themoviedb.org/3/discover/movie?api_key=384794ce6f644a69db436d8258dc9352&language=en-US&sort_by=vote_average.desc&certification_country=US&include_adult=false&include_video=false&page=1",
//         data: {
          
//         //     "agency": "NYPD",
//         //     "borough": $selectedBorough,
//         // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODQ3OTRjZTZmNjQ0YTY5ZGI0MzZkODI1OGRjOTM1MiIsInN1YiI6IjVkMzA5MTg2MmY4ZDA5NDUyMmQyNTRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6A12R5YKKFQe8v8CTLy0UaG5gnBJdBjL9_Ql_-4hK7Q
//         }        
//     }).then(
//        (data) => {
//         for (let i = 0; i < data.results.length; i++) {
//             const $title = $('<li>').text(data.results[i].title).addClass('title')
//                 $movies.append($title)
        // console.log(data.results[i].title)
        // }

        
        // },
        // (error) => {
        //     console.log(error)
        // }
    //     event.preventDefault();
    // )
    // })
    // });
});
        // $('#title').html(data.title);
                // $('#year').html(data.release_date);
                //$('#rated').html(data.Rated);
            // for (var i = 0; i < $numberOfRecords; i++) {
            //     const $li = $('<li>').text(data[i].descriptor).addClass('descriptor')
            //     const $res = $('<li>').text(data[i].resolution_description).addClass('resolution')
            //     $complaints.append($li)
            //     $li.append($res)
            //     const $resolutionBtn = $('<button>').text('What did the police do?').addClass('police')
            //     $li.append($resolutionBtn)