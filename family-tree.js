class FamilyTree {
  constructor (famHead) {
    if (famHead === undefined) {
      throw 'Please insert a Family.'
    }
    else if (typeof famHead !== 'string') {
      throw 'Please enter the family with a string'
    }
    this.value = famHead
    this.children = []
  }

  insert(addFamMem) {
    // famObj = addFamMem: {}
    let newChild = new FamilyTree(addFamMem)
    this.children.push(newChild)
  }

  familySize() {
    return this.children.length + 1
  }

  findMember(name) {
    if (name === this.value) {
      return this
    }
    for (let i = 0; i < this.children.length; i++) {
      let elem = this.children[i]
      if(elem.value === name) {
        return elem
      }
    }
  }

  log() {
    let log = ''
    log += `-- ${this.value}\n`

    for (let i = 0; i < this.children.length; i++) {
      let elem = this.children[i]
      log += `---- ${elem.value}\n`
      for (let j = 0; j < elem.children.length; j++) {
        log += `------ ${elem.children[j].value}\n`
      }
    }
    return log
  }
}

module.exports = FamilyTree;
