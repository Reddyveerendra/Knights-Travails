class Node {
    constructor(data) {
        this.data = data;
        for (let i = 0; i < 8; i++) {
            this[i] = null;
        }
    }
}
class Tree {
    constructor(arr1, arr2) {
        this.root = new Node(arr1);
        this.end = arr2;
    }
    AllPaths = function (arr = [this.root]) {
        if (!arr.length) {
            return;
        }
        let temp = arr.shift();
        if (JSON.stringify(temp.data) === JSON.stringify(this.end)) {
            return this.Paths(this.root, this.end);
        }
        temp[0] = new Node([(temp.data[0] + 1), (temp.data[1] + 2)]) /*arg1 array +1 to 0 and +2 to 1*/
        temp[1] = new Node([(temp.data[0] + 1), (temp.data[1] - 2)])
        temp[2] = new Node([(temp.data[0] - 1), (temp.data[1] + 2)])
        temp[3] = new Node([(temp.data[0] - 1), (temp.data[1] - 2)])
        temp[4] = new Node([(temp.data[0] + 2), (temp.data[1] + 1)])
        temp[5] = new Node([(temp.data[0] + 2), (temp.data[1] - 1)])
        temp[6] = new Node([(temp.data[0] - 2), (temp.data[1] + 1)])
        temp[7] = new Node([(temp.data[0] - 2), (temp.data[1] - 1)])
        for (let i = 0; i < 8; i++) {
            if (temp[i].data[0] < 0 || temp[i].data[0] > 7) {
                temp[i] = null;
            }
            else if (temp[i].data[1] < 0 || temp[i].data[1] > 7) {
                temp[i] = null;
            }
            if (temp[i]) {
                arr.push(temp[i])
            }
        }
        return this.AllPaths(arr)
    }
    Paths(temp = this.root, end, arr = []) {
        if (!temp) {
            return;
        }
        if (JSON.stringify(temp.data) == JSON.stringify(end)) {
            arr.push(temp.data);
            return `You made it in ${arr.length} moves!  Here's your path: \n${arr.join("\n")}`;
        }
        let subArr = arr.map(x => (x))
        subArr.push(temp.data)
        for (let i = 0; i < 8; i++) {
            let sol = this.Paths(temp[i], end, subArr)
            if (sol) {
                return sol
            }
        }
    }
}
knightMoves = function (start, end) {
    let knight = new Tree(start, end)
    console.log(knight.AllPaths())
}

knightMoves([0, 0], [7, 7])