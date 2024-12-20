const OP = {
    next: 10,
    prev: -10
}

function getSec(time) {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
}

function getTime(sec) {
    const m = Math.floor(sec / 60).toString();
    const s = (sec % 60).toString();
    return `${m.padStart(2, '0')}:${s.padStart(2, '0')}`
}

function solution(video_len, pos, op_start, op_end, commands) {
    let posTime = getSec(pos);
    const videoTime = getSec(video_len);
    const opStartTime = getSec(op_start);
    const opEndTime = getSec(op_end);
    if(posTime >= opStartTime && posTime <= opEndTime) {
        posTime = opEndTime;
    }
    commands.forEach(command => {
        const currentTime = posTime + OP[command];
        const isOpening = currentTime >= opStartTime && currentTime <= opEndTime;
        const isStart = currentTime < 0;
        const isEnd = currentTime > videoTime;
        if(isOpening) {
            posTime = opEndTime;
        }
        else if(isStart) {
            posTime = 0;
        }
        else if(isEnd) {
            posTime = videoTime;
        }
        else {
            posTime = currentTime;
        }
        if(posTime >= opStartTime && posTime <= opEndTime) {
            posTime = opEndTime;
        }
    })
    return getTime(posTime);
}