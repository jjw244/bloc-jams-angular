(function() {
    function SongPlayer() {
        /**
        * @desc Song Player object housing state of song item (pause/play/stop)
        * @type {Object}
        */
        var SongPlayer = {};

        /**
        * @desc Song object state of current song
        * @type {Object}
        */
        var currentSong = null;
        
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
        
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
        };
        
        /**
         * @function playSong
         * @desc Plays currently clicked song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }

        /**
         * @function SongPlayer.play
         * @desc Checks to see if the currentSong is the clicked song.  If the currentSong is different, then the currentSong is stopped and changed to the clicked song. If the currentSong is the same song clicked, then the currentSong is checked to see if it is paused and plays the song if it is.
         * @param {Object} song
         */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
                
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }    
        };
        
        /**
         * @function SongPlayer.pause
         * @desc If the currentSong is playing and the play/pause button is clicked, the song is paused and song.playing is set to false.
         * @param {Object} song
         */
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();