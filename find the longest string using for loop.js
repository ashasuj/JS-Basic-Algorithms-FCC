function findLongestWordLength(str) {
 let arr = str.split(" ");
 let longString = 0;
 for(let i=0;i<arr.length ;i++)
 {
   if(arr[i].length > longString)
   {
     longString = arr[i].length;
     
   }
 }
 
  return longString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");