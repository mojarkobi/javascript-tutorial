# arrow function this keyword effect

```javascript
let course = {

    name: "Javascript course",
    studentNames: ["ashik","hridoy","ruhulamin"],
    printName: function(){
        console.log(this); //check this value
        this.studentNames.forEach(function(n){
            console.log(`${this.name} enrolled ${n}`);
        })
    }

}


course.printName();
```

উপরের কোড টি রেজাল্ট আসবে
undefined enrolled ashik
undefined enrolled hridoy
undefined enrolled ruhulamin

কারণ

```javascript

this.studentNames.forEach(function(n){
            console.log(`${this.name} enrolled ${n}`);
        }
```

উপরের ফাংশনে  this.studentNames.forEach পযর্ন্ত  this এর ভ্যালু course অবজেক্টকে হোল্ড করে ছিলো
কিন্তু forEach এর ভেতরে this পালটে গেছে কারণ foreach function টি জাভাস্ক্রিপ্ট এর বিল্ট ইন ফাংশন তাই
এটিকে কল করার সময় যে কল করেছে তার রেফারেন্স ভ্যালু হিসেবে এতে থাকেনা

কিন্তু যদি নরমাল ফাংশন ব্যবহার করার পরিবর্তে arrow function ব্যবহার করি তাহলে এটি তার আউটার this কে পরিবর্তন করবে না।

তবে চালাকে করে outer this টিকে একট ভ্যারিয়েবলে হোল্ড করেও এটা করা যাবে
নিচে তার উদাহরন দেয়া হলো

```javascript
let course2 = {

    name: "Javascript course",
    studentNames: ["ashik","hridoy","ruhulamin"],
    printName: function(){
         const self = this; //hold this into self variable
        this.studentNames.forEach(function(n){
            console.log(`${self.name} enrolled ${n}`); // here use self to refer outer this
        })
    }

}

course2.printName();
```

উপরে কোডে দেখানো হলো যে  const self = this দ্বারা this কে self  এ হোল্ড করে রাখা হলো
তারপর কেমন করে forEach ফাংশনের ভেতরের কলব্যাক ফাংশনটাতে self.name ব্যবহার আউটার this.name এর ফলাফল পাওয়া গেলো
তবে উপরের পদ্বতি এখন আর দরকার নেই কারণ arrow function ব্যবহার করে সহজেই const self = this ছাড়াই
সরাসরে this.name ব্যবহার করে একই ফলাফল পেতে পারি কারণ  arrow function ব্যবহার করলে outer this কে পরিবর্তন করেনা

```javascript

let course3 = {

    name: "php course",
    studentNames: ["tamim","hridoy","ashik"],
    printName: function(){
         
        this.studentNames.forEach( (n)=> console.log(`${this.name} enrolled ${n}`));
    }

}

course3.printName();
```
