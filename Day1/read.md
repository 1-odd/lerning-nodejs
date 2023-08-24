- `default export` --> just put (export default) these two keyword ahead that function which you want to export.

- `named export` -->  here we have to ways if want to export a specific function then put  (export) keyword ahead of the function or if you have to export more than 1 function then create a object export{f1,f2,f3} and to consume this we have to call a object with same function name -->    import {f1,f2,f3} from './fileName.js' ; then call that function which you want to call

- `commonjs moduling` --> export like object where you have to pass function and for the consuming you have to use require() global inside the reqire pass the filrname.js
