const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/convert', async (req, res) => {
    try {
        const videoUrl = req.body.url; // Make sure to validate this URL
        if (!ytdl.validateURL(videoUrl)) {
            return res.status(400).json({ error: 'Invalid URL' });
        }

        const videoStream = ytdl(videoUrl, {
            quality: 'highest',
            filter: format => format.hasVideo && format.hasAudio
        });

        res.setHeader('Content-Type', 'video/mp4');
        videoStream.pipe(res);

        // The rest of your existing code follows
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});