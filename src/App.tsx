import React from 'react';
import { Music, AlignJustify as Spotify, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl">
        {/* Album Art */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500/30">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/99/3b/bf993b79-7578-d44c-1897-536e5c23a4c8/5063710570183_cover.jpg/592x592bb.webp"
            alt="Album Art"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Don't Play With My Heart
        </h1>
        <p className="text-center text-purple-200 mb-8">
          Listen now on your favorite platform
        </p>

        {/* Platform Links */}
        <div className="space-y-4">
          <a
            href="https://open.spotify.com/track/2Zfn5Prcf1Q5CS3gVZwzZx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            <Spotify className="w-5 h-5" /> Spotify 🎧
          </a>

          <a
            href="https://music.apple.com/gb/album/dont-play-with-my-heart-single/1805038603"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
          >
            <Music className="w-5 h-5" /> Apple Music 🍎
          </a>

          <a
            href="https://music.youtube.com/playlist?list=OLAK5uy_mjG33cdkayFSoH5PLu4_FVZjtR8jphTtg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <Youtube className="w-5 h-5" /> YouTube Music 🎵
          </a>

          <a
            href="https://www.youtube.com/watch?v=X3T_F1K1KKo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/30"
          >
            <Youtube className="w-5 h-5" /> YouTube Video 📺
          </a>

          <a
            href="https://www.deezer.com/en/track/3299285731"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Music className="w-5 h-5" /> Deezer 🎶
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
