# Created by josephduklings at 13/03/2017
Feature: #Enter feature name here
  # Enter feature description here

  Scenario: # Enter scenario name here
    # Enter steps here




function stopPlayer() {
        var mediaPlayer;

        mediaPlayer = document.getElementById('myVideo');
        mediaPlayer.controls = false;

        mediaPlayer.pause();
        mediaPlayer.currentTime = 0;

        if ( mediaPlayer.paused ) {
            $('.pause').hide();
            $('.play').show();
        }

    }

    function playPlayer() {
        var mediaPlayer;

        mediaPlayer = document.getElementById('myVideo');
        mediaPlayer.controls = false;

        mediaPlayer.play();
    }

    function playPause() {
        var mediaPlayer = document.getElementById('myVideo');
        if (mediaPlayer.paused) {
            mediaPlayer.play();
            $('.pause').show();
            $('.play').hide();
        } else {
            mediaPlayer.pause();
            $('.play').show();
            $('.pause').hide();
        }

    }
