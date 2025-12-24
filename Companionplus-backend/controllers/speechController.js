const axios = require("axios");

exports.speechToText = async (req, res) => {
  try {
    console.log("FILE RECEIVED:", req.file);
     console.log("HEADERS:", req.headers);
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);
    if (!req.file) {
      return res.status(400).json({ message: "Audio file required" });
    }

    // 1️⃣ Upload audio file to AssemblyAI
    const uploadRes = await axios.post(
      "https://api.assemblyai.com/v2/upload",
      req.file.buffer,
      {
        headers: {
          authorization: process.env.ASSEMBLYAI_API_KEY,
          "content-type": "application/octet-stream",
        },
      }
    );

    const audioUrl = uploadRes.data.upload_url;

    // 2️⃣ Request transcription
    const transcriptRes = await axios.post(
      "https://api.assemblyai.com/v2/transcript",
      {
        audio_url: audioUrl,
      },
      {
        headers: {
          authorization: process.env.ASSEMBLYAI_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    const transcriptId = transcriptRes.data.id;

    // 3️⃣ Poll for result
    let transcript;
    while (true) {
      const pollRes = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        {
          headers: {
            authorization: process.env.ASSEMBLYAI_API_KEY,
          },
        }
      );

      if (pollRes.data.status === "completed") {
        transcript = pollRes.data.text;
        break;
      }

      if (pollRes.data.status === "error") {
        throw new Error("Transcription failed");
      }

      await new Promise((r) => setTimeout(r, 2000));
    }

    res.json({ text: transcript });
  } catch (error) {
    console.error("ASSEMBLY AI ERROR:", error.message);
    res.status(500).json({ message: "Speech to text failed" });
  }
};
