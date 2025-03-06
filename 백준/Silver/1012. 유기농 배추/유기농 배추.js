const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input.shift();

for(let tc=0; tc<T; tc++) {
    const [M, N, K] = input.shift().split(" ").map(Number);
    const arr =  Array(N).fill(0).map(() => Array(M).fill(0));
    const queue = [];

    const findCabbage = () => {
        let ans = 0;
        for(let i=0; i<N; i++) {
            for(let j=0; j<M; j++) {
                if(arr[i][j] === 1) {
                    arr[i][j] = 2;
                    queue.push({ x: j, y: i });
                    ans++;
                    bfs();
                }
            }
        }
        return ans;
    }

    const bfs = () => {
        let dy = [-1, 1, 0, 0];
        let dx = [0, 0, -1, 1];
        while(queue.length) {
            const { x, y } = queue.shift();
            for(let i=0; i<4; i++) {
                const ny = dy[i] + y;
                const nx = dx[i] + x;
                if(ny >= 0 && ny < N && nx >= 0 && nx < M) {
                    if(arr[ny][nx] === 1) {
                        arr[ny][nx] = 2;
                        queue.push({ x: nx, y: ny });
                    }
                }
            }
        }
    }

    for(let i=0; i<K; i++) {
        const [x, y] = input.shift().split(" ").map(Number);
        arr[y][x] = 1;
    }
   
    console.log(findCabbage());
}