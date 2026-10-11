
// =========================================================
// SONG DATA
// =========================================================

const songs = [

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        image: "images/song1.jpg",
        music: "songs/song1.mp3",

        lyrics: [
            "I found a love for me",
            "Darling just dive right in and follow my lead",
            "Well, I found a girl, beautiful and sweet",
            "Oh, I never knew you were the someone waitin' for me",
            "'Cause we were just kids when we fell in love, not knowin' what it was",
            "I will not give you up this time",
            "Darling, just kiss me slow, your heart is all I own",
            "And in your eyes, you're holding mine",
            "Baby, I'm dancin' in the dark with you between my arms",
            "Barefoot on the grass, listenin' to our favourite song",
            "When you said you looked a mess, I whispered underneath my breath",
            "But you heard it", 
            "Darling you look perfect tonight",
            "Well, I found a woman, stronger than anyone I know",
            "She shares my dreams, I hope that someday, I'll share her home",
            "I found a love to carry more than just my secrets",
            "To carry love, to carry children of our own",
            "We are still kids, but we're so in love, fighting against all odds",
            "I know we'll be alright this time",
            "Darling, just hold my hand be my girl", 
            "I'll be your man",
            "I see my future in your eyes",
            "Baby, I'm dancin' in the dark with you between my arms",
            "Barefoot on the grass, listenin' to our favourite song",
            "When I saw you in that dress, lookin' so beautiful",
            "I don't deserve this, darling, you look perfect tonight",
            "No, no, no",
            "Mm-hm",
            "Baby, I'm dancin' in the dark with you between my arms",
            "Barefoot on the grass, listenin' to our favourite song",
            "I have faith in what I see, now I know I have met",
            "An angel in person, and she looks perfect",
            "I don't deserve this, you look perfect tonight",
        ]
    },


    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        image: "images/song2.jpg",
        music: "songs/song2.mp3",

        lyrics: [

            "The club isn't the best place to find a lover",
            "So the bar is where I go (mm)",
            "Me and my friends at the table doing shots",
            "Drinking fast and then we talk slow (mm)",
            "Come over and start up a conversation with just me",
            "And trust me I'll give it a chance now (mm)",
            "Take my hand, stop, put Van the Man on the jukebox",
            "And then we start to dance, and now I'm singing like",
            "Girl, you know I want your love",
            "Your love was handmade for somebody like me",
            "Come on now, follow my lead",
            "I may be crazy, don't mind me",
            "Say, boy, let's not talk too much",
            "Grab on my waist and put that body on me",
            "Come on now, follow my lead",
            "Come, come on now, follow my lead, mm",
            "I'm in love with the shape of you",
            "We push and pull like a magnet do",
            "Although my heart is falling too",
            "I'm in love with your body",
            "And last night you were in my room",
            "And now my bedsheets smell like you",
            "Every day discovering something brand new",
            "I'm in love with your body",
            "(Oh-I-oh-I-oh-I-oh-I) ///",
            "Every day discovering something brand new",
            "I'm in love with the shape of you",
            "One week in we let the story begin",
            "We're going out on our first date (mm)",
            "You and me are thrifty, so go all you can eat",
            "Fill up your bag and I fill up a plate (mm)",
            "We talk for hours and hours about the sweet and the sour",
            "And how your family is doing okay (mm)",
            "And leave and get in a taxi, then kiss in the backseat",
            "Tell the driver make the radio play, and I'm singing like",
            ]
        },


        {
            title: "Faded",
            artist: "Alan Walker",
            image: "images/song3.jpg",
            music: "songs/song3.mp3",

            lyrics: [

                "You were the shadow to my light",
                "Did you see us?",
                "Another star, you fade away",
                "Afraid our aim is out of sight",
                "Wanna see us, alive",
                "Where are you now?",
                "Where are you now?",
                "Where are you now?",
                "Was it all in my fantasy?",
                "Where are you now?",
                "Were you only imaginary?",
                "Where are you now?",
                "Atlantis",
                "Under the sea",
                "Under the sea",
                "Where are you now?",
                "Another dream",
                "The monster's running wild inside of me",
                "I'm faded, I'm faded",
                "Yeah, I'm faded, I'm faded",
                "So lost, I'm faded",
                "And every single night I'm with a different girl",
                "Who would've knew that life could be a lonely world",
                "I'm reminiscing, missing everything we were",
                "So I could be with you, but I still think of her",
                "It's crazy how we don't even talk",
                "And I still think of you in every single place that I walk",
                "In my home, in my city, I guess you left a mark",
                "Ain't it funny how you miss the",
                "Brightest time when it's dark?",
                "But the love of my life just turn into anonymous",
                "So now you're a stranger that I don't wanna miss",
                "A stranger with all her clothes in my laundry bin",
                "All of her dresses, sweaters, and cardigans",
                "I should throw 'em out, I should just forget it",
                "The past can only hurt you if you let it",
                "But I let it, 'cus I'm still about you",
                "Life is fucking crazy but it's crazier without you",
                "Where are you now?",
                "Atlantis",
                "Under the sea",
                "Under the sea",
                "Under the sea",
                "Under the sea",
                "Where are you now?",
                "Another dream",
                "The monster's running wild inside of me",
                "I'm faded, I'm faded",
                "Yeah, faded, faded",
                "I'm so faded, faded",
                "I'm so faded, faded",
                "Faded, faded, faded"

        ]
    }

];


// GET HTML ELEMENTS

const audio =
    document.getElementById("audio");

const title =
    document.getElementById("title");

const artist =
    document.getElementById("artist");

const cover =
    document.getElementById("cover");

const playBtn =
    document.getElementById("play");

const prevBtn =
    document.getElementById("prev");

const nextBtn =
    document.getElementById("next");

const progress =
    document.getElementById("progress");

const currentTime =
    document.getElementById("current-time");

const duration =
    document.getElementById("duration");

const volume =
    document.getElementById("volume");

const lyrics =
    document.getElementById("lyrics");

const lyricsBox =
    document.getElementById("lyrics-box");

const lyricsSongTitle =
    document.getElementById("lyrics-song-title");

const playlistSongs =
    document.querySelectorAll(".song");


// CURRENT SONG

let songIndex = 0;


// LOAD SONG

function loadSong(index) {

    const song =
        songs[index];


    title.textContent =
        song.title;


    artist.textContent =
        song.artist;


    cover.src =
        song.image;


    audio.src =
        song.music;


    lyricsSongTitle.textContent =
        song.title;


    // Load Lyrics

    loadLyrics(index);


    // Update Playlist

    playlistSongs.forEach((item) => {

        item.classList.remove("active");

    });


    playlistSongs[index]
        .classList.add("active");

}

//LOAD LYRICS

function loadLyrics(index) {

    const song =
        songs[index];


    lyrics.innerHTML = "";


    song.lyrics.forEach((line, lineIndex) => {

        const lyricLine =
            document.createElement("div");


        lyricLine.classList.add(
            "lyric-line"
        );


        lyricLine.textContent =
            line;


        lyricLine.dataset.index =
            lineIndex;


        lyrics.appendChild(
            lyricLine
        );

    });


    // Scroll to top

    lyricsBox.scrollTop = 0;

}


// Load First Song

loadSong(songIndex);

//PLAY
function playSong() {

    audio.play()
        .then(() => {

            playBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        })
        .catch((error) => {

            console.log(
                "Audio could not be played:",
                error
            );

        });

}

//PAUSE

function pauseSong() {
    audio.pause();
    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

}


// PLAY / PAUSE
playBtn.addEventListener(
    "click",
    () => {
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    }
);


// NEXT SONG
function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    loadSong(songIndex);
    playSong();

}


nextBtn.addEventListener(
    "click",
    nextSong
);

// PREVIOUS SONG

function previousSong() {

    songIndex--;


    if (songIndex < 0) {

        songIndex =
            songs.length - 1;

    }
    loadSong(songIndex);
    playSong();

}

prevBtn.addEventListener(
    "click",
    previousSong
);

// PROGRESS BAR

audio.addEventListener(
    "timeupdate",
    () => {

        if (audio.duration) {

            const percent =
                (audio.currentTime /
                 audio.duration) * 100;


            progress.value =
                percent;

            currentTime.textContent =
                formatTime(
                    audio.currentTime
                );

            duration.textContent =
                formatTime(
                    audio.duration
                );
        }
    }
);


// CHANGE SONG POSITION

progress.addEventListener(
    "input",
    () => {
        if (audio.duration) {
            audio.currentTime =
                (progress.value / 100)
                * audio.duration;
        }

    }
);


// FORMAT TIME

function formatTime(time) {
    if (isNaN(time)) {
        return "0:00";
    }

   const minutes =
        Math.floor(time / 60);


    const seconds =
        Math.floor(time % 60)
        .toString()
        .padStart(2, "0");

   return `${minutes}:${seconds}`;

}


// VOLUME

volume.addEventListener(
    "input",
    () => {
        audio.volume =
            volume.value;

    }
);

// AUTOPLAY

audio.addEventListener(
    "ended",
    () => {
        nextSong();
    }
);

// PLAYLIST CLICK

playlistSongs.forEach(
    (song) => {
        song.addEventListener(
            "click",
            () => {

                songIndex =
                    Number(
                        song.dataset.index
                    );
                loadSong(songIndex);
                playSong();
            }
        );

    }
);

