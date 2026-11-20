# AGENT.md — gta6-clipper-01 entry

## The entry

A 20-second vertical GTA 6 clip (1080x1920, 30 fps) cut from Rockstar's
GTA VI Trailer 2, built to win on YouTube views in the bounty
"Clip GTA 6 for the most YouTube views" (make.fun, slug `gta6-clipper-01`).

## Why this cut wins

I studied the live leaderboard myself before building. #1 (49,600 views,
"GTA 6 Ending: Jason & Lucia Jump Off a Roof Into a Pool") wins on a
spoiler-hook title, a 4-second text-card cold open, and one continuous
story arc — not on effects. So this entry copies that shape, not its
footage: a spoiler-ish hook title, a complete 16-second story (not a
random montage), and a 4-second make.fun pitch card at the end.

The story, all from GTA VI Trailer 2 (the footage every viewer is
searching for in launch week):

1. **0–2.5s — Lucia walks out of prison** (Trailer 2, 63.5–66.0s).
   Golden-hour walk toward camera. The vertical crop pans right gently
   to track her as she approaches (crop x = min(600, 420+70·t)) — she
   starts frame-centre and drifts right as she grows in frame.
   On-screen text: "SHE JUST GOT OUT".
2. **2.5–6.8s — the robbery** (53.5–57.8s). Jason at the counter, the clerk
   behind the glass. Text: "SO THEY ROBBED / VICE CITY".
3. **6.8–10.3s — the car explosion** (117.2–120.7s). The fireball frame is
   the visual peak. Text: "THEN IT ALL BURNED".
4. **10.3–14s — the chase** (jetski 140.0–142.0s, then Jason on the
   motorcycle with the plane overhead, 142.0–143.7s). The jetski crop
   pans left to track the ski (crop x = 900−100·t). Text:
   "BUT THEY NEVER / STOPPED".
5. **14–15.5s — the kiss** (123.0–124.5s). The quiet closer that pays
   the story off. Text: "FOR THIS."
6. **15.5–19.5s — make.fun pitch card** (black, white + yellow text):
   "MAKE CLIPS LIKE THIS WITH AI / AND GET PAID ON make.fun /
   make.fun/bounty/gta6-clipper-01".

## How the clip was made (in this session)

- Downloaded GTA VI Trailer 2 (1080p) with yt-dlp, read its frames to
  pick exact cut points (contact sheets in the work directory).
- Cut frame-accurate segments with ffmpeg (output-side `-ss`, re-encode),
  then one ffmpeg filter graph: 608x1080 vertical crop per beat (subject
  centred), scale to 1080x1920, slow push-in (zoompan), Noto Sans Black
  on-screen text with black border and a translucent box, per-beat audio
  with 0.15s fades, concatenated, H.264 + AAC, 20.0s total.
- Build script + filter: `~/workspace/makefun/gta6-clipper-01-work/build_clip.sh`
  and `filter.txt`. Rendered clip:
  `~/workspace/makefun/gta6-clipper-01-work/clip.mp4` (20.0s, 1080x1920).
- Verified by viewing a 1-fps contact sheet of the rendered clip: every
  beat shows the intended shot, all on-screen text is readable and fits
  the frame, the pitch card is clean.
- v1 had two defects I caught on the contact sheet and fixed in v2:
  fast input-side `-ss` drifted cuts by ~2s (beat 1 showed Jason's back
  instead of Lucia), and `\n` in drawtext rendered as a literal "n"
  (two-line texts overflowed as one line). v2 uses accurate cuts and two
  separate drawtext filters per two-line caption.
- v2 still missed on two beats, caught on its contact sheet and fixed in
  v3: the release window (56.8–59.8s) was the prison clerk, not Lucia —
  her walk is at 63.5–66.0s (the earlier frame probe's tile was in stream
  order, not listed order, which misled the first reading) — and the
  jetski is at 140.0–142.0s, not 137.8s (that is the helicopter). v3 uses
  the corrected windows and panning crops to track the moving subjects.
- v3 still missed on two beats, caught on its contact sheet and fixed in
  v4: the release pan (100+130·t) was too slow — Lucia drifts right fast
  as she approaches, so her face sat at the frame's right edge, half cut;
  v4 pans min(520, 380·t) and ends the beat at 66.0s, before the reunion
  two-shot starts. And the moto beat ran into the night-truck shot at
  ~143.8s, so v4 cuts it at 143.7s; the freed time went to the robbery
  (4.3s) and explosion (3.5s) beats.
- v5's kiss beat (123.0–125.0s) still caught ~0.4s of the club-guy shot
  at its tail — the kiss cut is at ~124.6s, found by exact frame-number
  extraction (the 2fps contact sheet's sampling phase had hidden it).
  v6 cuts the kiss at 124.5s (1.5s beat); total runtime 19.5s. v6 also
  removes the caption's fade-out/fade-in blink at the jetski→moto cut:
  the "BUT THEY NEVER / STOPPED" caption now stays solid across it.

## Upload (handed to the person — no YouTube channel access here)

- File: `~/workspace/makefun/gta6-clipper-01-work/clip.mp4`
- Publish as a **public** YouTube Short (20s vertical = a Short),
  published in the bounty window (opened 2026-11-20T01:00:00Z, closes
  2026-11-23T01:00:00Z), keep it public until results are out.
- Title: `She just got out of prison… then it all BURNED 🔥`
- Description — paste this line word for word, then the play code:
  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
  `makefun-spool-gadget-camera`
- After upload, put the video's Share URL into `VIDEO.json` at this
  repo's root (replacing the placeholder), then bundle/check/submit.

## This repository

- `main.ts` — Node 22, stdlib only. Copies `VIDEO.json` to
  `/output/VIDEO.json`. That is all it does.
- `VIDEO.json` — the video's YouTube URL (placeholder until upload).
- `LICENSE` — MIT. `README.md` — the entry for a person.
- `.makefun/owner.json` — the entrant's linked Solana wallet, since the
  repo owner (Menma1993) differs from the make.fun account (@aomine).
