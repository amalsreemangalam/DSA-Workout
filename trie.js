class TreeNode {
    constructor() {
        
        this.children = {};
       
        this.endofNode = false;
    }
}

class Trie {
    constructor() {
       
        this.root = new TreeNode();
    }

    insert(word) {
        let cur = this.root;
        
        for (const char of word) {
            if (!cur.children[char]) {
                cur.children[char] = new TreeNode();
            }
            cur = cur.children[char];
        }
        
        cur.endofNode = true;
    }

    search(word) {
        let node = this.root;
      
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
       
        return node.endofNode;
    }

    print(node = this.root, curword = '', result = []) {
        if (node.endofNode) {
            result.push(curword);
        }
        for (const char in node.children) {
            this.print(node.children[char], curword + char, result);
        }
        return result;
    }
    autoComplete(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        let list = [];
        this.Complete(node, word, list);
        return list;
    }
    Complete(node, word, list) {
        // Recursively explore the trie, collecting words when reaching the end of a word
        if (node.endofNode) {
            list.push(word);
        }
        for (const char in node.children) {
            this.Complete(node.children[char], word + char, list);
        }
    }
}
// Example Usage:
const call = new Trie();
call.insert('gokul');
call.insert('gopal');
call.insert("app");
call.insert("apple");
call.insert("application");
call.insert("apricot");
// console.log(call.print());
let autoCompleteList = call.autoComplete("go");
console.log(autoCompleteList);