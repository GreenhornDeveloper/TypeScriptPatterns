/* 
Using Generics - Basically allowing the interface to accept any type of data
the user inputs, but enforcing the same data type is output. This is denoted by the
<T> suffix
 */

// run with tsc --target es2017 Iterator.ts && node Iterator.js

class MyIteratorClass implements Iterator<any>{

    private _index: number = 0
    private _data: any[] =[]

    constructor(data: any[]) {
        this._data = data;
      }
      

      next(): IteratorResult<any> {
          const result = this._data[this._index]
          this._index++;
          if(this._index <= this._data.length){
                return {value: result, done: false}
          } else{
                return {value: null, done: true}    
          }
      }


  }

  const someData = [ "one", "two", "three"]
  const iterable = new MyIteratorClass(someData)

  console.log(iterable.next())
  console.log(iterable.next())
  console.log(iterable.next())
  console.log(iterable.next())