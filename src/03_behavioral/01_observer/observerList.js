class ObserverList {

    constructor() {
        this.list = [];
    }

    add(observer) {
        this.list.push(observer);
    }

    remove(observer) {
        let index = this.indexOf(observer);
        if (index >= 0) {
            this.list.splice(index, 1);
        }
    }

    indexOf(observer) {
        let i = 0;
        while (i < this.list.length) {
            if (observer === this.list[i]) {
                return i;
            }
            i++
        }
        return -1;
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                let value = index < this.list.length ?
                    this.list[index++] :
                    undefined;
                let done = value === undefined;
                return {
                    done,
                    value
                }
            }
        }
    }
}

module.exports = ObserverList;