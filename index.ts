class ArrayZ {
    length: number;
    private _lastIndex: number
    
    constructor(length=0){
      this.length = length
      this._lastIndex = null
    }
  
    push(n){
      if(Number.isInteger(this._lastIndex)){
        this._lastIndex = this._lastIndex + 1
        this[this._lastIndex] = n
      } else {
        this._lastIndex = 0;
        this[this._lastIndex] = n
      }
    }
  
    pop(){
      delete(this[this._lastIndex])
      this._lastIndex = this._lastIndex - 1
    }
  
    forEach(cb){
      for(let i = 0; i <= this._lastIndex; i++){
        cb(this[i])
      }
    }
  
    map(cb){
      let arr = new ArrayZ();
      for(let i = 0; i <= this._lastIndex; i++){
        arr.push(cb(this[i]))
      }
      return arr;
    }
  
    reduce(cb, accumulator=''){
      for(let i = 0; i <= this._lastIndex; i++){
        accumulator = cb(accumulator, this[i])
      }
      return accumulator
    }
  
  }


let {log} = console;
let myArr = new ArrayZ();
myArr.push(3);
myArr.push(5);
myArr.push(8);
log(myArr);
log(myArr.reduce((c,a)=>{ c.push(a*a); return c;}, new ArrayZ(10)));