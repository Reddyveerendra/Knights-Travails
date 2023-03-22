
class Node {
    constructor(data) {
        this.data = data
        this[0] = null
        this[1] = null
        this[2] = null
        this[3] = null
        this[4] = null
        this[5] = null
        this[6] = null
        this[7] = null
    }
}

class Tree {
    constructor(arr1, arr2) {
        this.root = new Node(arr1);
        this.end = arr2;
    }
    AllPossibleMoves(arr = [this.root]) {
        if (!arr.length) {
            return;
        }
        let temp = arr.shift()
        if (JSON.stringify(temp.data) === JSON.stringify(this.end)) {
            return this.path(this.root, this.end)
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
            if (temp[i].data[0] > 8 || temp[i].data[0] < 0) {
                temp[i] = null;
            }
            else if (temp[i].data[1] > 8 || temp[i].data[1] < 0) {
                temp[i] = null;
            }
            if (temp[i] !== null) {
                arr.push(temp[i])
            }
        }
        return this.AllPossibleMoves(arr);
    }
    path(temp = this.root, end, arr = []) {
        if (!temp) {
            return;
        }
        if (JSON.stringify(temp.data) == JSON.stringify(end)) {
            arr.push(temp.data);
            return arr.join("\n");
        }
        let subArr = arr.map(x => (x));
        subArr.push(temp.data);
        for (let i = 0; i < 8; i++) {
            let result = this.path(temp[i], end, subArr);
            if (result) {
                return result
            }
        }
    }
}
function knightMoves(start, end) {
    let knight = new Tree(start, end)
    console.log(knight.AllPossibleMoves())
}

knightMoves([0, 4], [0, 1])